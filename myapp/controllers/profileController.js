const data = require("../db/index");
const db = require('../database/models')
const User = db.User;
const bcrypt = require("bcryptjs");

let profileController = {
login: function(req,res){
    
    return res.render('login')
    
    

    },
    register: function (req, res) {

        return res.render('register')
    },
    profile: function (req, res) {
        return res.render('profile', {
            nombre: data.usuario.nombre,
            email: data.usuario.email,
            contrasenia: data.usuario.password,
            nacimiento: data.usuario.fechaNacimiento,
            documento: data.usuario.documento,
            foto: data.usuario.foto,
            productos: data.productos
        })
    },
    create: function (req, res) {
        let { email, name, password, fechaNacimiento, documento, foto } = req.body;

        // Verificar si el email ya existe


        User.create({
            email: email,
            nombreUsuario: name,
            contrasenia: passwordHasheada,
            fechaNacimiento: fechaNacimiento,
            documento: documento,
            foto: foto
        })
            .then(function (resultado) {
                return res.redirect('/products/profile');
            })
            .catch(function (error) {
                console.log(error);
                return res.send("Error al crear el usuario");
            });
    }

        
}




module.exports = profileController;

