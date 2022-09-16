const Sequelize = require('sequelize')
const sequelize = new Sequelize('usuarios', 'root', 'root2', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado ao banco de dados com sucesso !!!")
}).catch(function(erro){
    console.log("Falha ao se conectar ao banco de dados")
})