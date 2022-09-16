const express = require('express') // Importar biblioteca Express
const routes = express.Router() // Usar a função Router da biblioteca Express

//Primeira rota, que é a principal, apresentar a mensagem no html !
routes.get('/', function(req, res){
    res.send("Oi softex me notem, quero a bolsa !! :)")
})

//Segunda rota, que é posts, mostrar a mensagem no html.
routes.get('/posts', function(req, res){
    res.send("Página de Post")
})


// exportar a constante Routes para ser utilizada na aplicação principal, App.js
module.exports = routes