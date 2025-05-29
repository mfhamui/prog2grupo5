module.exports = function (sequelize, dataTypes) {
    let alias = "products"; 

    let columnas = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        idUsuario: {
            type: dataTypes.INTEGER.UNSIGNED,
        },
        nombreArchivoImagen: {
            type: dataTypes.STRING(500)
        },
        nombreProducto: {
            type: dataTypes.STRING(500),
        },
        descripcionProducto: {
            type: dataTypes.TEXT
        },
        createdAt: {
            type: dataTypes.DATE,
            
        },
        updatedAt: {
            type: dataTypes.DATE,
            
        },
        deletedAt: {
            type: dataTypes.DATE,
        }
    };

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false,
    };

    let Product = sequelize.define(alias, columnas, config);

    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "idUsuario"
        });

        Product.hasMany(models.comentarios, {
        as: "comentarios",
        foreignKey: "idProducto"
        });
    };

    return Product;
};
