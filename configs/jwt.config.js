const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports.authenticate = async(req, res, next) => {
  jwt.verify(req.cookies.usertoken, process.env.FIRST_SECRET_KEY, (err, payload) => {
    console.log("this is where it comes", req)
    if (err) { 
      res.status(401).json({verified: false});
      return
    } else {
      console.log("goes thru here")
      next();
    }
  })
}

