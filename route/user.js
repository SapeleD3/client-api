const express = require('express')
const router = express.Router();
const userController = require('../constroller/user')

router.get('/dashboard', userController.Dashboard);
router.post('/register', userController.registerUser)

module.exports = router;