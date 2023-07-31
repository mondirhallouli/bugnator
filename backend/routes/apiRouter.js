const express = require('express')
const Project = require('../models/project')
const Bug = require('../models/bug')
const { checkLogin } = require('../middleware/checkLogin')
const apiRouter = express.Router()

// FETCH ALL PROJECTS
apiRouter.get('/projects', checkLogin, (req, res) => {
    async function getProjects() {
        try {
            const projects = await Project.find({})
            res.send(projects)
        } catch (error) {
            res.send(error.message)
        }
    }
    getProjects()
})

// I migh need a separate path to fetch a project's related bugs

// FETCH A SINGLE PROJECT
apiRouter.get('/projects/:id', checkLogin, (req, res) => {
    const { id } = req.params

    async function getProjectDetails() {
        try {
            const projectDetails = await Project.findById({ _id: id })
            res.send(projectDetails)
        } catch (error) {
            res.send(error.message)
        }
    }
    getProjectDetails()
})

// FETCH A SINGLE BUG REPORT
apiRouter.get('/bugs/:id', checkLogin, (req, res) => {
    const { id } = req.params

    async function getBugDetails() {
        try {
            const bugDetails = await Bug.findById({ _id: id })
            res.send(bugDetails)
        } catch (error) {
            res.send(error.message)
        }
    }
    getBugDetails()
})

module.exports = { apiRouter }