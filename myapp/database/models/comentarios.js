module.exports = function (sequelize, dataTypes) {
    let alias = "comentarios";

    let columnas = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        idProducto: {
            type: dataTypes.INTEGER.UNSIGNED,
           
        },
        idUsuario: {
            type: dataTypes.INTEGER.UNSIGNED,
            
        },
        comentario: {
            type: dataTypes.TEXT
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
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    };

    let Comentario = sequelize.define(alias, columnas, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.products, {
            as: "producto",
            foreignKey: "idProducto"
        });

        Comentario.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "idUsuario"
        });
    };

    return Comentario;
};
