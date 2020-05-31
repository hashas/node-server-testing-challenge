
exports.up = async function(knex) {
  await knex.schema.createTable("users", table => {
  	table.increments()
  	table.text("name").notNull().unique()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users")
};
