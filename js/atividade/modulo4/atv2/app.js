// Aplicação principal

const express = require('express') // Importar biblioteca Express
const app = express() // Atribuir as funcionalidades da biblioteca Express a Constante App
const routes = require("./routes/routes") // Importar as rotas do arquivo routes, da pasta routes.

app.use('/', routes) // Usar a rota / inicial
app.use('/posts', routes) // Usar a rota Posts


//Selecionar a porta a ser utilizada pelo servidor, Express, se tudo ocorrer bem, mostrar no console a mensagem que o servidor esta rodando.
app.listen(8081, function(){
    console.log("Servidor rodando tranquilo !")
})