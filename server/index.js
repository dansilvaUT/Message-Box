require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    authCtlr = require('./controllers/auth/authController'),
    userCtlr = require('./controllers/users/userController'),
    { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
    app = express();


app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }
}))
//CONNECT TO OUR DATABASE
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('Message Box DB connected');
}).catch(err => console.log(`Error connected to DB: ${err.message}`));

//ENDPOINTS

//AUTH
app.post('/api/register', authCtlr.register);
app.post('/api/login', authCtlr.login);
app.post('/api/logout', authCtlr.logout);

//USER
app.get('/api/auth/me', userCtlr.getUser);
app.get('/api/users/all', userCtlr.getAllUsers);

app.listen(SERVER_PORT, console.log(`Message Box Listening on ${SERVER_PORT}`));

