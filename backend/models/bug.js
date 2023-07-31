const mongoose = require('mongoose')
const { Schema } = mongoose

const bugSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    comments: {
        type: [mongoose.Types.ObjectId],
        ref: 'comments',
        required: false
    }
}, { timestamps: true })

const Bug = mongoose.model('Bug', bugSchema)

module.exports = Bug 