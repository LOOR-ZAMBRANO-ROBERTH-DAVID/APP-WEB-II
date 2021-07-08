const mongoose = require ("mongoose");
const { Schema } = mongoose;

const RegistroSchema = new Schema(
    {
            fechaInicio: {type: String},
            fechaFinal: {type: String},
            cliente: {type: String},
            estado: {type: String},
            costo: {type: String},
            tipo: {type: String},

    },
    {
            timestamps: { createdAt: true, updateAt: true}
    }
    
)

module.exports =  mongoose.model("Registros", RegistroSchema);