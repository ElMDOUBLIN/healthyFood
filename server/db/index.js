const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/items';

const db = mongoose.connect(mongoUri)
    .then(console.log('database connected'))
    .catch(err => console.log(err))

module.exports = db;
