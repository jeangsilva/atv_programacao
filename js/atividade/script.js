// Questão escolhida:

// 1º Pergunta

let prompt = require("prompt-sync")() // Incluir biblioteca Prompt Sync
let number = prompt("Digite um número: ") // Chamar a função Prompt e atribuir o valor inserido a variável Number

console.log("O número informado foi: " + number) // Imprimir no console a mensagem + o valor atribuido a variável Number

//--------------------------------------------------------------------------------------------------------------------------//

// Questão escolhida:

// 9º Pergunta

let temperatura = prompt("Digite a temperatura em Celsius: ") // Chamar a função Prompt e atribuir o valor inserido a variável Temperatura

let fahre = temperatura * 32 // Pega o valor obtido na variável temperatura e multiplica por 32, que é a conversão de Celsius para Fahrenheit, atribui o resultado a variável FAHRE

console.log(temperatura + " ºC" + " -Celsius / " + " Em Fahrenheit é: " + fahre + " ºF") // Mostrar no Console o valor em Celsius e o valor em Fahrenheit

//---------------------------------------------------------------------------------------------------------------------------//

//Questão escolhida:

// 11º Pergunta

//Criação da função Range
function range(start, end) {                              
    var ans = []; // Váriavel ANS, recebe uma lista vazia
    // Usar laço onde recebe o valor inicial que é o Start e compara se esse valor é menor ou igual o valor final, se for, ele incrementa +1 ao valor
    for (let i = start; i <= end; i++) {
        ans.push(i); // Adiciona o valor da vez a lista da váriavel ANS, repetindo várias vezes até a condição for atendida.
    }
    return ans; // retorna os valores da lista
}


for(i of range(1,50)){ // Percorre todos os valores do intervalo de 1 a 50.
    console.log(i) // Imprime os valores até a condição ser atendida.
}

