const { default: mongoose } = require("mongoose")
const Project = require("../models/project")
const User = require("../models/user")

const handleLogin = (req, res) => {
  res.render('login', { warning: '' })
}

const handleRegister = (req, res) => {
  res.render('register', { error: '' })
}

const handleRoot = (req, res) => {
  if (!(req.session && req.session.userId)) return res.redirect('/login')
  res.redirect('/dashboard')
}

const handleDashboard = (req, res, next) => {
  // require user to login if not already
  if (!(req.session && req.session.userId)) return res.redirect('/login') // TODO: change this to check for the req.user instead

  User.findById(req.session.userId, (err, user) => { // TODO: this needs to be removed and the req.user needs to be used instead
    if (err) return next(err)

    if (!user) {
      return res.redirect('/login')
    }

    // TODO: this needs to stay and use the res.locals.user instead of req.projects & user.[property]
    res.render('dashboard', { role: user.role, username: user.username, projects: req.projects, members: req.members })
  })
}

const logoutHandler = (req, res) => {
  req.session.destroy()
  res.redirect('/login')
}

// rendering the add new project view
const addProjectHandler = (req, res) => {
  res.render('addProject', { role: req.session.role, username: req.session.username })
}


// handling the single project render
const projectDetails = (req, res) => {
  const projectId = req.params.projectId

  Project.findById(projectId, (err, doc) => {
    if (err) throw new Error(err.message)

    res.render('projectDetails', { pTitle: doc.title, pDesc: doc.description, username: req.session.username, role: req.session.role })
  })
}

module.exports = {
  handleLogin,
  handleRegister,
  handleRoot,
  handleDashboard,
  logoutHandler,
  addProjectHandler,
  projectDetails,
}