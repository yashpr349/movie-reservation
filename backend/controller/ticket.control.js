const { validationResult } = require('express-validator')
const usermodel = require('../model/user.model')
const ticketservice = require('../service/ticket.service')
const jwt = require('jsonwebtoken')

function isvalidrequest(req, res){
    if (!error.isEmpty()) return res.status(400).json({ errors: error.array() })
}

module.exports.movieCreate = async (req, res) => {
    isvalidrequest(req, res)
    const { token, moviename, description, image, price, seats, date, time} = req.body
    if(!token || !moviename || !description || !image || !price || !seats || !date || !time) {
        return res.status(400).json({ errors: 'All fields are required' })
    }
    const _id = () => {
        return jwt.verify(token, process.env.JWTSECRET)
    }
    if (!_id) {
        return res.status(401).json({ errors: 'Invalid token' })
    }
    const admin = await usermodel.findById(_id()).select('+role')
    if (!admin || admin.role !== 'admin'){
        return res.status(403).json({ errors: 'Access denied' })
    }
    const result = await ticketservice.createTicket({
        moviename: moviename,
        description: description,
        image: image,
        price: price,
        seats: seats,
        date: date,
        time: time
    })
    res.send({
        message: 'Ticket created successfully',
        data: result
    })
}

module.exports.movieDelete = async (req, res) => {
    isvalidrequest(req, res)
    const { token, ticketId } = req.body
    if(!token || !ticketId) {
        return res.status(400).json({ message: 'Token and Ticket ID are required' })
    }
    const _id = () => {
        return jwt.verify(token, process.env.JWTSECRET)
    }
    if (!_id) {
        return res.status(401).json({ message: 'Invalid token' })
    }
    const admin = await usermodel.findById(_id()).select('+role')
    if (!admin || admin.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' })
    }
    const result = await ticketservice.deleteTicket({ticketId})
    if (!result) {
        return res.status(404).json({ message: 'Ticket not found' })
    }
    res.send({
        message: 'Ticket deleted successfully',
        data: result
    })
}

module.exports.movieUpdate = async (req, res) => {
    isvalidrequest(req, res)
    const { token, ticketId, moviename, description, image, price, seats, date, time } = req.body
    if(!token || !ticketId) {
        return res.status(400).json({ errors: 'Token and Ticket ID are required' })
    }
    const _id = () => {
        return jwt.verify(token, process.env.JWTSECRET)
    }
    if (!_id) {
        return res.status(401).json({ errors: 'Invalid token' })
    }
    const admin = await usermodel.findById(_id()).select('+role')
    if (!admin || admin.role !== 'admin') {
        return res.status(403).json({ errors: 'Access denied' })
    }
    const updateData = await ticketservice.movieUpdate({
        ticketId,
        moviename,
        description,
        image,
        price,
        seats,
        date,
        time
    })
    if (!updateData) {
        return res.status(404).json({ errors: 'Ticket not found' })
    }
    res.send({
        message: 'Ticket updated successfully',
        data: updateData
    })
}