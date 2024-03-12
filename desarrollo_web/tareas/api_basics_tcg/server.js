//Experess es in marco de trabajo para Node.js, al importarlo puedes ultilizar todas sus funciones y métodos para manejar el servidor
import express from 'express'; 

// creamos intsnaica de express, y podemos empezar a construir nuestro servoidor. app es el corazon de nuestro servidor, controla todas las opreaciones entrantes y salientes
const app = express(); 

// puerto en el que se ejecutará el servidor
const port = 3000;

// middleware para que express pueda manejar datos en formato JSON. analiza el Jason y lo convierte en un objeto de JavaScript.
//.use es un método de express que se utiliza para agregar middleware a la aplicación
app.use(express.json()); 

// Array de cartas que se irá llenando con las cartas que se agreguen
let cartas = []; 


// Ruta para obtener todas las cartas
//app.get(...) funcion de express que define una ruta para solicitudes get. "cuando alguen hace una solicitud GET a esta ruta especifica, jeecuta el siguente codigo."
// '/cartas' Es la ruta o el endpoint, http://localhost:3000/cartas con una solicitud get este codigo se ejecuta 
// (req,res) => {} comienza una funcion de flecha que toma dos parametros, req y res. req es la solicitud que se hace al servidor, res es la respuesta que se le dara al cliente.
app.get('/cartas', (req, res) => {
  // Si no hay cartas, se responde "no hay cartas"
  if (cartas.length === 0) {
    //return res.status(404) Utiliza el objeto 'res' para establecer el coidgo de estado HTTP  de la respuesta '404', que indica que el recurso solicitado no se encontro 
    // .json(message: "No hay cartas") envia respuesta en formato JSON al cliente. 
    return res.status(404).json({ message: "No hay cartas" });
  }
  // Si hay cartas, se responde con el array de cartas
  res.json(cartas);
});

// Ruta para obtener una carta por su ID
//'/cartas/:id': Es la ruta. El :id es un parámetro de ruta que puedes utilizar para identificar una carta específica. Por ejemplo, si alguien visita http://tudominio.com/cartas/1
app.get('/cartas/:id', (req, res) => {
  //const carta =... declara una variable carta y le asigna el valor de la busqueda.
  //.find() para buscar en el array cartas y encontrar la primera carta que tenga un id que coincida con el id proporcionado en la ruta (req.params.id).
  // c representa una carta dentro del array cartas, y se compara su id con el id proporcionado en la ruta.
  const carta = cartas.find(c => c.id == req.params.id);
  if (!carta) {
    //si no se encuentra la carta, se responde "carta no encontrada"
    return res.status(404).json({ message: "Carta no encontrada" });
  }
  // si la carta se econtro enviala en formato JSON
  res.json(carta);
});

// Ruta para agregar nuevas cartas
// app.post(...): Define una ruta para solicitudes POST en el servidor Express
app.post('/cartas', (req, res) => {
  //Extrae id, nombre, atributo, y cualquier otro atributo enviado en el cuerpo de la solicitud (req.body).
  const { id, nombre, atributo} = req.body;
  //verificar si id, nombre, o  atributo estan ausentes en la solucitud, si es asi, responde con "faltan atributos en la carta"
  if (!id || !nombre || !atributo) {
    return res.status(400).json({ message: "Faltan atributos en la carta" });
  }
  //Usa .some() para verificar si ya existe una carta con el mismo id en el array cartas. Si es asi, responde con "la carta ya existe"
  if (cartas.some(c => c.id == id)) {
    return res.status(409).json({ message: "La carta ya existe" });
  }
  //Crea un nuevo objeto nuevaCarta con los datos proporcionados
  const nuevaCarta = { id, nombre, atributo};
  // se utiliza .push() para agregar la nueva carta al array cartas
  cartas.push(nuevaCarta);
  //responde con "carta agregada correctamente"
  res.status(201).json({ message: "Carta agregada correctamente" });
});

// Ruta para borrar una carta por su ID
// app.delete(...): Define una ruta para solicitudes DELETE 
app.delete('/cartas/:id', (req, res) => {
  // .findIndex() para buscar la posición de la carta con el id proporcionado en el array cartas. (no se utliiza .find() porque necesitamos la posición de la carta en el array para borrarla con .splice())
  const indiceCarta = cartas.findIndex(c => c.id == req.params.id);
  //Verifica si el índice de la carta es -1, lo cual indica que no se encontró la carta.
  if (indiceCarta === -1) {
    return res.status(404).json({ message: "Carta no encontrada para borrar" });
  }
  //Utiliza splice para eliminar 1 elemento en el índice encontrado (indiceCarta) del array cartas. Esto efectivamente borra la carta del array.
  cartas.splice(indiceCarta, 1);
  res.json({ message: "Carta borrada correctamente" });
});

// Ruta para actualizar una carta por su ID
// app.put(...): Define una ruta para solicitudes PUT, se usa para actualizar recursos existentes.
app.put('/cartas/:id', (req, res) => {
  // .findIndex() para buscar la posición de la carta con el id proporcionado.
  const indiceCarta = cartas.findIndex(c => c.id == req.params.id);
  //checar si la carta existe.
  if (indiceCarta === -1) {
    return res.status(404).json({ message: "Carta no encontrada para actualizar" });
  }
  //cartas[indiceCarta]: se refiere al elemento en la posicion indiceCarta del array cartas.
  // ...cartas[indiceCarta], ...req.body }: Esta es una operación de desestructuración y combinación de objetos usando el operador de propagación (...)
  // ...cartas[indiceCarta]: Toma todas las propiedades y valores del objeto carta actual (la carta que estamos actualizando) y los coloca en un nuevo objeto. Esto asegura que conservemos todos los datos existentes de la carta.
  // ...req.body: Toma todas las propiedades y valores del cuerpo de la solicitud (req.body) y los coloca en un nuevo objeto. Esto asegura que actualicemos solo las propiedades que se enviaron en la solicitud.
  cartas[indiceCarta] = { ...cartas[indiceCarta], ...req.body };
  res.json({ message: "Carta actualizada correctamente" });
});
// app.listen(...): Inicia el servidor en el puerto especificado
//port: especifica el número de puerto en tu servidor donde Express va a escuchar las solicitudes. (se especifica al principio)
//() => {...}: es una función de flecha que se ejecuta cuando el servidor se inicia correctamente.
app.listen(port, () => {
  // Imprime un mensaje en la consola.
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
