const data = require("../db/index");
const db = require("../database/models");
const products = db.products;
const comentarios = db.comentarios;
const usuarios = db.User;
const op = db.Sequelize.Op;

let productController = {
    index: function (req, res) {
        products.findAll()
            .then(function (results) {
                let productos = results
                comentarios.findAll()
                    .then(function (results) {
                        let comments = results;
                        usuarios.findAll()
                            .then(function (results) {
                                return res.render('index', { productos: productos, comentarios: comments, usuarios: results })
                            })
                    })
            })
            .catch(function (error) {
                return res.send(error)
            })
    },
    product_add: function (req, res) {
        return res.render('product-add', { nombre: data.usuario.nombre })
    },
    createProduct: function (req, res) {

        const usuario = req.session.user;
        if (usuario == null) {
            return res.redirect('/users/login');
        } else {
            const datos = {
            nombreArchivoImagen: req.body.nombreArchivoImagen,
            nombreProducto: req.body.nombreProducto,
            descripcionProducto: req.body.descripcionProducto,
            idUsuario: usuario.id  
            };
            products.create({
                nombreArchivoImagen: datos.nombreArchivoImagen,
                nombreProducto: datos.nombreProducto,
                descripcionProducto: datos.descripcionProducto,
                idUsuario: datos.idUsuario
            })
                .then(function (productCreated) {
                    return res.redirect(`/products/product/${productCreated.id}`);
                })
                .catch(function (error) {
                    res.send(error);
                })
        }


    },
    product: function (req, res) {
        const idProducto = req.params.id;

        let encontrarp = {
            where: { id: idProducto },
            include: [
                { association: "usuario" },
                {
                    association: "comentarios",
                    include: ["usuario"]
                }

            ]
        };

        db.products.findOne(encontrarp)
            .then(function (producto) {
                return res.render("product", { producto });
            })
            .catch(function (error) {
                return res.send(error);
            });
    },
    search_result: function (req, res) {
        const search = req.query.search;
        let relacion = {
            where: {
                nombreProducto: { [op.like]: `%${search}%` }
            },
            include: [
                { association: "usuario" },
                { association: "comentarios" }
            ]
        };

        db.products.findAll(relacion)
            .then(function (productos) {
                if (productos.length == 0) {
                    mensaje = "No hay resultados para su criterio de búsqueda";
                } else {
                    mensaje = undefined;
                };
                return res.render("search-results", { productos, search, mensaje });
            })
            .catch(function (error) {
                return res.send(error);
            });
    },
    add_comment: function (req, res) {
        const idProducto = req.params.id;
        const nuevoComentario = req.body.comentario;
        const usuario = req.session.user;


        if (usuario == null) {
            return res.redirect('/users/login');
        }
        else {
            db.comentarios.create({
                comentario: nuevoComentario,
                idUsuario: usuario.id,
                idProducto: idProducto
            })
                .then(function (comentarios) {
                    return res.redirect(`/products/product/${idProducto}`);
                })
                .catch(function (error) {
                    res.send(error);
                })
        }



    },
}

module.exports = productController;