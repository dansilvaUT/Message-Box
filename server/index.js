require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    { SERVER_PORT, CONNECTION_STRING } = process.env,
    app = express();


app.use(express.json());

//CONNECT TO OUR DATABASE
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('Message Box DB connected');
}).catch(err => console.log(`Error connected to DB: ${err.message}`));


app.listen(SERVER_PORT, console.log(`Message Box Listening on ${SERVER_PORT}`));

