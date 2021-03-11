require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    { SERVER_PORT } = process.env,
    app = express();


app.use(express.json());

app.listen(SERVER_PORT, console.log(`Message Box Listening on ${SERVER_PORT}`));

