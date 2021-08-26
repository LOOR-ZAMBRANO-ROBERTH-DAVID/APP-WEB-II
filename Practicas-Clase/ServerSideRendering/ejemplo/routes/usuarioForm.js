var express = require('express');
var router = express.Router();
let mongoose = require('./../config/conexion');

let Usuario = require('./../models/user');

router.post('/usuario/operar', (req, res, next) => {
    if (req.body._id === "") {
        let per = new Usuario({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        });
        per.save();
    }
    else {
        Usuario.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
            if (err) throw err;
        });
    }
    res.redirect('/');
});
module.exports = router;