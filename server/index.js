const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const checkForSession = require('./middlewares/checkForSession');
const swag_controller = require('./controllers/swag_controller');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(checkForSession);

app.get('/api/swag', swag_controller.read);

const port = process.env.PORT
app.listen(port, () => console.log(`server listening on port ${port}`))