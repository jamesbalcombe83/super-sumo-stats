const { postgraphile } = require('postgraphile')

const { DATABASE, DB_USER, DB_PASSWORD, HOST, PG_PORT } = process.env

module.exports = postgraphile(
    {
        database: DATABASE,
        user: DB_USER,
        password: DB_PASSWORD,
        host: HOST,
        port: PG_PORT,
    },
    'public',
    {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
    }
)