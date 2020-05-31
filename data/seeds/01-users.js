exports.seed = async function(knex) {
	await knex("users").truncate()
	await knex("users").insert([
			{ name: "hasan" },
			{ name: "amin" },
			{ name: "maryam" },
			{ name: "tara" },
			{ name: "maan" },
		])
}