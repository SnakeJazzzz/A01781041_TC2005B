# **Notas Base de datos**
### **que es una base de datots?**
Una base de datos es una coleccion de datos interrelacionados
Entorno centralizado para datos, varias capas de administracion
Almacienamiento y recuperacion de informacion

### **Porque usar una base de datos**
No saturar un solo sistema (en este caso unity)
Escalabilidad
podemos manejar muchos datos sin scarificar rendimiento
Plataforma solida y versatil

### **diferencia entre exel y una base de datos**
un programa como exel se encarga de la facil manipulacion mas orientado a la siencia de datos, y una base de datos esta diseñada para almacenar, organizar y gestionar datos podemos guardar desde video musica fotos etc..
Es un software tipo servidor 
Contiene medidas de seguridad 
### **centralizada desentralizada**
centralizada es que todo esta en un sistema central
decentralizada es que la base de datos esta en multiples pedazos en diferentes servidores


### **Comandos importantes sql**
Un ejemplo:
SELECT * FROM Custumers; - selecciona todos los records en la tabla de custumers
Comoandos mas importantes:
SELECT - extrae data de la base de datos
SELECT DISTINCT - retorna solo valores diferentes
UPDATE - actualiza data en la base de datos
DELETE - borra data de la base de datos
INSTER INTO - insterta nueva data a la base de datos
CREATE DATABASE - crea una nueva base de datos
ALTER TABLE - modifica una tabla
CREATE INDEX -  cera un index (search key)
DROP INDEX - borra un index

### **Syntax**
Para selccionar filas especificas:
SELECT column1, column2,...
FROM table_name;

Ver toda la info de una tabla:
SELECT * FROM table_name;

seleccionar solo los datos que no se repitan dentro de las columnas:
SELECT DISTINCT column1, column2,...
FROM tamble_name;

retorna la cuenta de todos los difrenetes registros:
SELECT COUNT(DISTINCT Country) FROM Customers;

Selecionar todos los datos donde City tiene valor de 'Berlin'
SELECT * FROM Customers
WHERE City = 'Berlin';










