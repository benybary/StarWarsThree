const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema and collection
let Product = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number, default: 1
    }
});

module.exports = mongoose.model('Product', Product, 'product')



