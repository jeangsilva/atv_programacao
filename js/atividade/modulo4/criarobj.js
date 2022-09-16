// Criação do objeto Carro
let carro = new Object()
//Atribuição das propriedades Cor, Modelo e Ano.
carro.cor = "Azul"
carro.modelo = "Ferrari"
carro.ano = 2022
//Impressão para ver se realmente carro é um objeto
console.log(typeof(carro))

//Função criada, onde ao receber o objeto Carro, passa pelo laço de repetição, percorrendo as propriedades de carro e mostrando os valores.
function mostrarCarro(caracteristica){
    for(let i in caracteristica){
        console.log(i + " = " + caracteristica[i])
    }
}
//Uso da função mostrarCarro, passando o objeto carro como parâmetro
mostrarCarro(carro)
//Criação do Array, com 3 itens
let lista = ['feijão', 'arroz', 'macarrão']
//Criação da função mostarLista, onde a mesma percorre através do For, mostrando os valores da Lista.
function mostrarLista(lista){
    for(let i in lista){
        console.log(lista[i])
    }
}
//Passar o array Lista, como parâmetro na função mostrarLista
mostrarLista(lista)