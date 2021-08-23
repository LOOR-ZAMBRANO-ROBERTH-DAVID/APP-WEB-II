const express = require("express");
const app = express();

const response = {
    data:[],
    services:"Book Service",
    arquitecture:"Microservices"
};

const logger = message=> console.log("[Book Service]:"+message);

app.use((req,res,next)=>{
    response.data=[];
    next();
})
app.get("/api/v2/books",(req,res)=>{
    response.data.push("JavaScript para campeones", "JavaScript desde 0", "JavaScript en 24 horas");
    logger("Get book data");
    return res.send(response.data);

})



module.exports = app; 