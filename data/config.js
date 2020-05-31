const knex = require("knex")
const knexfile = require("../knexfile")

// we're checking for the test/dev environment here
const environment = process.env.NODE_ENV || "development"

// specify the environment test/dev in our knexfile
module.exports = knex(knexfile[environment])