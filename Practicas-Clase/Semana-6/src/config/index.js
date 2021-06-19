/*Preguntamo si estamos o no en produccion*/
if(process.env.NODE_ENV !== "production")
{
    require('dotenv').config()
}


module.exports={
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    APPLICATION_NAME:process.env.APPLICATION_NAME
}

//La informacion del .dev no deberia ser publicada