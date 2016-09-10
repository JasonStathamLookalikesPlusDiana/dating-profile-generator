const pg       = require('pg-promise')({});

const pgConfig = {  host: process.env.PG_HOST,
                    port: process.env.PG_PORT,
                    database: 'express_pg',
                    user:process.env.PG_USER,
                    password: process.env.PG_PASSWORD };

module.exports = pg(pgConfig);