const { createContainer, asClass, asValue, asFunction } = require ('awilix');

//Importar servicios
//Hacemos una desetructuracion

const{HomeService} = require("../services")
//Importar controladores
const {HomeController} = require("../controllers")



const container = createContainer();




container.register



module.exports=container({
    HomeService: asClass(HomeService).singleton()
})

.register(
    {
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    }
)