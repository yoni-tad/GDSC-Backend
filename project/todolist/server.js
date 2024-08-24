const express = require('express')
const mongoose = require("mongoose")
const app = express()

// mongo db connection
mongoose.connect("mongodb://localhost/todo_list")

// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs")
app.set('views', './public')

// router
app.use(require("./routes/route"))

// Server configuration
app.listen(7000, (req, res) => console.log("Server start listening at 7000"))