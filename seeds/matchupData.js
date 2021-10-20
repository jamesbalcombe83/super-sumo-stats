const { match } = require("assert");
const fs = require("fs");
const db = require('../server/knex.js')

exports.seed = async function(knex) {
  let data = JSON.parse(fs.readFileSync('./apify_storage/key_value_stores/default/allRikishi.json'));
  data = prune(data);
  //console.log(data);
  await db('matchups').del();
  for (const match of data) {
    const riki1 = match.riki1;
    const riki2 = match.riki2;
    const record = match.record;
    await db('matchups').insert(
      {
        riki1,
        riki2,
        record,
      }
    )
  }
}


function prune(data) {
  const riki = [];
  let match = [];
  for (const item of data) {
    if (item.rikishi) {
      riki.push(item.rikishi.id)
    } else if (item.matchup) {
      match.push(item.matchup)
    }
  }
  match = match.filter((match) => {
    if (riki.includes(match.riki1) && riki.includes(match.riki2)) {
      return match;
    }
  })
  return match;
}