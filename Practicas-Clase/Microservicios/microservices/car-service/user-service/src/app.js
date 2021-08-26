const express = require("express");
const app  = express();


const response = {
    data:[],
    services:"User service",
    arthitecture:"Microservices"
}
const logger = message=> console.log("[User Service]:"+message);

app.use((req,res,next)=>{
    response.data=[];
    next();
})

app.get("/api/v2/users",(req,res)=>{
    response.data.push("Admin1", "Admin2", "Admin3");
    logger("Get user request");
    return res.send(response);
})


module.exports = app; 