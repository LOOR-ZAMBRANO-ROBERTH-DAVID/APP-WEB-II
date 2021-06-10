const express = require("express");
const app = express();
const PORT = 3000;

let arreglo = [];

app.use('/public', express.static(__dirname+'/public'))
app.use(express.json());


//get
app.get('./', (req, res)=>{
    res.status(200).send(arreglo);
})


//get?id


//post

//path

//delete


app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando el puerto 3000`)
})