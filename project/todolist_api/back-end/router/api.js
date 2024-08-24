const express = require('express')
const router = express.Router()
const Todo = require('../model/todos')

router.get("/todos", async (req, res) => {
    try {
        const todos = await Todo.find({}, 'todo checked')
        if (!todos) {
            return res.status(404).json({message: 'Todos not found'})
        }
        res.json(todos)
    } catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'Server error'})
    }
})

router.post("/todos", async (req, res) => {
    try {
        const newTodo = new Todo({
            todo: req.body.todo
        })
        const saveTodo = await newTodo.save()
        res.status(201).json(saveTodo)
    } catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'Server error'})
    }
})

router.put('/todos/:id', async (req, res) => {
    try {
        const updateTodo = await Todo.findByIdAndUpdate(req.params.id, {checked: req.body.checked}, {new: true})
        if(!updateTodo) {
            return res.status(404).json({message: "Todo not found"})
        }
        res.json(updateTodo)
    } catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'Server error'})
    }
})

router.delete('/todos/:id', async(req, res) => {
    try {
        const deleteTodo = await Todo.findByIdAndDelete(req.params.id)
        if(!deleteTodo){
            return res.status(404).json({message: "Todo not found"})
        }
        res.json({message: "Todo delete successfully"})
    } catch(e) {
        console.log(e.message)
        res.status(500).json({message: "Server error"})
    }
})

module.exports = router