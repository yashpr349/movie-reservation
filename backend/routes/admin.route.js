const express = require('express');
const ticketController = require('../controller/ticket.control');
const router = express.Router();
const { body } = require('express-validator');
const usercontrol = require('../controller/user.control');

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required')
], usercontrol.userLogin);

router.post('/add',[
    body('token').notEmpty().withMessage('Token is required'),
    body('moviename').notEmpty().withMessage('Movie name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('image').notEmpty().withMessage('Image URL is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('seats').isNumeric().withMessage('Seats must be a number'),
    body('date').notEmpty().withMessage('Date is required'),
    body('time').notEmpty().withMessage('Time is required'),
], ticketController.movieCreate);

router.post('/delete', [
    body('token').notEmpty().withMessage('Token is required'),
    body('ticketId').notEmpty().withMessage('Ticket ID is required')
], ticketController.movieDelete);

router.post('/update', [
    body('token').notEmpty().withMessage('Token is required'),
    body('ticketId').notEmpty().withMessage('Ticket ID is required'),
    body('moviename').optional().notEmpty().withMessage('Movie name cannot be empty'),
    body('description').optional().notEmpty().withMessage('Description cannot be empty'),
    body('image').optional().notEmpty().withMessage('Image URL cannot be empty'),
    body('price').optional().isNumeric().withMessage('Price must be a number'),
    body('seats').optional().isNumeric().withMessage('Seats must be a number'),
    body('date').optional().notEmpty().withMessage('Date cannot be empty'),
    body('time').optional().notEmpty().withMessage('Time cannot be empty')
], ticketController.movieUpdate);

module.exports = router;