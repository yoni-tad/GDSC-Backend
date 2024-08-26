const express = require('express')
const { Register, Login, Profile } = require('../controller/auth_controller')
const { authenticate } = require('../middleware/auth')
const router = express.Router()

router.post('/register', Register)
router.post('/login', Login)

router.get('/profile', authenticate, Profile)

module.exports = router