// 'use strict' es una directiva en JavaScript que ayuda a escribir un código más seguro y robusto al prevenir ciertas acciones y arrojar más excepciones.
"use strict"

// Importamos el módulo 'express', que es un framework para Node.js que facilita el desarrollo de aplicaciones web.
import express from 'express';

// Creamos una nueva aplicación Express.
const app = express()

// Definimos el puerto en el que se ejecutará nuestra aplicación.
const port = 3000

// Definimos una función 'hello' que enviará una respuesta HTTP con el estado 200 y el mensaje 'Hello World'.
const hello = (req, resp) => {
    resp.status(200).send('Hello World')
}

// Definimos una ruta '/api/hello/:name'. Cuando se accede a esta ruta con un método GET, se ejecuta la función que le pasamos.
// Esta función recibe los parámetros de la solicitud (req.params), imprime estos parámetros y envía una respuesta con el estado 200 y un mensaje personalizado.
app.get('/api/hello/:name', (req, resp) => {
    console.log(req.params)
    resp.status(200).send(`Hello ${req.params.name}`)
})

// Hacemos que nuestra aplicación escuche en el puerto que definimos anteriormente. Cuando la aplicación comienza a escuchar, se imprime un mensaje en la consola.
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})
