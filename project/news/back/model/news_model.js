const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model("NewsModel", newsSchema)