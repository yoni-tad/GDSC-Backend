const express = require('express')
const { getNews, postNews, putNews, deleteNews, getOneNews } = require('../controller/news_controller')
const router = express.Router()

router.get('/news', getNews)

router.get('/getOne/:id', getOneNews)

router.post('/news', postNews)

router.put('/news/:id', putNews)

router.delete('/news/:id', deleteNews)

module.exports = router