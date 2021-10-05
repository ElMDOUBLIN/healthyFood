var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/items';

// TODO: Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect(mongoUri, {
    useMongoClient: true,
})
var db = mongoose.connection

db.on('error', function () {
    console.log(err)
})
db.once('open', function () {
    console.log('mongodb connection established')
})

module.exports = db;
