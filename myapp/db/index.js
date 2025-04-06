const data = {
    usuario: [{
        email: "lmessi@gmail.com",
        nombre: "Lionel Messi",
        password: "mundial2024",
        fechaNacimiento: "1987-06-24",
        documento: 12345678,
        foto: "/images/messi.webp",
    }],
  
    productos: [
        {
            imagen: "/images/products/img-cafetera-moulinex.jpg",
            nombre: "Cafetera Moulinex",
            comentarios: []
        },
        {
            imagen: "/images/products/img-macbook-pro-2019.jpg",
            nombre: "Macbook Pro 2019"

        }
      
    ]
  };

for (let i = 0; i < 5; i++) {
    let nombre = "lionel Messi";
    let foto = "/images/messi.webp";
    let comentario = "Lorem ipsum dolor sit amet. ".repeat(4)
    data.productos[0].comentarios.push({name: nombre, pic: foto, com: comentario})
}
console.log(data.productos[0])
module.exports = data;
  