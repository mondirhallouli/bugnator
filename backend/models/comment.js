const mongoose = require('mongoose')
const { Schema } = mongoose

const commentSchema = new Schema({
    username: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
    },
    content: {
        type: String,
        required: true,
    }
}, { timstamps: true })

const Comment = mongoose.model('Comment', commentSchema)

module.exports = { Comment }