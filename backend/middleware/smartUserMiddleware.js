const User = require("../models/user")

const smartUser = (req, res, next) => {
  if (!(req.session && req.session.userId)) return next()

  User.findById(req.session.userId, (err, user) => {
    if (err) return next(err)
    if (!user) return next()
    user.password = undefined

    req.user = user
    res.locals.user = user

    next()
  })
}

module.exports = smartUser