const data = require("../db/index");
const db = require('../database/models')
const bcrypt = require("bcryptjs");
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

        db.User.findOne({ where: { email: { [op.like]: datos.email } } })
            .then(function (results) {
                if (results != undefined) {
                    let validPassword = bcrypt.compareSync(datos.password, results.password);
                    if (validPassword) {
                        req.session.user = results;
                        if (datos.recordarme != undefined) {
                            res.cookie("recordarme", results.email, { maxAge: 60000 })
                        }
                        return res.redirect("/profile");
                    }else{
                        return res.send("contraseña incorrecta");
                    }
                }else{
                    return res.send("email incorrecto");
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
      { association: 'products', include: ['comentarios'] }
    ] 
    })
    .then(function(usuario) {
         console.log("usuario encontrado:", usuario);
            return res.render('profile', {
            nombre: usuario.nombreUsuario,
            email: usuario.email,
            contrasenia: usuario.contrasenia,
            nacimiento: usuario.fechaNacimiento,
            documento: usuario.documento,
            foto: usuario.foto,
            productos: usuario.products 
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
    },
    logout: function (req,res) {
        req.session.destroy();
        res.clearCookie('recordarme');
        return res.redirect("/products")
    }

}




module.exports = profileController;

