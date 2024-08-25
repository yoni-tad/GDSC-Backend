const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        require: true
    },
    checked: {
        type: Boolean,
        default: false
    },
}, {timestamps: true})

module.exports = mongoose.model("todo", TodoSchema)