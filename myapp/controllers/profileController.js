const data = require("../db/index");
const db = require('../database/models')
const bcrypt = require("bcryptjs");
let User = db.User;
const op = db.Sequelize.Op

let profileController = {
showLogin: function (req, res) {
    if (req.session.user) {
        return res.redirect("/profile");
    }
    res.render("login")
},
login: function(req,res){
    let datos = req.body;

        db.User.findOne({ where: { email: { [op.like]: datos.email } } })
            .then(function (results) {
                if (results == undefined) {
                    return res.send("email incorrecto");
                }
                let validPassword = bcrypt.compareSync(datos.password, results.password);

                if (validPassword == undefined) {
                    return res.send("contraseña incorrecta");
                }
                req.session.user = results;
                if (datos.recordarme != undefined) {
                    res.cookie("recordarme", results.email, { maxAge: 60000 })
                }
                return res.redirect("/profile");
            })
        
        .catch(function (error) {
                    return res.send(error)
                })
        
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
    // Verificar si el email ya existe
    let { email, name, password, fechaNacimiento, documento, foto } = req.body;
    User.findAll({
        where:[{email: email}]
    })
    .then(function(results){
        if (results.lengh>0) {
            return res.send('no se puede crear el usuario porque ya existe una cuenta con ese email')
        }else{
            User.create({
                email: email,
                nombreUsuario: name,
                contrasenia: bcrypt.hashSync(password, 10),
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
    })
    }
}




module.exports = profileController;

