const express = require('express');
const app = express();

const response = {
    data:[],
    services:"All services",
    arquitecture:"Monolithic"
}
app.use((req,res,next)=>{
    response.data=[];
    next();
})

//usuarios
app.get("/api/v1/users",(req,res)=>{
    response.data.push("administrador","invitado","john");
    return res.send(response);
})
///libros
app.get("/api/v1/books",(req,res)=>{
    response.data.push("javascript guIa definitiva","html para tontos", "Css3 on fire");
    return res.send(response);
})
////vehIculos
app.get("/api/v1/cars", (req,res)=>{
    response.data.push("Vento", "Picanto", "Versa");
    return res.send(response);
})

module.exports = app; 