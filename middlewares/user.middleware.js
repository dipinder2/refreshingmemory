const {authenticate} = require("../configs/jwt.config.js") 

module.exports = router => {
	router.post("/api/v1/user/register/:username/:password", (req,res,next)=>next())
	router.post("/api/v1/user/login/:username/:password", (req,res,next)=>next())
	router.all("/api/v1/user/*",(req,res,next)=>authenticate)
}

