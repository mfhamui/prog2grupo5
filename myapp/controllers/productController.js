const data  = require("../db/index");
const db = require("../database/models");
const products = db.products; 
const op= db.Sequelize.Op;

let productController = {
    index : function(req,res){
        return res.render('index',{productos: data.productos})
    },
    product_add: function(req,res){
        return res.render('product-add', {nombre: data.usuario.nombre})
    },
    product: function(req,res){
        return res.render('product', {productos: data.productos})
    },
    search_result: function (req, res) {
       const search = req.query.search;
        let relacion = {
            where: {
                nombreProducto: { [op.like]: `%${search}%` }
            },
            include: [
                { association: "usuario" },
                 { association: "comentarios" }
            ]
        };

        db.products.findAll(relacion)
            .then(function(productos) {
                if (productos.length == 0) {
                    mensaje = "No hay resultados para su criterio de búsqueda";
                }else{
                    mensaje= undefined;
                };
                return res.render("search-results", { productos, search, mensaje });
            })
            .catch(function(error) {
                return res.send(error);
            });
    }

}

module.exports = productController;