const handleNotFound = (req, res) => {
  res.status(404)
  if (!(req.session && req.session.userId)) return res.render('404', { nav: 'publicNav', username: '', role: '' })
  res.render('404', { nav: 'dashNav', username: req.session.username, role: req.session.role })
}

const handleServerError = (err, req, res, next) => {
  if (err) return console.error(err)
  res.render('500')
}

module.exports = { handleNotFound, handleServerError }