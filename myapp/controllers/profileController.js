const data  = require("../db/index");
const User = db.User;
const bcrypt = require("bcryptjs");

 let profileController = {
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
 };

 module.exports = profileController;

