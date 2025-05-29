CREATE SCHEMA datos;
USE datos;
CREATE TABLE usuario (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(500) NOT NULL UNIQUE, 
    nombreUsuario VARCHAR(500) NOT NULL UNIQUE,
    contrasenia VARCHAR(500) NOT NULL,
    fechaNacimiento DATE NOT NULL,
	documento INT UNSIGNED NOT NULL,
    foto VARCHAR(500) NOT NULL, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO usuario  VALUES ( DEFAULT, 'lmessi@gmail.com', "Lionel Messi" , "mundial2024" , "1987-06-24", 12345678, "/images/messi.webp", DEFAULT, DEFAULT, DEFAULT );
INSERT INTO usuario  VALUES (DEFAULT,'maria@gmail.com', 'Maria Campos' ,'clave456', '1985-08-20', 23456789, 'maria.jpg', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuario  VALUES (DEFAULT,'camilalopez@gmail.com', 'Camila Lopez' ,'clave789', '2000-01-15', 34567890,  'ana.jpg', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuario  VALUES (DEFAULT,'juancruz@gmail.com', 'Juan Cruz' ,'contraseña123', '1995-11-30',  45678901,  'juancruz.jpg', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuario VALUES ( DEFAULT, 'sofiabarrios@gmail.com', 'Sofia Barrios', 'Contra123', '1992-03-25', 56789012, 'sofia.jpg', DEFAULT, DEFAULT, DEFAULT);



CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT UNSIGNED NOT NULL,
    nombreArchivoImagen VARCHAR (500),
    nombreProducto VARCHAR (500) NOT NULL,
    descripcionProducto TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuario) REFERENCES usuario(id)
);

INSERT INTO productos  VALUES ( DEFAULT, 1, "/images/products/Bronzer-Stick-Power-Boost-SKU.webp", "Bronzer Stick" , "Warm Wishes Effortless Bronzer Stick", DEFAULT, DEFAULT, DEFAULT );
INSERT INTO productos  VALUES ( DEFAULT, 1, "/images/products/ECOMM-PL-LIQUID-LUMINIZER-EXHILARATE-1440x1952.webp","Luiquid Luminizer" , "Positive Light Liquid Luminizer", DEFAULT, DEFAULT, DEFAULT );
INSERT INTO productos  VALUES ( DEFAULT, 2, "/images/products/ECOMM-SP-MATTE-BOUNCY-BLUSH-HOPE.webp", "Matte Bouncy Blush" , "Soft Pinch Matte Bouncy Blush", DEFAULT, DEFAULT, DEFAULT );
INSERT INTO productos  VALUES ( DEFAULT, 2, "/images/products/soft-pinch-tinted-lip-oil-serenity-1440x1952.webp", "Tinted Lip Oil" , "Soft Pinch Tinted Lip Oil", DEFAULT, DEFAULT, DEFAULT );
INSERT INTO productos  VALUES ( DEFAULT, 3, "/images/products/Full-Size-Mascara-Open-SKU.webp", "Full Size Mascara" , "Perfect Strokes Universal Volumizing Mascara", DEFAULT, DEFAULT, DEFAULT );
INSERT INTO productos  VALUES ( DEFAULT, 3, "/images/products/kind-words-matte-lip-liner-talented-open.webp",  "Matte Lip Liner","Kind Words Matte Lip Liner" , DEFAULT, DEFAULT, DEFAULT );
INSERT INTO productos  VALUES ( DEFAULT, 4, "/images/products/Dewy-Lip-SUPPORT-SKU.webp","Dewy Lip Balm", "Dewy Lip Balm", DEFAULT, DEFAULT, DEFAULT );
INSERT INTO productos  VALUES ( DEFAULT, 4, "/images/products/kind-words-matte-lipstick-talented.webp",  "Matte Lipstick", "Kind Words Matte Lipstick", DEFAULT, DEFAULT, DEFAULT );
INSERT INTO productos  VALUES ( DEFAULT, 5, "/images/products/ECOMM-SOFT-PINCH-LIQUID-CONTOUR-GENTLE.webp",  "Liquid Contour", "Soft Pinch Liquid Contour", DEFAULT, DEFAULT, DEFAULT );
INSERT INTO productos  VALUES ( DEFAULT, 5, "/images/products/ECOMM-FIND-COMFORT-CLAW-CLIP-01.webp",  "Claw Clip", "Comfort Claw Clip", DEFAULT, DEFAULT, DEFAULT );

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idProducto INT UNSIGNED NOT NULL,
    idUsuario INT UNSIGNED NOT NULL,
    comentario TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuario) REFERENCES usuario(id),
    FOREIGN KEY (idProducto) REFERENCES productos(id)
);
INSERT INTO comentarios VALUES (DEFAULT, 1, 1, "Muy fácil de aplicar y se difumina súper bien. Le da un tono natural a mi piel sin parecer artificial.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 1, 3, "Perfecto para esculpir el rostro, y dura todo el día. ¡Mi nuevo favorito!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 1, 5, "Lo uso todos los días, incluso sin base. Deja un acabado suave y sin manchas.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 2, 2, "El brillo es sutil pero hermoso. Ideal para lograr ese efecto ‘glow from within’.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 2, 4, "Me encanta cómo ilumina mis pómulos sin parecer grasoso. ¡Lo amo!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 2, 1, "Textura ligera, fácil de aplicar con los dedos. Muy buen producto calidad-precio.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 3, 3, "El color es intenso pero se puede difuminar muy bien. Se siente aterciopelado.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 3, 5, "Me sorprendió la textura. ¡Realmente es bouncy! Y dura muchísimo.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 3, 2, "Queda muy natural en la piel y no se transfiere. Recomendado para piel grasa.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 4, 4, "Hidrata como un bálsamo pero con un toque de color precioso. Ideal para el día.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 4, 1, "No es pegajoso y deja los labios con un brillo súper lindo. ¡Lo llevo en la cartera siempre!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 4, 3, "Color sutil y textura liviana. Me encanta para un look natural.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 5, 5, "Alarga y da volumen sin dejar grumos. ¡Mis pestañas nunca se vieron tan bien!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 5, 2, "No se corre ni se cae a lo largo del día. La volvería a comprar sin dudar.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 5, 4, "Cepillo cómodo y fórmula ligera. Ideal para pestañas pequeñas como las mías.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 6, 1, "Pigmenta muy bien y no se corre. ¡Define los labios a la perfección!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 6, 3, "Lo uso como base para mi labial y hace que dure mucho más.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 6, 5, "Fácil de aplicar, no reseca. Gran calidad por el precio.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 7, 2, "Hidrata y da un efecto jugoso que se ve divino. No puedo parar de usarlo.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 7, 4, "Me encanta el brillo natural que deja, sin parecer gloss.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 7, 1, "Perfecto para labios secos. Lo aplico incluso encima del labial.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 8, 3, "Súper pigmentado y dura horas sin necesidad de retocar. Increíble", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 8, 5, "Textura suave que no reseca. Mi labial mate favorito.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 8, 2, "El color se ve igual en los labios que en el envase. Muy fiel y elegante.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 9, 4, "Muy fácil de difuminar, incluso para principiantes. Queda súper natural.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 9, 1, "Me gusta que se adapte a distintos tonos de piel. Lo uso todos los días.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 9, 3, "Textura ligera que se funde con la base. Lo recomiendo un montón.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 10,5, "Sujeta bien el pelo sin apretar demasiado. Ideal para peinados rápidos.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 10, 2, "El diseño es lindo y resistente. No se rompe fácil como otros clips.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 10, 4, "Perfecto para cabello largo y grueso. ¡No se cae ni con movimiento!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 1, 1, "Me encanta!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 1, 1, "Me encanta!", DEFAULT, DEFAULT, DEFAULT);