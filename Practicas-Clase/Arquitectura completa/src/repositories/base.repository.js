class BaseRepositorio{
    //constructor que recibe el modelo
    //get individual
    //get general
    //create o
    //update
    //delete

    constructor(model){
        this.model = model;

    }
    //get invidivudal
    async get(id){
        return await this.model.findById(id)
    }

    async getAll(){
        return await this.model.find();
    }
    //create
    async create(entity){
        return await this.model.create(entity);

    }
    //update
    async update(id, entity){
        return await this.model.findByIdAndUpdate(id, entity, {new: true});
    }

    //delete
    async delete(id){
        return await this.model.findByIdAndDelete(id);
    }

}


module.exports = BaseRepository;