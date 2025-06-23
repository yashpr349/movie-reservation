const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    moviename: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    seats: {
        type: Number,
    },
    date: {
        type: Date,
    },
    time: {
        type: String,
    }
})

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;