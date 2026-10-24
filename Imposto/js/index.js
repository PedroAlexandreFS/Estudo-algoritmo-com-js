/*Algoritmo "imposto"

Var
imposto,valor:real


Inicio
Escreva("valor dos itens: ")
leia(valor)
imposto <- valor + (valor * 60) / 100
Escreva("Seus itens com imposto: ", imposto)

Fimalgoritmo

*/

//escrevendo "valor do itens na tela"
document.querySelector('#textoItens').innerHTML = "Valor dos itens:";
//pegando a caixa do input
let inputCaixaValor = document.querySelector('#inputValor');

//pegando o botão de calcular
let botaoCalcular = document.querySelector('#btn-calcular');

//adcionando o evento click
botaoCalcular.addEventListener('click', function () {

    //pegando o valor do input
    let inputValor = Number(inputCaixaValor.value);

    //Calculando o imposto
    imposto = inputValor + (inputValor * 60) / 100;

    //Escrevendo resultado na tela
    document.querySelector('#resultado').innerHTML = "o valor é de: " + imposto + " com imposto de 60%.";
})