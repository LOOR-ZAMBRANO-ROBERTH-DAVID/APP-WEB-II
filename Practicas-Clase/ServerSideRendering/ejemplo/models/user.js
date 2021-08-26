let mongoose = require('mongoose');
let scheme = mongoose.Schema;

let UserSchema={
    name: {type:String, required:true },
    username: { type:String, required: true  },
    password: { type:String, required: true },
}

let Usuario = mongoose.model('Usuarios', UserSchema)


module.exports = Usuario; 