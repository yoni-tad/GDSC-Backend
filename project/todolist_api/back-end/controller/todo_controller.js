const Todo = require('../model/todos')

exports.getTodoController = async (req, res) => {
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
}

exports.postTodoController = async (req, res) => {
    try {
        const newTodo = await Todo.create({
            todo: req.body.todo
        })

        res.status(201).json(newTodo)
    } catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'Server error'})
    }
}

exports.putTodoController = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        if (!todo) {
            res.status(404).json({message: "Todo not found"})
        }
        const updateTodo = await Todo.findByIdAndUpdate(req.params.id, {checked: req.body.checked}, {new: true})
        res.json(updateTodo)
    } catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'Server error'})
    }
}

exports.deleteTodoController = async(req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        if (!todo) {
            res.status(404).json({message: "Todo not found"})
        }
        const deleteTodo = await Todo.findByIdAndDelete(req.params.id)
        res.json({message: "Todo delete successfully"})
    } catch(e) {
        console.log(e.message)
        res.status(500).json({message: "Server error"})
    }
}