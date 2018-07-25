const express = require('express');
const app = express();

var welcome = function (req, res, next) {
    res.send( req.params );
};

app.get('/welcome/:username', welcome);

module.exports = app;