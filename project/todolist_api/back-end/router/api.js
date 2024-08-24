const express = require('express')
const router = express.Router()
const { postTodoController, getTodoController, putTodoController, deleteTodoController } = require('../controller/todo_controller')

router.get("/todos", getTodoController)

router.post("/todos", postTodoController)

router.put('/todos/:id', putTodoController)

router.delete('/todos/:id', deleteTodoController)

module.exports = router