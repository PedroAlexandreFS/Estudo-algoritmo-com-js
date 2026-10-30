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


"use strict";

//perguntando qual a altura
let pergunta = document.querySelector('#Altura');
pergunta.innerHTML = "Qual a sua altura? (M)"

//pegando a caixa do input altura
let caixaInput = document.querySelector('#inputAltura');


//variavel da altura
let valorAltura;

//variavelde peso
let valorPeso;

//pegando o botão
let botaoImc = document.querySelector('#btn-imc');

//variavel de controle
let controle = 1;

//variavel do imc
let imc = 0;

botaoImc.addEventListener('click', function () {
   if (controle < 2) {
      //quardando o valor da altura
      valorAltura = Number(caixaInput.value);

      //escrevendo em centimetros
      if (valorAltura > 3) {
         valorAltura = valorAltura / 100;
      }

      //deixando o input em branco
      caixaInput.value = "";

      //mudando a pergunta
      pergunta.innerHTML = "Qual a seu peso? (kg)"

      //avançando uma etapa
      controle++

   } else {
      //quardando o valor do peso
      valorPeso = Number(caixaInput.value);

      // calculando o valor
      imc = valorPeso / (valorAltura** 2);

      //variavel da resposta
      let respostas = document.querySelector('#resultado');

      //condição para informar se o imc está normal
      if (imc < 17) {
         respostas.innerHTML = "seu imc é: " + imc.toFixed(2) + "  Está muito baixo peso!!"

      } else if (imc >= 17 && imc < 18.5) {
         respostas.innerHTML = "seu imc é: " + imc.toFixed(2) + "  Está baixo do peso!"
      } else if (imc >= 18.5 && imc < 25) {
         respostas.innerHTML = "seu imc é: " + imc.toFixed(2) + "  Está no peso ideal"
      } else if (imc >= 25 && imc < 30) {
         respostas.innerHTML = "seu imc é: " + imc.toFixed(2) + "  Sobrepeso!"

      } else if (imc >= 30 && imc < 35) {
         respostas.innerHTML = "seu imc é: " + imc.toFixed(2) + "  obesidade!!"
      } else if (imc >= 35 && imc < 40) {
         respostas.innerHTML = "seu imc é: " + imc.toFixed(2) + "  obesidade servera!!!"

      } else {
         respostas.innerHTML = "seu imc é: " + imc.toFixed(2) + " obesidade morbida!!!!"
      }


   }





})