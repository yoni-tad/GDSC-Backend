const express = require("express")
const mongoose = require("mongoose")
const router = require("./router/api")
const app = express()

mongoose.connect('mongodb+srv://yonitube2404:beti2020yoni@todo-list.ynr3p.mongodb.net/?retryWrites=true&w=majority&appName=todo-list')

app.use(express.json())
app.use('/api', router)
app.use(express.static('../front-end'))

app.listen(3000, () => console.log("Server start port at 3000"))
