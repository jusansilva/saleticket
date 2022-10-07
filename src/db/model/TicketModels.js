const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TicketSchema = new Schema({
    events: {
        type: Object,
        require: [true, '*Campo Obrigatório!']
    },
    ticketType: {
        type: Object
    },
    client: {
        type: Object
    }
})

const Ticket = mongoose.model(`Ticket`, TicketSchema);

module.exports = Ticket;