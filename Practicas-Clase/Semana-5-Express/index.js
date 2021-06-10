const express = require("express");
const app = express();
const PORT = 3000;

let arreglo = [];

app.use('/public', express.static(__dirname+'/public'))
app.use(express.json());


//get
app.get('./', (req, res)=>{
    res.status(200).send(arreglo);
});


//get?id

app.get(':/nombre', (req, res)=>{
    const {nombre} = req.params;
    const respuesta = arreglo.filter(p=>{
        return p.nombre===nombre
    
    })
    if (respuesta.lenght>0){
        res.status(200).send
        respuesta[0]
    }
    
});



//post
app.post('/', (req, res)=>{
    const {body} = req;
    arreglo.push(body);
    res.send({
        mensaje: "El elemento se almaceno correctamente",
        respuesta:body
    });
})




//put
app.put('/', ()=>{
    const {nombre, curso}=req;
    let elemento = arreglo.filter(p=>p.nombre===nombre)[0];
    elemento.curso=curso;
    res.send({
        respuesta:elemento
    })

});



//delete
app.delete('/', (req, res)=>{
    const {nombre} = req.params;
    arreglo=arreglo.filter(p=>p.nombre!==nombre);
    res.status(200).send({
        respuesta: "Eliminado correctamente"
    })
})









app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando el puerto 3000`)
})