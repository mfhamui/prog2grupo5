CREATE SCHEMA datos;
USE datos;
CREATE TABLE usuario (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(500) NOT NULL UNIQUE, 
    nombre_usuario VARCHAR(500) NOT NULL UNIQUE,
    contrasenia VARCHAR(500) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
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
    id_usuario INT UNSIGNED NOT NULL,
    nombre_archivoImagen VARCHAR (500),
    nombre_producto VARCHAR (500) NOT NULL,
    descripcion_producto TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_producto INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,
    comentario TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id)
);