const db = require("../data/config")

module.exports = {
	getAll,
	insert,
	findById,
	remove
}

function getAll() {
	return db("users")
}

async function insert(name) {
	const [id] = await db("users").insert(name)
	return findById(id)
}

function findById(id) {
	return db("users").where("id", id).first()
}

function remove(id) {
	return db("users").where("id", id).del()
}