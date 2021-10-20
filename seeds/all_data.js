const { match } = require("assert");
const fs = require("fs");
const db = require('../server/knex.js')

exports.seed = async function(knex) {
  const {rikiData, matchData} = getRikishiData();
  // Deletes ALL existing entries
  return knex('rikishi')
  .del()
  .then(async function () {
    // Inserts seed entries
    return db('rikishi').insert(rikiData);
  })
};


//grab all data from the json
//this will need to be updated once additiona db tables are added 
function getRikishiData() {
  try {
    const rikiData = [];
    const matchData = [];
    const rikishi = JSON.parse(fs.readFileSync('./apify_storage/key_value_stores/default/allRikishi.json'));
    for (let record of rikishi) {
      if (record.rikishi) {
        record = record.rikishi;
        const id = record.id
        const ringName = record.ringName.trim();
        const realName = record.realName.trim();
        const dateOfBirth = record.dateOfBirth;
        const birthPlace = record.birthPlace.trim();
        const heya = record.heya.trim();
        const highestRank = record.highestRank.trim();
        const height = record.height;
        const weight = record.weight;
        const openingBasho = record.openingBasho;
        const retirementBasho = record.retirementBasho;
        rikiData.push({
          id,
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
      } else if (record.matchup) {
        record = record.matchup;
        matchData.push(
            {record}
        )
      }    
    }
    return { rikiData, matchData };
  } catch (error) {
    console.log(error);
  }
}
