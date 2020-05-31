const express = require("express")
const Users = require("./users-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.status(200).json(await Users.getAll())
	} catch(err) {
		next(err)
	}
})

module.exports = router

// create
router.post("/register", async (req, res, next) => {
	try {
		const user = await Users.insert(req.body)
		res.status(201).json(user)
	} catch(err) {
		next(err)
	}
})

// delete
router.delete("/:id", async (req, res, next) => {
	try {
		await Users.remove(req.params.id)
		res.status(200).json({
			message: `user ${req.params.id} was deleted`
		})
	} catch(err) {
		next(err)
	}
})