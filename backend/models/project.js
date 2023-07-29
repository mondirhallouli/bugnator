const mongoose = require('mongoose')
const { Schema } = mongoose

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    bugs: {
        type: [mongoose.Types.ObjectId],
        ref: 'bugs',
        required: false,
    }
}, { timestamps: true })

const Project = mongoose.model('Project', projectSchema)

module.exports = Project