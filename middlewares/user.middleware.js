const {authenticate} = require("../configs/jwt.config.js") 

module.exports = router => {
	router.get("/api/user/create/:username/:password", (req,res,next)=>next())
	router.get("/api/user/login/:username/:password", authenticate)
}

