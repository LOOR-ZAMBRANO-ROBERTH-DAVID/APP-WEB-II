const mongoose = require('mongoose');
const conexion = 'mongodb+srv://dbUser:mylove1999@cluster0.c1tlj.mongodb.net/webii?retryWrites=true&w=majority';





mongoose.connect(conexion,{useNewUrlParser:true, useUnifiedTopology:true});
const Usuario=mongoose.model("Usuario", {nombre:String});

//a partir de un modelo creando objeto
const usuario1 = new Usuario({nombre:'Roberth Loor'});


(async ()=>{
    await usuario1.save();
    console.log('Usuario se creo correctamente');
    Usuario.find().then(console.log);
})();



