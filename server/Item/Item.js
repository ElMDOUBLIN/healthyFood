// This is the model

var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

// itemSchema 
var ItemSchema = mongoose.Schema({
    name: String,
    ingredients: Array,
    imageUrl: String,
    price: String
})

var Item = mongoose.model('Item', ItemSchema)


module.exports = Item;
