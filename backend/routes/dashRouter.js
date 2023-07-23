const express = require('express')
const dashRouter = express.Router()
const getHandlers = require('../handlers/getHandlers')
const { checkLogin } = require('../middleware/checkLogin')
const fetchProjects = require('../middleware/fetchProjects')
const fetchUsers = require('../middleware/fetchUsers')

// rendering the dashboard
dashRouter.get('/', fetchProjects, fetchUsers, getHandlers.handleDashboard)

// rendering the new project view
dashRouter.get('/new-project', getHandlers.addProjectHandler)

module.exports = {
  dashRouter
}