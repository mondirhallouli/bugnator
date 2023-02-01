const bcrypt = require('bcrypt')
const User = require('../models/user')
const Project = require('../models/project')

const handleRegister = (req, res) => {
  // hash the user password
  let hashPass = bcrypt.hashSync(req.body.password, 14)
  let date = new Date();
  // replace plain password with the hashed one
  req.body.password = hashPass
  req.body.startedAt = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` // TODO: try replacing this with a hidden input with an auto-generated date value at register

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

      res.redirect('/dashboard')
    })
    // stay in the register page and display an error message
    .catch(err => {
      res.render('register', { error: err.message })
    })

  // TODO: add a session cookie after the user successfully registers ✅
}

const handleLogin = (req, res) => {
  // lookup the user in the database, using the username or email
  User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] }, (err, user) => {
    // if the user is not found or password doesn't match, stay on the login and display an error
    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
      return res.render('login', { warning: 'the username or password is incorrect' })
    }

    // save a session cookie if the user successfully logs in
    req.session.userId = user._id
    req.session.userRole = user.role
    req.session.username = user.username

    // redirect the user to the dashboard
    res.redirect('/dashboard')
  })

  // TODO: make the lookup with the email optional in the findOne parameters of mongodb ✅
  // TODO: add an error message to the login page in case of unsuccessful login ✅
  // TODO: hash passwords before sending them to the database ✅
  // TODO: add handler for logout ✅
}

// TODO: add handlers for adding new project
// FIXME: user is logged out because of the check login middleware called before this handler in the main file (bugnator)
const addProject = (req, res) => {
  const newProject = new Project(req.body)

  newProject.save()
    .then(result => { res.redirect('/') })
    .catch(err => { console.error(err) })
}

// TODO: add handlers for adding new bugs
module.exports = { handleRegister, handleLogin, addProject }