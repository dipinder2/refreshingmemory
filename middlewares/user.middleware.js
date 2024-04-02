const {authenticate} = require("../configs/jwt.config.js") 

module.exports = router => {
	router.all("/api/user/adsf", (req,res,next)=>authenticate(req,res,next))
	router.all("/api/user/*", (req,res,next)=>next())
}

