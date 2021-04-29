require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    authCtlr = require('./controllers/auth/authController'),
    userCtlr = require('./controllers/users/userController'),
    chatCtlr = require('./controllers/chat/chatController'),
    socket = require('socket.io'),
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


//Listen for changes and connect to sockets
const io = socket(
    app.listen(SERVER_PORT, console.log(`Message Box listening on ${SERVER_PORT}`))
)

//ENDPOINTS

//AUTH
app.post('/api/register', authCtlr.register);
app.post('/api/login', authCtlr.login);
app.post('/api/logout', authCtlr.logout);

//USER
app.get('/api/auth/me', userCtlr.getUser);
app.get('/api/users/all', userCtlr.getAllUsers);


//GROUPS
app.post('/api/group/create', chatCtlr.createGroup);
app.get('/api/groups/:id', chatCtlr.getGroups);
app.get('/api/group/:id', chatCtlr.getGroup);

//Sockets
io.on('connection', socket => {
    console.log('user connected')
    socket.on('join room', async data => {
        const { group_id } = data,
            db = app.get('db');

        console.log("Room joined", group);

        let room = await db.chat.get_group_name({ group_id });
        let messages = await db.chat.message_history({ group_id });
        socket.join(room);
        io.to(room).emit('room joined', messages);
    });
    socket.on("message sent", async data => {
        const { group_id, user_id, message } = data,
            db = app.get("db");
        console.log('chat data', data)
        await db.chat.create_group_message({ group_id, user_id, message });
        let messages = await db.chat.get_group_messages({ group_id });
        socket.emit("message dispatched", messages);
    });
    socket.on("disconnect", () => {
        console.log("User Disconnected");
    });
});
