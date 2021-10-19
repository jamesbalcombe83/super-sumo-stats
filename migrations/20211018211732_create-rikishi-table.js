
exports.up = function(knex) {
    return knex.schema.createTable('rikishi', (table) => {
        table.increments('id').primary()
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
};

exports.down = function(knex) {
  return knex.schema.dropTable("locations");
};
