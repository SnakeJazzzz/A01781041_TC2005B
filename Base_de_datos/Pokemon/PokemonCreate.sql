DROP DATABASE IF EXISTS Pokemon;
CREATE DATABASE Pokemon;
USE Pokemon;


CREATE TABLE Jugador (
    Jugador_ID INT PRIMARY KEY,
    Nombre VARCHAR(255),
    Email VARCHAR(255),
    Contrasena VARCHAR(255), 
    Nivel INT,
    is_NPC BOOLEAN
);

CREATE TABLE Clasificacion (
    Clasificacion_ID INT PRIMARY KEY,
    Jugador_ID INT,
    Puntuacion INT,
    Posicion INT,
    FOREIGN KEY (Jugador_ID) REFERENCES Jugador(Jugador_ID)
);

CREATE TABLE Partida (
    Partida_ID INT PRIMARY KEY,
    timestamp DATETIME,
    Movimiento_ID INT
);


CREATE TABLE Jugador_Partida (
    Jugador_partida_ID INT PRIMARY KEY,
    Partida_ID INT,
    Jugador_ID INT,
    Mazo_id INT,
    Resultado INT,
    FOREIGN KEY (Partida_ID) REFERENCES Partida(Partida_ID),
    FOREIGN KEY (Jugador_ID) REFERENCES Jugador(Jugador_ID)
);

CREATE TABLE Tipo (
    Tipo_ID INT PRIMARY KEY,
    Descripcion VARCHAR(255)
);

CREATE TABLE Carta (
    Carta_ID INT PRIMARY KEY,
    Nombre VARCHAR(255),
    Tipo INT,
    HP INT,
    Ataque INT,
    Defensa INT,
    Ataques_especiales VARCHAR(255),
    Rareza INT,
    FOREIGN KEY (Tipo) REFERENCES Tipo(Tipo_ID)
);

CREATE TABLE Movimientos (
    movimiento_ID INT PRIMARY KEY,
    Nombre VARCHAR(255),
    Tipo INT,
    Dano INT,
    Descripcion VARCHAR(255),
    FOREIGN KEY (Tipo) REFERENCES Tipo(Tipo_ID)
);

CREATE TABLE Carta_Movimientos (
    Carta_movimiento_ID INT PRIMARY KEY,
    Carta_ID INT,
    Movimiento_ID INT,
    FOREIGN KEY (Carta_ID) REFERENCES Carta(Carta_ID),
    FOREIGN KEY (Movimiento_ID) REFERENCES Movimientos(movimiento_ID)
);

CREATE TABLE Habilidad (
    Habilidad_ID INT PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    efecto VARCHAR(255)
);

CREATE TABLE Carta_Habilidad (
    Carta_habilidad_ID INT PRIMARY KEY,
    Carta_ID INT,
    Habilidad_ID INT,
    FOREIGN KEY (Carta_ID) REFERENCES Carta(Carta_ID),
    FOREIGN KEY (Habilidad_ID) REFERENCES Habilidad(Habilidad_ID)
);
CREATE TABLE Mazo (
    Mazo_ID INT PRIMARY KEY,
    Jugador_ID INT,
    Nombre VARCHAR(255),
    FOREIGN KEY (Jugador_ID) REFERENCES Jugador(Jugador_ID)
);

CREATE TABLE Composicion_mazo (
    composicion_ID INT PRIMARY KEY,
    Carta_ID INT,
    Mazo_ID INT,
    Cantidad INT,
    FOREIGN KEY (Carta_ID) REFERENCES Carta(Carta_ID),
    FOREIGN KEY (Mazo_ID) REFERENCES Mazo(Mazo_ID)
);

CREATE TABLE Items (
    Item_ID INT PRIMARY KEY,
    Nombre VARCHAR(255),
    descripcion VARCHAR(255),
    efecto VARCHAR(255)
);

CREATE TABLE Inventario (
    Inventario_ID INT PRIMARY KEY,
    Item_ID INT,
    Jugador_ID INT,
    Cantidad INT,
    FOREIGN KEY (Item_ID) REFERENCES Items(Item_ID),
    FOREIGN KEY (Jugador_ID) REFERENCES Jugador(Jugador_ID)
);

CREATE TABLE Estadisticas (
    Estadistica_ID INT PRIMARY KEY,
    Jugador_ID INT,
    Partida_ID INT,
    Carta_ID INT,
    Dano_hecho INT,
    Dano_recibido INT,
    Cartas_Jugadas INT,
    FOREIGN KEY (Jugador_ID) REFERENCES Jugador(Jugador_ID),
    FOREIGN KEY (Partida_ID) REFERENCES Partida(Partida_ID),
    FOREIGN KEY (Carta_ID) REFERENCES Carta(Carta_ID)
);