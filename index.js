import express from "express"
import indexRouter from "./router/indexRouter.js"

const server = express()

server.use('/api', indexRouter)

server.get('/', (req, res, next) => {
    res.send("Bienvenido a mi servidor en /")
})

server.listen(3000, () => {console.log('Servidor corriendo en puerto 3000')})