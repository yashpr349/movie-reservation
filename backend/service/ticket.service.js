const ticketModel = require('../model/ticket.model');

module.exports.createTicket = async ({ moviename, description, image, price, seats, date, time }) => {
    if (!moviename || !description || !image || !price) {
        return 'Invalid input';
    }
    
    const ticket = await ticketModel.create({
        moviename: moviename,
        description: description,
        image: image,
        price: price,
        seats: seats, // Default value for seats
        date: date, // Default to current date
        time: time // Default time
    });
    
    return ticket;
}

module.exports.deleteTicket = async ({ticketId}) => {
    if (!ticketId) {
        return 'Ticket ID is required';
    }
    
    const result = await ticketModel.findByIdAndDelete(ticketId);
    
    if (!result) {
        return 'Ticket not found';
    }
    
    return 'Ticket deleted successfully';
}

module.exports.movieUpdate = async ({ ticketId, moviename, description, image, price, seats, date, time })=>{
    if(!ticketId) {
        return 'Ticket ID is required';
    }

    if (!moviename && !description && !image && !price && !seats && !date && !time) {
        return 'No fields to update';
    }
    
    const updateData = [moviename, description, image, price, seats, date, time]
    Object.entries(updateData).forEach(([key, e])=>{
        if(e === undefined || e === null) {
            return;
        }
        console.log(`Updating ${key} to ${e}`);
    })
}