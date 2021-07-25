const { Router } = require('express');


module.exports = function({UserController}){
    const router= Router();
    router.get('/:userId', UserController.get );
    router.get('', UserController.getAll);
    router.post('/', UserController.create);
    router.patch('/:userId', UserController.update);
    router.delete('/:userId', UserController.delete);
    router.delete
}