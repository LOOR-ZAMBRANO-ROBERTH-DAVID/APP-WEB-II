
/**
 * Importamos lo necesario
 * 
 * Hacemos uso de express
 */
const express = require("express");
/**
 * Usamos el express con un Json
 */
const app = express();
const mongoose = require ("mongoose")

const {MONGO_URI} = require("./config");
const {Noticias} =require("./models");


app.use(express.json())
/**
 * Coneccion a la base de datps
 */
mongoose.connect(MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true } );

// peticion get que devuelve la base de datos 
app.get('/',  (req,res) => {
        Noticias.find({},(err,docs)=>{        
        res.send({
            docs
        })
        
    });
    
})

app.listen(5000, ()=>{
    console.log(`El servidor esta ejecutandose en el puerto 5000`)
})