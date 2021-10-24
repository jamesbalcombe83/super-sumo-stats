/* const knex = require("knex");

const environment = process.env.NODE_ENV || "development";
const config = require("../knexfile")[environment];

const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/sumo`,
  searchPath: "public",
});

module.exports = db; */