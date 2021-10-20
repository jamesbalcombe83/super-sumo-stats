
exports.up = function(knex) {
    return knex.schema.createTable('rikishi', (table) => {
        table.integer('id').primary()
        table.string('ringName')
        table.string('realName')
        table.string('birthPlace')
        table.date('dateOfBirth')
        table.string('heya')
        table.string('highestRank')
        table.decimal('height',4,1)
        table.decimal('weight',4,1)
        table.date('openingBasho')
        table.date('retirementBasho')
      })
      .createTable('matchups', (table) => {
        table.increments('id').primary();
        table.integer('riki1').references('id').inTable('rikishi')
        table.integer('riki2').references('id').inTable('rikishi')
        table.string('record')
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable("matchups").dropTable('rikishi');
};
