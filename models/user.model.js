const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
	username: {type:String,minlength:[5, "too short username"], required:true},
	password: {type:String, minlength:[5, "too short password"], required:true},
	// email:{type:String, minlength:[7, "too short email"], required:true},
	// name:{type:String,minlength:[4, "too short name"], required:true}
})

const User = mongoose.model('User', UserSchema)


UserSchema.pre('save', async (next) => {
	if(this.username == "dipinder2") return next(console.log("Admin Logged In"))
	console.log(`${this.username} ${this.passoword}`)
})

module.exports.User = User