const data  = require("../db/index");

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
        return res.render('search-results', {productos: data.productos})
    },
    login: function(req,res){
        return res.render('login')
    },
    register: function(req,res){
        return res.render('register')
    }, 
    profile: function(req,res){
        return res.render('profile', {  nombre: data.usuario.nombre,
                                        email: data.usuario.email,
                                        contrasenia: data.usuario.password,
                                        nacimiento: data.usuario.fechaNacimiento,
                                        documento: data.usuario.documento,
                                        foto: data.usuario.foto,
                                        productos: data.productos
                                     })
    },



}

module.exports = productController;