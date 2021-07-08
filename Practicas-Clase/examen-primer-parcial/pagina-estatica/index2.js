
const mongoose = require('mongoose');
const conexion = require('./src/config');




mongoose.connect(conexion,{useNewUrlParser:true, useUnifiedTopology:true});
const Registro=mongoose.model("Registro", {nombre:String});

//a partir de un modelo creando objeto
const registro1 = new Registro({nombre:'Roberth Loor'});


(async ()=>{
    await registro1.save();
    console.log('El Registro se creo correctamente');
    Registro.find().then(console.log);
})();

