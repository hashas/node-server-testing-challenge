const express = require("express")
const usersRouter = require("./users/users-router")

const server = express()
const port = process.env.PORT || 3000

server.use(express.json())

server.use("/users", usersRouter)

server.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

// stop the server from starting every time we run import 
// server object in test file and run test
if (!module.parent) {
	server.listen(port, () => {
		console.log(`Running at http://locahost:${port}`)
	})
}

// export server object so we can import it into test file
module.exports = server