const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TicketTypeSchema = new Schema({
    name: {
        type: String,
        require: [true, '*Campo Obrigatório!']
    },
    valor: {
        type: String
    }
})

const TicketType = mongoose.model(`TicketType`, TicketTypeSchema);

module.exports = TicketType; 