const express = require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');


module.exports = function(HomeRoutes){
    //Nivel 1
    //v1/api
    //v2/api
    const router = express.HomeRouter();
    //Nivel 2
    /**
     * /Home/
     * /Home/index
     * /Home/Mostrarmensaje
     */
    
    const apiRoutes = express.Router();
    apiRoutes.use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression())

    apiRoutes.use('/home', HomeRoutes);

    router.use("/v1/api", apiRoutes);
    router.use("/public", express.static('public'));

    /*Estons son los middlewares logicos* */
    router.use(NoFoundMiddleware);
    router.use(ErrorMiddleware);
    return router;

    //localhost:5000/vi/api/home/mostrarMensaje




}
