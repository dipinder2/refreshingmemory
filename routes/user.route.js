const {create, login} = require("../controllers/user.controller.js")

module.exports = app => {
	app.post("/api/v1/user/register/:username/:password", create)
	app.post("/api/v1/user/login/:username/:password", login)
}