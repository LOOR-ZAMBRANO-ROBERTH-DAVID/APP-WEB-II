const { createContainer, asClass, asValue, asFunction } = require('awilix');


const config = require("../config");

//Importamos los servicios
const { HomeService } = require("../services");
//importar controladores
const { HomeController } =  require("../controllers")

//importar rutas
const { HomeRoutes  } = require("../routes/index.routes")
const Routes = require("../routes");

const app = require('.');

const container =  createContainer();

container
.register(
    {
        app: asClass(app).singleton(),
        router:asFunction(Routes).singleton(),
        config: asValue(config)
    }
)
.register(
    {
        HomeService: asClass(HomeService).singleton()
    }
)
.register(
    {
        HomeController: asClass(HomeController.bind(HomeController) ).singleton()
    }
).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
})




module.exports = container;