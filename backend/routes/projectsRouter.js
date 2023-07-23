const express = require('express')
const projectsRouter = express.Router()
const getHandlers = require('../handlers/getHandlers')
const postHandlers = require('../handlers/postHandlers')
const { checkLogin } = require('../middleware/checkLogin')

// adding new projects to the database
projectsRouter.post('/new-project', checkLogin, postHandlers.addProject)

// get a specific project
projectsRouter.get('/:projectId', checkLogin, getHandlers.projectDetails)

module.exports = { projectsRouter }