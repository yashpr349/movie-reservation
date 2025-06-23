const express = require('express');
const router = express.Router()
const {body} = require('express-validator');
const usercontrol = require('../controller/user.control')

router.post('/register', [
    body('name.firstname').notEmpty().withMessage('First name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('phone').isMobilePhone().withMessage('Invalid phone number'),
], usercontrol.userCreate)

router.post('/login',[
    body('email').isEmail().withMessage('invalid email'),
    body('password').trim()
], usercontrol.userLogin)

module.exports = router;