const supertest = require("supertest")
// import db for beforeEach hook
const db = require("./data/config")
// actual server won't start due to the if statement in index.js
const server = require("./index")

// reseed our db every time we run a test so each test has fresh
// copy of the db, it only clears out test.db3 because thats what
// the environment in package.json (script:test) is specifying
beforeEach(async () => {
	// run our seed(s)
	await db.seed.run()
})

afterAll(async () => {
	await db.destroy()
})

test("welcome route", async () => {
	const res = await supertest(server).get("/")
	expect(res.statusCode).toBe(200)
	expect(res.type).toBe("application/json")
})

test("get users route", async () => {
	const res = await supertest(server).get("/users")
	expect(res.statusCode).toBe(200)
	const users = await db("users").select()
	expect(users).toHaveLength(5)
})

test("create a user route", async () => {
	const res = await supertest(server).post("/users/register").send({ name: "mo" })
	expect(res.statusCode).toBe(201)
	expect(res.body.name).toBe("mo")

})

test("delete user route", async () => {
	const res = await supertest(server).delete("/users/1")
	expect(res.statusCode).toBe(200)
	const users = await db("users").select()
	expect(users).toHaveLength(4)

})