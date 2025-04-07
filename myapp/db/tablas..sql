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


CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    nombre_archivoImagen VARCHAR (500),
    nombre_producto VARCHAR (500) NOT NULL,
    descripcion_producto TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);
