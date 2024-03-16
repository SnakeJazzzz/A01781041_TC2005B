"use strict"
import express from 'express';

const app = express()
const port = 3000

app.use(express.json())

app.get('/api/hello', (req, resp) => {
    resp.status(200).send('Hello World')
})

app.get('/api/hello/:name', (req, resp) => {
    console.log(req.params)
    resp.status(200).send(`Hello ${req.params.name}`)
})

app.post('/api/hello', (req, resp) => {
    console.log(req.body)
    resp.status(200).send(`Hello ${req.body["name"]} ${req.body["surname"]}`)
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

