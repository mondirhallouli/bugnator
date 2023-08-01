const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const Project = require('../models/project')
const Bug = require('../models/bug')
const { checkLogin } = require('../middleware/checkLogin')
const authRouter = express.Router()

// REGISTER NEW USER
authRouter.post('/register', (req, res) => {
    // generate salt
    const saltRounds = 14
    const salt = bcrypt.genSaltSync(saltRounds)
    // hash the user password
    let hashPass = bcrypt.hashSync(req.body.password, saltRounds)
    // replace plain password with the hashed one
    req.body.password = hashPass

    // create a user model object from the register form information
    const newUser = new User(req.body)

    // save the new user to the database
    newUser.save()
        // redirect the user to the dashboard
        .then(result => {
            // create a new session TODO: these should probably be replaced (or at least reviewed) 
            req.session.userId = result._id
            req.session.role = result.role
            req.session.username = result.username

            res.send(result)
        })
        // stay in the register page and display an error message
        .catch(err => {
            res.send({ error: err.message })
        })
})

// LOGIN USER
authRouter.post('/login', (req, res) => {
    // lookup the user in the database, using the username or email
    User.findOne({ email: req.body.email }, (err, user) => {
        // if the user is not found or password doesn't match, stay on the login and display an error
        if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
            return res.send({ warning: 'the username or password is incorrect' })
        }

        // save a session cookie if the user successfully logs in
        req.session.userId = user._id
        req.session.userRole = user.role
        req.session.username = user.username

        // send the user a message of successfull login
        res.redirect("/dashboard")
    })
})

// LOG USERS OUT 
authRouter.get('/logout', (req, res) => {
    req.session.destroy()
    res.send({ msg: "you have been logged out!" })
})

// ADD A PROJECT
authRouter.post('/projects/create', checkLogin, (req, res) => {

    async function createProject({ title, description }) {
        try {
            const result = await Project.create({ title, description })
            res.json(result)
        } catch (error) {
            console.log("failed to get create a project |", error.message)
        }
    }

    createProject(req.body)
})


// REPORT A BUG
authRouter.post('/projects/:id/report', checkLogin, (req, res) => {
    const { id } = req.params

    async function reportBug({ title, description }, projectId) {
        try {
            const bug = await Bug.create({ title, description })
            const project = await Project.findById(projectId)
            project.bugs.push(bug._id)
            await project.save()

            res.json({ project })
        } catch (error) {
            console.log("failed to create a new bug report |", error.message)
        }
    }
    reportBug(req.body, id)
})

module.exports = { authRouter }