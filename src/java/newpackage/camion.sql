CREATE TABLE transporte (
    id_transporte INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(45) NOT NULL,
    nombre VARCHAR(125) NOT NULL,
    razon_social VARCHAR(175)
);

CREATE TABLE camion (
    id_camion INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(8) NOT NULL,
    id_transporte INT DEFAULT NULL,
    color_ VARCHAR(35),
    modelo VARCHAR(45),
    capacidad_tonelada VARCHAR(45),
    FOREIGN KEY (id_transporte) REFERENCES transporte(id_transporte)
);

