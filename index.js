//My Requirements

const express = require('express')
const app = express()
const router = express.Router()
const PORT = 8000



//Pretty standard here
//app will use Router Object
//will recieve JSON object requests and all
app.use(router)
app.use(express.json({ extended: false }))




//Requests will go thru middlwares and all the configs will happen here
const config = require("./configs/mongoose.config.js")
const routesmiddleware = require("./middlewares/user.middleware.js")(router)
const routes = require("./routes/user.route.js")(app)

//app is listening on PORT default 8000
app.listen(PORT, function(){
	console.log("Listening on Port ", PORT)
});