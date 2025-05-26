const db  = require("../db/index");
const User = db.User;
const bcrypt = require("bcryptjs");

 let profileController = {
    login: function(req,res){
        
        let datos = req.body;
        db.user.findAll({
            where: [{email: datos.email}]
        })
        .then(function(results){
            if (results != undefined) {
                return res.render('login', {datos: "debe ingresar otro email"})
            }
        })
        

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

