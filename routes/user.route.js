const {create, login} = require("../controllers/user.controller.js")

module.exports = app => {
	app.get("/api/user/create/:username/:password", create)
	app.get("/api/user/login/:username/:password", login)
}