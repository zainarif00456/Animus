const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
app.use(cors())
const server = http.createServer(app);

const PORT = 5000;

server.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});