module.exports = router => {
	router.get("/api/user/:name/:age", (req,res,next)=>{
		console.log("user middleware /api/user", req.params.userid)
		next()
	})
}

