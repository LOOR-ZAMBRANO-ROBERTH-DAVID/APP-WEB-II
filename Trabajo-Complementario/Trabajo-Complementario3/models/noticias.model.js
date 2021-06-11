const mongoose = require ("mongoose");
const {Schema} = mongoose;

const NoticiaSchema=new Schema(
    {
        titulo: { type: String},
        enlace: { type: String}
    },
    {
        timestamps: { createdAt: true, updatedAt: true}
    }
)

module.exports = mongoose.model("Noticias", NoticiaSchema);