const express = require('express')
const projectsRouter = express.Router()
const getHandlers = require('../handlers/getHandlers')
const { checkLogin } = require('../middleware/checkLogin')

projectsRouter.get('/:projectId', getHandlers.projectDetails)

module.exports = { projectsRouter }