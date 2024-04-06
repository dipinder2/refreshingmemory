//My Requirements

const express = require('express')
const cookieparser = require('cookie-parser')
const cors = require("cors");

const app = express()
const router = express.Router()
const PORT = 8000



//Pretty standard here
//app will use Router Object
//will recieve JSON object requests and all

//Requests will go thru middlwares and all the configs will happen here
const config = require("./configs/mongoose.config.js")
const routesmiddleware = require("./middlewares/user.middleware.js")(router)
const userroutes = require("./routes/user.route.js")(app)
const cartroutes = require("./routes/cart.route.js")(app)


app.use(router)
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieparser());

app.use(cors({credentials: true, origin: '*'}));
//app is listening on PORT default 8000
app.listen(PORT, function(){
	console.log("Listening on Port ", PORT)
});