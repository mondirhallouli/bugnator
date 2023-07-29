const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const Project = require('../models/project')
const Bug = require('../models/bug')
const authRouter = express.Router()

// REGISTER NEW USER
authRouter.post('/register', (req, res) => {
    // hash the user password
    let hashPass = bcrypt.hashSync(req.body.password, 14)
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

    // TODO: add a session cookie after the user successfully registers ✅
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

        // redirect the user to the dashboard
        // res.redirect('/dashboard')
    })

    // TODO: make the lookup with the email optional in the findOne parameters of mongodb ✅
    // TODO: add an error message to the login page in case of unsuccessful login ✅
    // TODO: hash passwords before sending them to the database ✅
    // TODO: add handler for logout ✅
})

// ADD A PROJECT
// FIXME: user is logged out because of the check login middleware called before this handler in the main file (bugnator)
authRouter.post('/projects/create', (req, res) => {
    const { title, description } = req.body

    async function createProject({ title, desc }) {
        try {
            const result = await Project.create({ title, desc })
            res.json(result)
        } catch (error) {
            console.log(error.messag)
        }
    }

    createProject({ title, description })
})


// REPORT A BUG
authRouter.post('/bugs/report', (req, res) => {
    const { title, description } = req.body

    async function reportBug({ title, desc }) {
        try {
            const result = await Bug.create({ title, desc })
            res.json(result)
        } catch (error) {
            console.log(error.message)
        }
    }
    reportBug({ title, description })
})

module.exports = { authRouter }