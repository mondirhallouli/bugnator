const Project = require("../models/project")

const fetchProjects = (req, res, next) => {
  Project.find({}, (err, projects) => {
    if (err) throw new Error(err.message)
    req.projects = projects
  })
  next()
}

module.exports = fetchProjects