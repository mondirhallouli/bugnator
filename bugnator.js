require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const session = require('express-session')
// smart user middleware
const smartUser = require('./middleware/smartUserMiddleware')

// REQUESTS HANDLERS
const getHandlers = require('./handlers/getHandlers')
const postHandlers = require('./handlers/postHandlers')
const errorHandlers = require('./handlers/errorHandlers')

// ROUTERS
const { dashRouter } = require('./routes/dashRouter')
const { projectsRouter } = require('./routes/projectsRouter')


const port = process.env.PORT || 3000

// MONGODB CREDENTIALS
const USER = process.env.DBUSER
const PASSWORD = process.env.PASSWORD

// session secret property value
const SESSION_SECRET = process.env.SESSIONSECRET

const app = express()


/* ========{ MONGODB / MONGOOSE }======== */

// mongodb connection string
const dblink = `mongodb+srv://${USER}:${PASSWORD}@netninjanode.5e5thp0.mongodb.net/clients?retryWrites=true&w=majority`

// connecting to mongodb via mongoose
mongoose.set('strictQuery', false)
mongoose.connect(dblink)
  .then(() => app.listen(port, () => console.log(`live at port ${port}`)))
  .catch(err => console.error(err))


/* ========{ SESSIONS }======== */

// session parameters
let sessOptions = {
  name: "bugnator user session",
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000, // 1 hour
  }
}

// production environment session cookie options
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sessOptions.cookie.secure = true // serve secure cookie
}

// session middleware
app.use(session(sessOptions))


/* ========{ ROUTERS }======== */

// /dashboard router
app.use('/dashboard', dashRouter)
// /projects router
app.use('/projects', projectsRouter)


/* ========{ VIEW ENGINE / STATIC FILES / OTHER MIDDLEWARE }======== */

// configuring handlebars view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// static files (imgs, styles...)
app.use(express.static(path.join(__dirname, 'public')))

// decoding the url information
app.use(express.urlencoded({ extended: false }))

// smart user middleware
app.use(smartUser)


/* ========{ HTTP REQUESTS }======== */

// redirecting to login
app.get('/', getHandlers.handleRoot)

// displaying sign in
app.get('/login', getHandlers.handleLogin)

// displaying register
app.get('/register', getHandlers.handleRegister)

// registering new users
app.post('/register', postHandlers.handleRegister)

// logging in users
app.post('/login', postHandlers.handleLogin)

// logging out users
app.get('/logout', getHandlers.logoutHandler)

// handling 404
app.use(errorHandlers.handleNotFound)

// handling server errors
app.use(errorHandlers.handleServerError)
