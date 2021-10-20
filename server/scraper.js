// This is the main Node.js source code file of your actor.
// It is referenced from the "scripts" section of the package.json file,
// so that it can be started by running "npm scrape".

// Import Apify SDK. For more information, see https://sdk.apify.com/
const Apify = require('apify');
const { constructPseudoUrlInstances } = require('apify/build/enqueue_links/shared');
const { utils: { enqueueLinks },
} = Apify;

const scraper = Apify.main(async () => {
    // Get input of the actor.
    // If you'd like to have your input checked and have Apify display
    // a user interface for it, add INPUT_SCHEMA.json file to your actor.
    // For more information, see https://docs.apify.com/actors/development/input-schema
    
    //Create queue instance
    const requestQueue = await Apify.openRequestQueue();
    // Add a request to it
    await requestQueue.addRequest({ url: 'http://sumodb.sumogames.de/Query.aspx?show_form=0&n_basho=1&form1_year=2021&form1_month=9&form1_m=on' });

    //Write a page handler
    const handlePageFunction = async ({ request, $ }) => {

        // Here starts the new part of handlePageFunction.
        //get all the links, but using the enqueueLinks utility
        //specific pseudoURLs https://sdk.apify.com/docs/api/pseudo-url 
        const enqueued = await enqueueLinks({
            $,
            requestQueue,
            //only looks for individual rikishi info pages
            pseudoUrls: ['http[s?]://sumodb.sumogames.de/Rikishi.aspx?r=[.*]', 'http[s?]://sumodb.sumogames.de/Rikishi_opp.aspx?r=[.*]'],
            baseUrl: request.loadedUrl,
        });

/*         var text = $('.layoutright').contents().map(function() {
            console.log(this.name);
            if(this.name === 'a')    
                return $(this.attribs);
        });

        console.log(text); */

        const data = [];
        if ($('title:contains("bouts by")')) {
            const allSpans = $('.layoutright').find($('.rb_basho'));
            allSpans.each((ind, el) => {
                const results = {};
                const links = $(el).find($('a'));
                links.each((ind, el) =>{
                    results["riki"+(ind+1)] = Number($(el).attr("href").split("=")[1]);
                    //console.log("link ", ind, " ", $(el).attr("href").split("=")[1]);
                });
                results.record = $(el).text().split(" ")[3];
                //console.log($(el).text().split(" ")[2]);
                data.push({matchup : results});
            });
        }
        await Apify.pushData(data);

        //search for the TD next to the value required.
        let shikonaLoc = $('*:contains("Shikona")');
        let realNameLoc = $('*:contains("Real Name")');
        let dobLoc= $('*:contains("Birth Date")');
        let birthPlaceLoc= $('*:contains("Shusshin")');
        let heyaLoc= $('*:contains("Heya")');
        let highRank= $('*:contains("Highest Rank")');
        let heightWeightLoc= $('*:contains("Height and Weight")');
        let hatsuLoc= $('*:contains("Hatsu Dohyo")');
        let intaiLoc= $('*:contains("Intai")');
        const result = {
            //extract the next element (always contains the data we want)
            //various string handling to get exact values
            id : Number(request.url.split("=")[1]),
            ringName : $(shikonaLoc).next('td.val').text().split("-").pop(),
            realName : $(realNameLoc).next('td.val').text(),
            dateOfBirth : new Date($(dobLoc).next('td.val').text()),
            birthPlace :  $(birthPlaceLoc).next('td.val').text(),
            heya : $(heyaLoc).next('td.val').text(),
            highestRank : $(highRank).next('td.val').text().split(" ")[0],
            height : Number($(heightWeightLoc).next('td.val').text().split(" ")[0]),
            weight : Number($(heightWeightLoc).next('td.val').text().split(" ")[2]),
            openingBasho : new Date($(hatsuLoc).next('td.val').text()),
            retirementBasho : new Date($(intaiLoc).next('td.val').text()),
        }
        if (result.ringName) {
            await Apify.pushData({rikishi: result});
        }
    };

    // Set up the crawler, passing a single options object as an argument.
    const crawler = new Apify.CheerioCrawler({
        maxRequestsPerCrawl: 100, //limit crawls to prevent too many requests
        requestQueue,
        handlePageFunction,
    });
    
    //run the crawler
    await crawler.run();
    
    //put all dataSet into one JSON
    const dataset = await Apify.openDataset();
    const allRikishi = await dataset.reduce((memo, value) => {
        memo.push(value);
        return memo;
    }, []);
    await Apify.setValue('allRikishi', allRikishi);

});

module.exports = scraper;