const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const EventsSchema = new Schema({
    name: {
        type: String,
        require: [true, '*Campo Obrigatório!']
    },
    data: {
        type: Date
    },
    ticket: {
        type: Object
    },
    manager: {
      type: ObjectId,
      require: [true, '*Campo é obrigatorio'] 
    },
    status: {
        type: Boolean,
        default: true
    }
})

const Events = mongoose.model(`Eventos`, EventsSchema);

module.exports = Events;