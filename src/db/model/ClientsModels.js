const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ClientsSchema = new Schema({
    name: {
        type: String,
        require: [true, '*Campo Obrigatório!']
    },
    document: {
        type: String
    },
    data: {
        type: Date
    }
})

const Clients = mongoose.model(`Clients`, ClientsSchema);

module.exports = Clients;