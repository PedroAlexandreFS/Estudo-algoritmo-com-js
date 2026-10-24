/*algoritmo "Reais_para_dolar"
var
   reais, dolar : real

inicio
   Escreva("Quantos reais eu tenho? ")
   leia(reais)
   dolar <- reais / 5
   Escreva("isso é que tenho em dolar: ",dolar)


fimalgoritmo
*/

//escrevendo "quantos reais eu tenho"
document.querySelector('#texto').innerHTML = "Quantos reais eu tenho? "
//pegando a caixa do input
let inputCaixaValor = document.querySelector('#inputValor');
//pegando o botao
let botaoCalcular = document.querySelector('#btn-Calcular');
//adcionando o evento click
botaoCalcular.addEventListener('click', function () {
   //pegando o valor do input
   let valorReais = inputCaixaValor.value;
   //calculando o resultado
   dolar = valorReais / 5.20;
   //escrevendo o resultado na tela
   document.querySelector('#resultado').innerHTML = "Isso é que tenho em dolar: $" + dolar.toFixed(2)
})