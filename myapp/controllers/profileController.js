const data = require("../db/index");
const db = require('../database/models')
const bcrypt = require("bcryptjs");
const comentarios = require("../database/models/comentarios");
let User = db.User;
const op = db.Sequelize.Op

let profileController = {
show_login: function (req, res) {
    if (req.session.user) {
        return res.redirect("/profile/" );
    }
    return res.render("login")
},
login: function(req,res){
    let datos = req.body;

        User.findOne({ where: { email: { [op.like]: datos.email } } })
            .then(function (results) {
                if (results != undefined) {
                    let validPassword = bcrypt.compareSync(datos.contrasenia, results.contrasenia);
                    if (validPassword) {
                        req.session.user = results;
                        if (datos.recordarme != undefined) {
                            res.cookie("recordarme", results.email, { maxAge: 60000 })
                        }
                        return res.redirect(`profile/${results.id}`);
                    }else{
                        return res.send("contraseña incorrecta");
                    }
                }else{
                    return res.send("el email no esta registrado");
                }  
            })
            .catch(function (error) {
                return res.send(error)
            })
        
},

register: function (req, res) {
    return res.render('register')
},

profile: function (req, res) {
    const idUsuario = req.params.id;
    db.User.findByPk(idUsuario, {
        
         include: [
        {association: 'products', include: ['comentarios'] },
        { association: 'comentarios' }
    ] 
    })
    .then(function(usuario) {
            return res.render('profile', {
            id: idUsuario,
            nombre: usuario.nombreUsuario,
            email: usuario.email,
            contrasenia: usuario.contrasenia,
            nacimiento: usuario.fechaNacimiento,
            documento: usuario.documento,
            foto: usuario.foto,
            productos: usuario.products, 
            comentarios: usuario.comentarios
        });
    })
    .catch(function(error) {
        return res.send(error);
    });
},
create: function (req, res) {
    // Verificar si el email ya existe
    let { email, name, password, fechaNacimiento, documento, foto } = req.body;
    User.findAll({
        where:[{email: email}]
    })
    .then(function(results){
        if (results.length>0) {
            return res.send('no se puede crear el usuario porque ya existe una cuenta con ese email')
        }
        if (password.length<3) {
            return res.send('la contraseña debe tener al menos 3 caracteres')
        }
        let pass = bcrypt.hashSync(password, 10);
        User.create({
            email: email,
            nombreUsuario: name,
            contrasenia: pass,
            fechaNacimiento: fechaNacimiento,
            documento: documento,
            foto: foto
        })
        .then(function (results) {
            req.session.user = results;
            return res.redirect(`/products/profile/${results.id}`);
        })   
        .catch(function (error) {
            console.log(error);
            return res.send(error);
        });
    })
    },
logout: function (req,res) {
    req.session.destroy();
    res.clearCookie('recordarme');
    res.redirect("/products")
}

}




module.exports = profileController;

