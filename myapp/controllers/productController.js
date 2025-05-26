const data  = require("../db/index");
const db = require("../database/models");
const Movie = db.Movie; // el alias que esta en el modelo
const Op= db.Sequelize.Op;

let productController = {
    index : function(req,res){
        return res.render('index',{productos: data.productos
        })
    },
    product_add: function(req,res){
        return res.render('product-add', {nombre: data.usuario.nombre,

        })
    },
    product: function(req,res){
        return res.render('product', {productos: data.productos})
    },
    search_result: function(req,res){
        

    const search = req.query.search;

    db.Movie.findAll({
        where: {
            title: { [Op.like]: `%${search}%` }
        }
    })
    .then(function(peliculas) {
        res.render("search-results", { productos: peliculas, search });
    })
    .catch(function(error) {
        res.send(error);
    })}
   

}

module.exports = productController;