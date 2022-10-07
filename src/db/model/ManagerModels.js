
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ManagerSchema = new Schema({
    name: {
        type: String,
        require: [true, '*Campo Obrigatório!']
    },
    senha: {
        type: String
    },
    email: {
        type: String
    }
})

const Manager = mongoose.model(`Manager`, ManagerSchema);

module.exports = Manager;