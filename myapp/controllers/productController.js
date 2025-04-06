const data  = require("../db/index");

let productController = {
    index : function(req,res){
        return res.render('index',{productos: data.productos
        })
    },
    product_add: function(req,res){
        return res.render('product-add', {nombre: data.usuario[0].nombre,

        })
    },
    product: function(req,res){
        return res.render('product', {productos: data.productos})
    },
    search_result: function(req,res){
        return res.render('search-results', {productos: data.productos})
    },
    login: function(req,res){
        return res.render('login')
    },
    register: function(req,res){
        return res.render('register')
    }, 
    profile: function(req,res){
        return res.render('profile', {  nombre: data.usuario[0].nombre,
                                        email: data.usuario[0].email,
                                        contrasenia: data.usuario[0].password,
                                        nacimiento: data.usuario[0].fechaNacimiento,
                                        documento: data.usuario[0].documento,
                                        foto: data.usuario[0].foto,
                                        productos: data.productos
                                     })
    },



}

module.exports = productController;