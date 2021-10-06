const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const authSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"]
    }
}
);

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;