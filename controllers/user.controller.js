const {User} = require("../models/user.model");

const UserControllerFunctions = {
	create : function(req,res){
		console.log("creating User")
		//name & age
		const {name,age} = req.params
		console.log(name,age)
		User.create({"name": name,"age":age}).then(user=>{
				console.log("created ", user)
				res.end()
			}).catch(err=>{
				console.log("error creating user"); 
				res.end()
			})
	},

}

module.exports = UserControllerFunctions