const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
app.use(cors())
const server = http.createServer(app);
const {Server} = require('socket.io')
const PORT = 5000;


const io = new Server(server, {
    cors: {
        origin: 'http://0.0.0.0:5000',
        methods: ['GET', 'POST']

    }, 
});

// Calling Socket IO.
io.on('connection', (socket)=> {
    console.log("USER ID: " + socket.id);
    
    socket.on('disconnect', ()=> {
        console.log("USER Disconnected: " + socket.id);
    })
}



server.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});