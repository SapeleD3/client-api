const mongoose = require('mongoose');
const joi = require('@hapi/joi');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

const User = mongoose.model('User', userSchema);;

function validateUser(user) {
    const schema = {
        name: joi.string().required(),
        email: joi.string().required().email(),
        password: joi.string().min(5).required()
    };
    return joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;