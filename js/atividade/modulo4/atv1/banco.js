// Objeto Banco criado com 4 propriedades.
let Banco = {
    conta: "71234",
    agencia: "Itaú",
    saldo: 500,
    
  }
 // Método/Função Saldo, onde exibe o valor da propriedade Saldo do objeto Banco 
  let saldo = () => {
    console.log("Saldo atual: " + Banco.saldo)
  }
// Método/Função Depositar, onde recebe um parâmetro, que no caso é o valor a ser acrescido no valor da propriedade saldo, do objeto Banco  
  let depositar = (dinheiro) => {
    return (Banco.saldo = Banco.saldo + dinheiro)
  }
// Método/Função Sacar, onde se passa o parâmetro, onde se retire o valor da propriedade saldo, do objeto Banco   
  let sacar = (dinheiro) => {
    return (Banco.saldo = Banco.saldo - dinheiro)
  }
// Método/Função Conta, onde exibe o valor da propriedade Conta do objeto Banco   
  let conta = () => {
    console.log("Número da conta: " + Banco.conta)
  }
  
  saldo() // Mostrar Saldo
  depositar(400) // Acrescentar 400 ao valor Saldo
  saldo() // Mostrar novo saldo
  sacar(250) // Retirar 250 ao valor Saldo
  saldo() // Mostrar novo saldo
  conta() // Mostrar número da conta
  