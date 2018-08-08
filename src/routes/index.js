const express = require('express')
const app = express()

const welcome = function (req, res, next) {
  res.send('Welcome to the Intelygenz talent test!')
}

const welcomeUser = function (req, res, next) {
  res.send(req.params)
}

app.get('/', welcome)
app.get('/welcome', welcome)
app.get('/welcome/:username', welcomeUser)

module.exports = app
