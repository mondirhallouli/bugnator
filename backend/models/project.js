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
  }
}, { timestamps: true })

const Project = mongoose.model('Project', projectSchema)

module.exports = Project