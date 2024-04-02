const {User} = require("../models/user.model")
const {hash_password} = require("../configs/bcrypt.config.js")


const UserControllerFunctions = {
	create : async function(req,res){
		console.log("creating User")
		hash_password(req.params.password).then(hash=>{
			console.log("the hashpassword's",hash)
			User.create({...req.params, password:hash}).then(user=>{
					console.log("created ", user)
					res.send(user)
				}).catch(err=>{
					console.log("error creating user"); 
					res.send(err)
				})
		})
	},
	find: function(req,res){
		
	}

}

module.exports = UserControllerFunctions