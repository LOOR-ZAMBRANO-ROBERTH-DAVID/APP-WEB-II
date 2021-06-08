const mongoose = require("mongoose");
const cheerio = require("cheerio");
const cron = require("node-cron");
const axios = require("axios").default;

const { MONGO_URI } = require("./config");
const { Noticias, Usuarios } = require("./models");


//Crear coneccion a la base de datos
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology:true});

//conectarnos a la pagina de cnn

//Aque se ejecute como un cronjob (ultimo paso)


(async () => {
    //Obtenemos todo el html
    const html = await axios.get("https://cnnespanol.cnn.com/");
    //console.log(html);

    //Filtramos las noticias
    const $ = cheerio.load(html.data);
    const titulos = $(".news__title");



    let arregloNoticias=[];
    titulos.each((index, element)=>{
        //console.log($(element).text());
        //console.log($(element).children().attr("href"));

        //Almacenar la informacion
        const Noticia = {
            titulo: $(element).text().toString(),
            enlace: $(element).children().attr("href")
        }
 
        Noticias.create(Noticia);
    
        
    })


})();