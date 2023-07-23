const Project = require("../models/project")
const User = require("../models/user")

const handleLogin = (req, res) => {
  res.render('login', { warning: '' })
}

const handleRegister = (req, res) => {
  res.render('register', { error: '' })
}

const handleRoot = (req, res) => {
  if (!req.user) return res.redirect('/login') // FIXME: changed from "if (!(req.session && req.session.userId))"
  res.redirect('/dashboard')
}

const handleDashboard = (req, res, next) => {
  // require user to login if not already
  if (!(req.session && req.session.userId)) return res.redirect('/login') // DEBUG: check if this can use the req.user object to validate instead of the req.session

  User.findById({ _id: req.session.userId }, (err, user) => { // DEBUG: check if this can be changed to use the req.user object set by the smartUserMiddleware
    if (err) return next(err)

    if (!user) {
      return res.redirect('/login')
    }

    // FIXME: this needs to stay and use the res.locals.user instead of req.projects & user.[property]
    res.render('dashboard', { role: user.role, username: user.username, projects: req.projects, members: req.members })
  })
}

const logoutHandler = (req, res) => {
  req.session.destroy()
  res.redirect('/login')
}

// rendering the add new project view
const addProjectHandler = (req, res) => {
  res.render('addProject', res.locals.user) // FIXME: replaced { role: req.session.role, username: req.session.username } with res.locals.user
}


// handling the single project render
const projectDetails = (req, res) => {
  const projectId = req.params.projectId

  Project.findById(projectId, (err, doc) => {
    if (err) throw new Error(err.message)

    // FIXME: changed the locals username & role to use req.user instead of req.session
    res.render('projectDetails', { pTitle: doc.title, pDesc: doc.description, username: req.user.username, role: req.user.role })
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