const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	username: {type:String,required:true},
	password: {type:String, minlength:[5, "too short password"], required:true},
	// email:{type:String, minlength:[7, "too short email"], required:true, unique: true },
	// name:{type:String,minlength:[4, "too short name"], required:true}
})




UserSchema.pre('validate', function(next){
	let errs = {"username":""}
	console.log("Validating")
	if(this.username.length<6){
		console.log("length is short")
		errs = {...errs,"username":"username is too short!"}
	}
	if(errs["username"] != ""){
		console.error(errs);
		return next(new Error(JSON.stringify(errs)))
	}
	next()
})

	

const User =  mongoose.model('User', UserSchema)

// UserSchema.path('username').validate(async function(username){
// 	const existing = await User.findOne({"username":username})
// 	if(existing != null) return false

// }, 'Username is not unique!')

module.exports.User = User

