const {create, find} = require("../controllers/user.controller.js")

module.exports = app => {
	app.get("/api/user/create/:username/:password", create)

}