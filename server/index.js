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
    app.listen(SERVER_PORT, console.log(`MyCanyon listening on ${SERVER_PORT}`))
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
app.get('/api/groups', chatCtlr.getGroups);
//Sockets
io.on("connection", function (socket) {
    socket.on("startChat", async function (data) {
        console.log('start hit', data);
        // const { chatRoomId, viewedUserId, id } = data;
        // const db = app.get("db");
        // let room = await db.chat.check_room({ id: chatRoomId });
        // room = room[0];
        // if (!room) {
        //     db.chat.create_room({
        //         id: chatRoomId,
        //         user1: id,
        //         user2: viewedUserId
        //     });
        //     socket.join(chatRoomId);
        // } else {
        //     const { room_id } = room;
        //     let messages = await db.chat.get_all_messages({ room_id: room_id });

        //     socket.join(chatRoomId);
        //     io.to(chatRoomId).emit("startChat", messages);
        // }
    });

    // socket.on("endChat", function (chatRoomId) {
    //     socket.leave(chatRoomId);
    // });

    // socket.on("sendMsg", async function (data) {
    //     console.log(data);
    //     const { user1, message, room } = data;
    //     const db = app.get("db");
    //     let messages = await db.chat.create_message({
    //         room_id: room,
    //         message,
    //         sender_id: user1
    //     });

    //     console.log(messages);

    //     io.to(data.room).emit("sendMsg", messages);
    // });
});



