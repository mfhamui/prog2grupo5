const data = {
    usuario: {
        email: "lmessi@gmail.com",
        nombre: "Lionel Messi",
        password: "mundial2024",
        fechaNacimiento: "1987-06-24",
        documento: 12345678,
        foto: "/images/messi.webp",
    },
  
    productos: []
};

const nombres = [
    "Cafetera Moulinex",
    "MacBook Pro",
    "Smartphone Samsung",
    "Auriculares Sony",
    "Smart TV LG",
    "Licuadora Philips",
    "PlayStation 5",
    "Cámara Canon",
    "Notebook Lenovo",
    "Microondas BGH"
];

const imagenes = [
    "/images/products/img-cafetera-moulinex.jpg",
    "/images/products/img-macbook-pro.jpg",
    "/images/products/img-samsung-galaxy.jpg",
    "/images/products/img-auriculares-sony.jpg",
    "/images/products/img-tv-lg.jpg",
    "/images/products/img-licuadora.jpg",
    "/images/products/img-playstation.jpg",
    "/images/products/img-camara-canon.jpg",
    "/images/products/img-lenovo.jpg",
    "/images/products/img-microondas.jpg"
];

const descripcion = "Este producto combina diseño moderno con funcionalidad para ofrecerte la mejor experiencia. Ideal tanto para el hogar como para la oficina. Su diseño resistente y su facilidad de uso lo hacen perfecto para el día a día.";
for (let i = 0; i < 10; i++) {
    let producto = {
        imagen: imagenes[i],
        nombre: nombres[i],
        comentarios: [],
        descripcion: descripcion
    };
    for (let i = 0; i < 5; i++) {
        let nombre = "Lionel Messi";
        let foto = "/images/messi.webp";
        let comentario = "¡Una cafetera espectacular! La compré hace unas semanas y no puedo empezar el día sin usarla. "
        producto.comentarios.push({name: nombre, pic: foto, com: comentario})
    }
    
    data.productos.push(producto)
}  

module.exports = data;
