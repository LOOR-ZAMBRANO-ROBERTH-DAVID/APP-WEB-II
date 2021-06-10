const fs = require("fs")
const express = require("express");
const cors =require("cors");
const path = require("path");


const PUERTO = 3000;
const home =fs.readFileSync("./index.html");
const about =fs.readFileSync("./about.html");

const server = express();
server.use(cors()).use( express.json())


server.get('/', devolverInderx);
server.get('/about', (req, res)=>{
    res.write(about);
    res.status(200).send({
        respuesta:"Todo Ok"
    });
})


const paginaDeError = path.join(__dirname, "./error.html");
server.use((req,res,next)=>{
    res.status(400).sendFile(paginaDeError);

})
 
server.listen(PUERTO, ()=>
{
    console.log("Servidor funcionando en el puerto 3000")
});



function devolverInderx(req, res){
    res.write(home);
}












//Crear un host sin el uso de express
/*
const http =require("http");



http.createServer((request, response)=>{
    const {url} = request;
    if(url==="/"){
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write(home)
        
    }
    else if(url==="/about"){
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write(about)

    }
    else{
        response.writeHead(404, {"Content-Type":"text/html"});
        response.write("Ruta no existe uwu")
    }
    response.end();



})
.listen(8080,()=>{
    console.log(`El servidor anda escuchando por el puerto 3000`);
});


*/






