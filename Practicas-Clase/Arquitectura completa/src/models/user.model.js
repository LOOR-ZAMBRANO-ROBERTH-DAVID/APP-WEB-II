//crear un modelo 

const mongoose = require('mongoose');
const {Schema} = mongoose;

const {hashSync, compareSync, genSaltSync } = require('bcryptjs');

//esquema para los obejtos
const UserSchema = new Schema({
    name: {type: String, require: true},
    username: {type: String, require: true},
    password: {type: String, require: true},
});

UserSchema.methods.toJSON = function() {
    let user = this.toObject();
    delete user.password;
    return user;

}

UserSchema.methos.comparePassword = function(password){
    //Comparamos si la contrase;a es correcta o no
    return compareSync(password, this.password)
}





//Se pueden utilizar ua especie de triggers o hugs

UserSchema.pre('save', async function (next){
    //Aqui podriamos tener ciertas validaciones para
    //muy parecido a los trigeros
    const user = this;
    if(user.isModified("password")){
        
        next();
    }

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next();
})



module.exports = mongoose.model('user', UserSchema); 