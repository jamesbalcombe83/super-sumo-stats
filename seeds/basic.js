const fs = require("fs");
const db = require('../server/knex.js')

exports.seed = async function(knex) {
  const allRikishi = getRikishiData();
  // Deletes ALL existing entries
  return knex('rikishi')
  .del()
  .then(async function () {
    // Inserts seed entries
    return db('rikishi').insert(allRikishi);
  });
};

//grab all data from the json
//this will need to be updated once additiona db tables are added 
function getRikishiData() {
  try {
    const data = [];
    const rikishi = JSON.parse(fs.readFileSync('./apify_storage/key_value_stores/default/allRikishi.json'));
    for (const wrestler of rikishi) {
      const ringName = wrestler.ringName;
      const realName = wrestler.realName;
      const dateOfBirth = wrestler.dateOfBirth;
      const birthPlace = wrestler.birthPlace;
      const heya = wrestler.heya;
      const highestRank = wrestler.highestRank;
      const height = wrestler.height;
      const weight = wrestler.weight;
      const openingBasho = wrestler.openingBasho;
      const retirementBasho = wrestler.retirementBasho;
    
      data.push({
        ringName,
        realName,
        dateOfBirth,
        birthPlace,
        heya,
        highestRank,
        height,
        weight,
        openingBasho,
        retirementBasho
      })
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}
