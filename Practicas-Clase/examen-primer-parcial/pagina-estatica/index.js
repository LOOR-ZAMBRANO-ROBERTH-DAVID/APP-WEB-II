const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const PORT = 5000;
const home = fs.readFileSync("./src/public/index.html");

const server = express();
server.use(cors()).use(express.json());

server.get('/', (req, res) => {
    res.write(home);
    res.status(200);
    res.end();
})

server.use(express.static(path.join(__dirname, 'src/public')))

server.listen(PORT), ()=>{
    console.log('Servidor escuchando por el puerto 5000');
}