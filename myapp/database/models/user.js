let db = require("../database/models");
const User = db.User;
const bcrypt = require("bcryptjs");

let usersController = {
    show: function(req, res) {
      return res.render('register');
        
    },

    create: function(req, res){
 
        let nombre = req.body.nombre;
        let email = req.body.email;
        let password = req.body.password;

        let passworddos= bcrypt.hashSync(password, 10);
        
    User.create({
      name: nombre,
      email: email,
      password: passworddos
    })
     .then(function(resultados){
                 res.redirect('/');
            })
  
    }

  };


  module.exports = usersController;