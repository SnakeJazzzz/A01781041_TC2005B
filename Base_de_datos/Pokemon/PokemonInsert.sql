-- Insertar datos en 'Tipo'
INSERT INTO Tipo (Tipo_ID, Descripcion) VALUES 
(1, 'Fuego'),
(2, 'Agua'),
(3, 'Hierba');

-- Insertar datos en 'Movimientos'
INSERT INTO Movimientos (movimiento_ID, Nombre, Tipo, Dano, Descripcion) VALUES 
(1, 'Llamarada', 1, 30, 'Una fuerte llamarada que quema al oponente'),
(2, 'Hidrobomba', 2, 30, 'Un potente chorro de agua dirigido al oponente'),
(3, 'Hoja Afilada', 3, 25, 'Corta con hojas muy afiladas');

-- Insertar datos en 'Jugador'
INSERT INTO Jugador (Jugador_ID, Nombre, Email, Contrasena, Nivel, is_NPC) VALUES 
(1, 'Ash', 'ash@email.com', 'password_hashed', 5, FALSE),
(2, 'Misty', 'misty@email.com', 'password_hashed', 5, TRUE);

-- Insertar datos en 'Mazo'
INSERT INTO Mazo (Mazo_ID, Jugador_ID, Nombre) VALUES 
(1, 1, 'Mazo de Ash'),
(2, 2, 'Mazo de Misty');

-- Insertar datos en 'Clasificacion'
INSERT INTO Clasificacion (Clasificacion_ID, Jugador_ID, Puntuacion, Posicion) VALUES 
(1, 1, 1500, 1),
(2, 2, 1450, 2);

-- Insertar datos en 'Partida'
INSERT INTO Partida (Partida_ID, timestamp, Movimiento_ID) VALUES 
(1, NOW(), 1),
(2, NOW(), 2);

-- Insertar datos en 'Jugador_Partida'
INSERT INTO Jugador_Partida (Jugador_partida_ID, Partida_ID, Jugador_ID, Mazo_id, Resultado) VALUES 
(1, 1, 1, 1, 1),
(2, 2, 2, 2, 0);

-- Insertar datos en 'Carta'
INSERT INTO Carta (Carta_ID, Nombre, Tipo, HP, Ataque, Defensa, Ataques_especiales, Rareza) VALUES 
(1, 'Charizard', 1, 150, 50, 50, 'Vuelo', 5),
(2, 'Blastoise', 2, 150, 50, 50, 'Disparo Agua', 5),
(3, 'Venusaur', 3, 150, 50, 50, 'Látigo Cepa', 5);

-- Insertar datos en 'Carta_Movimientos'
INSERT INTO Carta_Movimientos (Carta_movimiento_ID, Carta_ID, Movimiento_ID) VALUES 
(1, 1, 1),
(2, 2, 2),
(3, 3, 3);

-- Insertar datos en 'Habilidad'
INSERT INTO Habilidad (Habilidad_ID, nombre, descripcion, efecto) VALUES 
(1, 'Intimidación', 'Baja la defensa del oponente', 'Defensa -1'),
(2, 'Absorber', 'Recupera HP al hacer daño', 'HP +5 por ataque');

-- Insertar datos en 'Carta_Habilidad'
INSERT INTO Carta_Habilidad (Carta_habilidad_ID, Carta_ID, Habilidad_ID) VALUES 
(1, 1, 1),
(2, 2, 2);

-- Insertar datos en 'Composicion_mazo'
INSERT INTO Composicion_mazo (composicion_ID, Carta_ID, Mazo_ID, Cantidad) VALUES 
(1, 1, 1, 4),
(2, 2, 2, 4),
(3, 3, 1, 4),
(4, 3, 2, 4);

-- Insertar datos en 'Items'
INSERT INTO Items (Item_ID, Nombre, descripcion, efecto) VALUES 
(1, 'Poción', 'Recupera 20 HP', 'HP +20'),
(2, 'Super Poción', 'Recupera 50 HP', 'HP +50');

-- Insertar datos en 'Inventario'
INSERT INTO Inventario (Inventario_ID, Item_ID, Jugador_ID, Cantidad) VALUES 
(1, 1, 1, 5),
(2, 2, 2, 3);

-- Insertar datos en 'Estadisticas'
INSERT INTO Estadisticas (Estadistica_ID, Jugador_ID, Partida_ID, Carta_ID, Dano_hecho, Dano_recibido, Cartas_Jugadas) VALUES 
(1, 1, 1, 1, 50, 30, 10),
(2, 2, 2, 2, 40, 20, 8);

