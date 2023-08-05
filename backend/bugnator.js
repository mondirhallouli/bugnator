require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// const path = require('path')
const session = require('express-session')
// connect-mongo session store
const MongoStore = require('connect-mongo')
// smart user middleware
const smartUser = require('./middleware/smartUserMiddleware')

// REQUESTS HANDLERS
const errorHandlers = require('./handlers/errorHandlers')

// ROUTERS
const { apiRouter } = require('./routes/apiRouter')
const { authRouter } = require('./routes/authRouter')


const port = process.env.PORT || 3000

// MONGODB CREDENTIALS
// mongodb connection string
const URI = process.env.DB_URI
const SESH_URI = process.env.DB_SESH_URI

// session secret property value
const SESSION_SECRET = process.env.SESSIONSECRET

const app = express()


// CORS for development
const cors = require('cors')
app.use(cors())

/* ========{ MONGODB / MONGOOSE }======== */

// connecting to mongodb via mongoose
mongoose.set('strictQuery', false)
mongoose.connect(URI)
    .then(() => app.listen(port, () => console.log(`live at port ${port}`)))
    .catch(err => console.error(err))


/* ========{ SESSIONS }======== */

// session parameters
let sessOptions = {
    store: MongoStore.create({
        mongoUrl: SESH_URI
    }),
    name: "bugnator user session",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000, // 1 minute
    }
}

// production environment session cookie options
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sessOptions.cookie.secure = true // serve secure cookie
}

// session middleware
app.use(session(sessOptions))


// decoding the url information
app.use(express.urlencoded({ extended: false }))

// parse incoming requests with json payloads
// app.use(express.json())

// smart user middleware
app.use(smartUser)


/* ========{ HTTP REQUESTS }======== */

// /auth router
app.use('/auth', authRouter)

// /api router
app.use('/api', apiRouter)

// handling 404
app.use(errorHandlers.handleNotFound)

// handling server errors
app.use(errorHandlers.handleServerError)
