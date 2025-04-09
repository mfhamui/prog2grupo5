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
    "Bronzer Stick",
    "Luiquid Luminizer",
    "Matte Bouncy Blush",
    "Tinted Lip Oil",
    "Full Size Mascara",
    "Matte Lip Liner",
    "Dewy Lip Balm",
    "Matte Lipstick",
    "Liquid Contour",
    "Claw Clip"
];

const imagenes = [
    "/images/products/Bronzer-Stick-Power-Boost-SKU.webp",
    "/images/products/ECOMM-PL-LIQUID-LUMINIZER-EXHILARATE-1440x1952.webp",
    "/images/products/ECOMM-SP-MATTE-BOUNCY-BLUSH-HOPE.webp",
    "/images/products/soft-pinch-tinted-lip-oil-serenity-1440x1952.webp",
    "/images/products/Full-Size-Mascara-Open-SKU.webp",
    "/images/products/kind-words-matte-lip-liner-talented-open.webp",
    "/images/products/Dewy-Lip-SUPPORT-SKU.webp",
    "/images/products/kind-words-matte-lipstick-talented.webp",
    "/images/products/ECOMM-SOFT-PINCH-LIQUID-CONTOUR-GENTLE.webp",
    "/images/products/ECOMM-FIND-COMFORT-CLAW-CLIP-01.webp"
];

const descripcion = [
    "Warm Wishes Effortless Bronzer Stick",
    "Positive Light Liquid Luminizer",
    "Soft Pinch Matte Bouncy Blush",
    "Soft Pinch Tinted Lip Oil",
    "Perfect Strokes Universal Volumizing Mascara",
    "Kind Words Matte Lip Liner",
    "Dewy Lip Balm",
    "Kind Words Matte Lipstick",
    "Soft Pinch Liquid Contour",
    "Comfort Claw Clip"
];
for (let i = 0; i < 10; i++) {
    let producto = {
        imagen: imagenes[i],
        nombre: nombres[i],
        comentarios: [],
        descripcion: descripcion[i]
    };
    for (let i = 0; i < 5; i++) {
        let nombre = "Lionel Messi";
        let foto = "/images/messi.webp";
        let comentario = "Super easy to blend, perfect shade, such smooth product!"
        producto.comentarios.push({name: nombre, pic: foto, com: comentario})
    }
    
    data.productos.push(producto)
}  

module.exports = data;
