const {User} = require("../models/user.model")
const {hash_password} = require("../configs/bcrypt.config.js")
const jwt = require("jsonwebtoken")
const Cookies = require("js-cookie")
const UserControllerFunctions = {
	create : async function(req,res){
				console.log(req.params)
		await hash_password(req.params.password).then(hash=>{
			User.create({...req.params, password:hash}).then(user =>{
				const token = jwt.sign({_id:user._id}, process.env.SECRET_KEY_JWT_TOKEN)
				res.cookie('usertoken', token).status(200)
				res.end()
				//res.redirect("/api/user/login")
				}).catch(err=>{
					console.error(err.message);
					res.send(JSON.parse(err.message))
				})
		})
	},

	login:async function(req,res){
		User.find(req.params).then(user=>{
			console.log(user)
			if(user.length<1){
				throw new Error("Couldn't find user")
				return
			}
			console.log(req.params._id)

			const token = jwt.sign({_id:user._id}, process.env.SECRET_KEY_JWT_TOKEN)
			res.cookie('usertoken', token).send(user)
			res.redirect("/api/user/")
		}).catch(err=>{
			res.send(err.message)
		})
	}

}

module.exports = UserControllerFunctions