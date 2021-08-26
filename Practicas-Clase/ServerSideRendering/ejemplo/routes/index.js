//var express = require('express');
//var router = express.Router();

var express = require('express');
var router = express.Router();
let mongoose = require('./../config/conexion');
let Usuario = require('./../models/user');



/* GET home page. */
router.get('/', function (req, res, next) {
  Usuario.find((err, usuarios) => {
    if (err) throw err;
    res.render('index', { usuarios: usuarios });
  })
});

router.get('/usuario/nuevo', (req, res, next) => {
  res.render('usuarioForm', {});
})
router.get('/usuario/modificar/:id', (req, res, next) => {
  let idUsuario = req.params.id;
  Usuario.findOne({ _id: idUsuario }, (err, usuario) => {
    if (err) throw err;
    res.render('usuarioForm', { usuario: usuario });
  })

})
router.get('/usuario/eliminar/:id', (req, res, next) => {
  let idUsuario = req.params.id;
  Usuario.remove({ _id: idUsuario }, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
})
module.exports = router;