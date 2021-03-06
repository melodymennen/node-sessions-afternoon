const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const checkForSession = require('./middlewares/checkForSession');
const swag_controller = require('./controllers/swag_controller');
const auth_controller = require('./controllers/auth_controller');
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

app.post('/api/login', auth_controller.login);
app.post('/api/register', auth_controller.register);
app.post('/api/signout', auth_controller.signout);
app.get('/api/user', auth_controller.getUser);

const port = process.env.PORT 
app.listen(port, () => console.log(`server listening on port ${port}`))