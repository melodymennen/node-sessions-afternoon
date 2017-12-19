const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();

app.use(express());
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

const port = process.env.PORT
app.listen(port, () => console.log(`server listening on port ${port}`))