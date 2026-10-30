/*Algoritmo "par ou impar"

Var

   N:inteiro


Inicio

   Escreva("Escolha um número: ")
   leia(N)
   se (N % 2 = 0) entao
      Escreva("Número é par")
   senao
      Escreva("Número é impar")
   fimse


Fimalgoritmo
*/

//colocando o texto na tela
document.querySelector('#texto').innerHTML = "Escolha um número: ";
//pegando a caixa do input
let caixaInput = document.querySelector('#caixaInput');
//pegando o botão
let btnInput = document.querySelector('#btn-resultado');
//Adicionando o evento click
btnInput.addEventListener('click', function () {
    //pegando o valordo input
    let valor = Number(caixaInput.value);
    //colocando a condição para saber se o número é par ou impar
    if (valor % 2 === 0 ) {
        document.querySelector('#texto2').innerHTML = 'O número é par'

    } else {
        document.querySelector('#texto2').innerHTML  ='O número é impar'
    }
})