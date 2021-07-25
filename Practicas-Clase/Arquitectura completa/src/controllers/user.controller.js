let _userService = null;

class UserController
{
    constructor({UserService})
    {
        _userService= UserService;

    }
    //TODO: implementar mEtodos
    //get
    async get(req, res)
    {
        const {userId} =  req.params;
        const user =  await  _userService.get(userId)
        return res.send(user);
    }
    //getAll
    async getAll( req ,res)
    {
        const users =   await _userService.getAll();
        return res.send(users);
    }

    //create
    async create(req,res)
    {
        const {body} =  req;
        const createdUser =  await _userService.create(body);
        res.send(createdUser);
    }
    //update
    async update(req,res)
    {
        const {body} =  req;
        const {userId} = req.params;
        const updatedUser  = await _userService.update(userId, body)
        res.send(updatedUser);
    }
    //delete
    async delete(req,res)
    {
        const {userId} = req.params;
        const deletedUser =  await _userService.delete(userId);
        return res.send(deletedUser);

    }
}
module.exports = UserController;