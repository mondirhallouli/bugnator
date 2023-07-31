const checkLogin = (req, res, next) => {
    // check the user role
    if (!req.user) return res.send({ msg: "you have to be logged in to perfom this action, please do that first!" })
    // render view depending on the user's role
    next()
}

module.exports = {
    checkLogin
}