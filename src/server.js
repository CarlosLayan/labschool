
//Importar modulo dotenv e especificar o arquivo de configuração 
require('dotenv').config({path: "variaveis.env"})

//Importação de modulos
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes.js')

const server = express()

server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())
server.use("/labschool", routes)
server.use(cors())

server.get("/helloworld",(req,res) => res.send("Hello World!"))

// teste de conexao

server.listen(process.env.PORT,() => {
    console.log("Server run on " + `http://localhost:${process.env.PORT}`)
})




