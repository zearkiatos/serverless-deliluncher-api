const mongoose = require('mongoose');
const { ROLES } = require('../../config/constants');

const Schema = mongoose.Schema;

const Users = mongoose.model('User', new Schema({
    email: String,
    password: String,
    salt: String,
    role: {
        type: String,
        default: ROLES.USER
    }
}));

module.exports = Users;