const express = require("express")
const mongoose = require("mongoose")
const router = require("./router/api")
const app = express()

mongoose.connect('mongodb://localhost/todo')

app.use(express.json())
app.use('/api', router)

app.listen(3000, () => console.log("Server start port at 3000"))
