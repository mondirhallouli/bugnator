const User = require("../models/user")

const fetchUsers = (req, res, next) => {
  User.find({}, (err, members) => {
    if (err) throw new Error(err.message)
    req.members = members
  })
  next()
}

module.exports = fetchUsers