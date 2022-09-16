// A função mensagem só retorna uma frase.
function Mensagem() {
    return "Softex me contratem !!!"
  }
// Chamando a função mensagem 
  console.log(Mensagem())
//Função soma recebe dois parâmetros e faz a soma dos mesmos.  
function soma(num1, num2) {
    return num1 + num2
}
//Retorno da soma dos dois valores inseridos na função  
console.log(soma(14, 50));
// Trabalhando com o conceito de arrow functions, quando a função não tem nome, podemos usar o arrow, atribuimos uma função a constante celsius, para converter temperatura.  
const celsius = (a) => {
    return a * 32;
};
// Mostra a conversão de Celsius em Fahrenheit  
console.log("A temperatura em Fahrenheit é: " + celsius(25) + " ºF");
  