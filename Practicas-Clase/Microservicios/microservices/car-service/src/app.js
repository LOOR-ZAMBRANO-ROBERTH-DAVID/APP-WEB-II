const express = require("express");
const app  = express();


const response = {
    data:[],
    services:"Car service",
    arthitecture:"Microservices"
}
const logger = message=> console.log("[Car Service]:"+message);

app.use((req,res,next)=>{
    response.data=[];
    next();
})

app.get("/api/v2/cars",(req,res)=>{
    response.data.push("Volvo", "Escarabajo", "Fiat1");
    logger("Get car request");
    return res.send(response);
})


module.exports = app; 