



let _homeService=null;

class HomeController{
    //Recibimos los services
    constructor({HomeService}){
        _homeService = HomeService;

    }
    index(req, res){
        return res.send(_homeService.index())

    }
}
module.exports=HomeController;