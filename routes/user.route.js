const {create} = require("../controllers/user.controller.js")

module.exports = app => {
	app.get("/api/user/:name/:age", create)
}