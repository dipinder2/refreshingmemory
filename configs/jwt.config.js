const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports.authenticate = async(req, res, next) => {
  console.log("comeshere")
  jwt.verify(req.cookies.usertoken, process.env.FIRST_SECRET_KEY, (err, payload) => {
    //console.log("this is where it comes", req)
    console.log("payload")
    if (err) { 
      res.status(401).json({verified: false});
      return
    } else {
      req.params._id = [...req.params,payload]
      console.log(payload)
      next();
    }
  })
}

