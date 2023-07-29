const handleNotFound = (req, res) => {
    res.status(404)
    if (!(req.session && req.session.userId)) return res.json({ nav: 'publicNav', username: '', role: '' })
    res.json({ username: req.session.username, role: req.session.role })
}

const handleServerError = (err, req, res, next) => {
    if (err) return console.log(err.message)
    res.json({ msg: '500 - internal server error' })
}

module.exports = { handleNotFound, handleServerError }