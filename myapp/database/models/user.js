const { usuario } = require("../../db");

module.exports = function (sequelize, dataTypes) {
    let alias = 'User'; 

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        email: {
            type: dataTypes.STRING(500),
         
        },
        nombreUsuario: {
            type: dataTypes.STRING(500),
         
            unique: true
        },
        contrasenia: {
            type: dataTypes.STRING(500),
           
        },
        fechaNacimiento: {
            type: dataTypes.DATEONLY,
           
        },
        documento: {
            type: dataTypes.INTEGER.UNSIGNED,
           
        },
        foto: {
            type: dataTypes.STRING(500),
            
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "usuario", 
        timestamps: true,
        underscored: true,
    };
     
    const User = sequelize.define(alias, cols, config);
     
    User.associate = function(models) {
        User.hasMany(models.products, {
            as : "products",
            foreignKey: "idUsuario"
        })
    }

 
    return User;
};
