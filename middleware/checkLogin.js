const checkLogin = (req, res, next) => {
  // check the user role
  if (!req.user) return res.redirect('/login')
  // render view depending on the user's role
  next()
}

module.exports = {
  checkLogin
}