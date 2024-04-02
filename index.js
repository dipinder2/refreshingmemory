const express = require('express')
const app = express()
const router = express.Router()
const PORT = 8000


app.use(router)
app.use(express.json({ extended: false }))

const config = require("./configs/mongoose.config.js")
const routesmiddleware = require("./middlewares/user.middleware.js")(router)
const routes = require("./routes/user.route.js")(app)


app.listen(PORT, function(){
	console.log("Listening on Port 8000")
});