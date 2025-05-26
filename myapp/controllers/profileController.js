const data = require("../db/index");
const db = require('../database/models')
const bcrypt = require("bcryptjs");
let User = db.User;
const op = db.Sequelize.Op

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
    // Verificar si el email ya existe
    let { email, name, password, fechaNacimiento, documento, foto } = req.body;
    User.findAll({
        where:[{email: email}]
    })
    .then(function(results){
        if (results.lengh>0) {
            return res.send('no se puede crear el usuario porque ya existe una cuenta con ese email')
        }else{
            if (condition) {
                
            }

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

