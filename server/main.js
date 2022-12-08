const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
app.use(cors())
const server = http.createServer(app);
const {Server} = require('socket.io')
const PORT = 5025;


const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']

    }, 
});

// Calling Socket IO.
io.on('connection', (socket)=> {
    console.log("USER ID: " + socket.id);
    
    socket.on('disconnect', ()=> {
        console.log("USER Disconnected: " + socket.id);
    })

    socket.on('join_chat', (data) => {
        socket.join(data.room_id);
        console.log("USER Joined: " + data.user_name);
        console.log("ROOM ID: " + data.room_id);
    })
    
})



server.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});