DROP SCHEMA IF EXISTS PTE;
CREATE SCHEMA PTE;
USE PTE;

-- Creación de la tabla Usuarios
CREATE TABLE Usuarios (
    IDUsuario INTEGER PRIMARY KEY AUTO_INCREMENT,
    NombreUsuario VARCHAR(40) NOT NULL,
    Contraseña VARCHAR(40) NOT NULL,
    PuntuaciónMáxima INTEGER DEFAULT 0
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Creación de la tabla NPC
CREATE TABLE NPC (
	IDNPC INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    health INTEGER NOT NULL,
    speed FLOAT NOT NULL,
    attack INTEGER NOT NULL,
    attackCooldown FLOAT NOT NULL,
    `range` FLOAT NOT NULL,
    isStructure BOOL NOT NULL,
    attackTowers BOOL NOT NULL,
    attackEnemies BOOL NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Creación de la tabla Cartas
CREATE TABLE Cartas (
    IDCarta INTEGER PRIMARY KEY AUTO_INCREMENT,
    cardName VARCHAR(40) NOT NULL,
    description VARCHAR(40) NOT NULL,
    cost INTEGER NOT NULL,
    numberOfNPCs INTEGER NOT NULL,
    IDNPC INTEGER NOT NULL,
    FOREIGN KEY(IDNPC) REFERENCES NPC(IDNPC)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Creación de la tabla Mazos
CREATE TABLE Mazos (
    IDMazo INTEGER PRIMARY KEY AUTO_INCREMENT,
    IDUsuario INTEGER,
    NombreMazo VARCHAR(40) NOT NULL,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(IDUsuario)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Creación de la tabla DetallesMazo
CREATE TABLE DetallesMazo (
    IDDetalle INTEGER PRIMARY KEY AUTO_INCREMENT,
    IDMazo INTEGER,
    IDCarta INTEGER,
    Cantidad INTEGER,
    FOREIGN KEY (IDMazo) REFERENCES Mazos(IDMazo),
    FOREIGN KEY (IDCarta) REFERENCES Cartas(IDCarta)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Creación de la tabla Partidas
CREATE TABLE Partidas (
    IDPartida INTEGER PRIMARY KEY AUTO_INCREMENT,
    IDUsuario INTEGER,
    FechaHoraInicio DATETIME,
    FechaHoraFin DATETIME,
    Puntuación INTEGER,
    OrdasSuperadas INTEGER,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(IDUsuario)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


