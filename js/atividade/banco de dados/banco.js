const Sequelize = require('sequelize') // Importar o pacote Sequelize, para fazer comunicação com o Banco de Dados Mysql
//Em seguida criamos a variável sequelize e criamos uma nova conexão, apontado a Database(Base de Dados), Usuário do banco, senha, o local onde se encontra, que é no computador local (localhost) e o tipo de banco de dados, neste caso Mysql.
const sequelize = new Sequelize('usuarios', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})
//Em seguida utilizamos o método Authenticate para fazer a autenticação e usamos o then passando uma função que mostre a mensagem de conectado caso tudo ocorra perfeitamente.
sequelize.authenticate().then(function(){
    console.log("Conectado ao banco de dados com sucesso !!!")
}).catch(function(erro){
    console.log("Falha ao se conectar ao banco de dados")
})
//Caso não consiga se conectar ao banco de dados, tratamos o erro com a função catch para mostrar a mensagem de erro.