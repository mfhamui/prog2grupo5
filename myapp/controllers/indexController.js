const data = require("../db/index");
const db = require("../database/models");
const products = db.products;
const comentarios = db.comentarios;
const usuarios = db.User;
const op = db.Sequelize.Op;


let indexController = {
    index: function (req, res) {
        products.findAll()
            .then(function (results) {
                let productos = results
                comentarios.findAll()
                    .then(function (results) {
                        let comments = results;
                        usuarios.findAll()
                            .then(function (results) {
                                return res.render('index', { productos: productos, comentarios: comments, usuarios: results })
                            })
                    })
            })
            .catch(function (error) {
                return res.send(error)
            })
    }
}

module.exports= indexController;