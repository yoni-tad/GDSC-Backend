const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/api')
const app = express()

mongoose.connect('mongodb://localhost/news')

app.use(express.json())
app.use('/api', router)
app.use(express.static('../front'))

app.listen(4000, () => {
    console.log("Server start at 4000")
})