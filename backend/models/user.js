const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    startedAt: {
        type: Date,
        immutable: true,
        default: Date.now(),
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User