const mongoose = require("mongoose");
const cheerio = require("cheerio");
const cron = require("node-cron");
const axios = require("axios").default;

const { MONGO_URI } = require("./config");
const { Noticias } = require("./models");

//Coneccion a la base de datos
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//Que se ejecute como un cronjob
//Se ejecutaria cada 24 horas a las 00:00
cron.schedule("0 0 * * *", 


async () => {
    //Conectarnos a la pagina xakata
    //Obtenemos todo el html
    const html = await axios.get("https://www.xataka.com/categoria/ordenadores");


    //Filtrar las noticias
    const $ = cheerio.load(html.data);

    const titulos = $(".abstract-title");
    //const enlace = $(".listingResult small result4")


    let arregloNoticias=[];
    //Funcion para recorrer los elementos
    titulos.each((index, element) => {
        //console.log($(element).text().toString());
        //console.log($(element).children().attr("href"));

        // almacenar la informacion
        //Se crea el objeto para poder guardarlo.
        const Noticia = {
            titulo: $(element).text().toString(),
            enlace: $(element).children().attr("href")


        }
        //Aqui se guardarian los datos en la base de datos
        
        arregloNoticias=[...arregloNoticias, Noticia]
    })
      // almacenar la informacion
    Noticias.create(arregloNoticias);

  

});
