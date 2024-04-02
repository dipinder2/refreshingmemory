const bcrypt = require("bcrypt")

const compare_passwords = (password,hash) =>bcrypt.compare(password, hash, (err, result) =>{
	if(err) return err
	return true
})

function hash_password(password){

	return new Promise((resolve,reject)=>{
		bcrypt.hash(password, 10, function(err, hash) {
			if(err) return reject(err)
			console.log(`resolved`,resolve(hash))
			return resolve(hash)
		})
	})
}


module.exports = {hash_password}