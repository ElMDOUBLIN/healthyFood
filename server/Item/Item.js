// This is the model

var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

// itemSchema 
var ItemSchema = mongoose.Schema({
    name: String,
    benefits: String,
    imageUrl: String,
    price: Number
})

var Item = mongoose.model('Item', ItemSchema)


module.exports = Item;
