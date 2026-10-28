/*
Algoritmo "IMC com condicional"

Var
   A, P, IMC : real


Inicio
   Escreva("qual a sua altura (M)? ")
   leia(A)
   Escreva("qual o seu peso (Kg)?" )
   leia(P)
   IMC <- p / (A ^ 2)
   Escreval("O imc é: ", IMC:5:2)
   se (IMC < 17) entao
      Escreva("Muito abaixo do peso")
   senao
      se (IMC >= 17) e (IMC < 18.5) entao
         Escreva("Abaixo do peso")
      senao
         se (IMC >= 18.5) e (IMC < 25) entao
            Escreva("peso ideal")
         senao
            se (IMC >= 25) e (IMC < 30) entao
               Escreva("sobrepeso")
            senao
               se (IMC >= 30) e (IMC < 35) entao
                  Escreva("obesidade")
               senao
                  se (IMC >= 35) e (IMC < 40) entao
                     Escreva("obesidade servera")
                  senao
                     Escreval("obesidade morbida")
                  fimse
               fimse
            fimse
         fimse
      fimse
   fimse
*/

//perguntando qual a altura
document.querySelector('#Altura').innerHTML = "Qual a sua altura? (M)"

//pegando a caixa do input altura
let caixaInputAltura = document.querySelector('#inputAltura');

//perguntando qual o peso
document.querySelector('#peso').innerHTML = "Qual a seu peso? (kg)"

//pegando a caixa do input peso
let caixaInputPeso = document.querySelector('#inputPeso');

//pegando o botão
let botaoImc = document.querySelector('#btn-imc');
botaoImc.addEventListener('click', function () {
    let altura = Number(caixaInputAltura.value);
    let peso = Number(caixaInputPeso.value);

   let imc = peso / ((altura / 100 ) ** 2);
   document.querySelector('#resultado').innerHTML = "O imc é: " + imc.toFixed(2);
    
})