const data = {
    usuario: [{
        email: "lmessi@gmail.com",
        nombre: "Lionel Messi",
        password: "mundial2024",
        fechaNacimiento: "1987-06-24",
        documento: 12345678,
        foto: "/images/messi.webp",
    }],
  
    productos: []
};

for (let i = 0; i < 10; i++) {
    let producto ={
        imagen: "/images/products/img-cafetera-moulinex.jpg",
        nombre: "Cafetera Moulinex",
        comentarios: [],
        descripcion: "La Cafetera Moulinex combina diseño moderno con funcionalidad para ofrecerte un café de calidad cada mañana. Con capacidad para 12 tazas, sistema antigoteo y función de mantenimiento del calor, esta cafetera es ideal tanto para el hogar como para la oficina. Su jarra de vidrio resistente y su filtro permanente la hacen fácil de usar y de limpiar, permitiéndote disfrutar de tu café sin complicaciones."
    }
    for (let i = 0; i < 5; i++) {
        let nombre = "Lionel Messi";
        let foto = "/images/messi.webp";
        let comentario = "¡Una cafetera espectacular! La compré hace unas semanas y no puedo empezar el día sin usarla. "
        producto.comentarios.push({name: nombre, pic: foto, com: comentario})
    }
    
    data.productos.push(producto)
}  

module.exports = data;
