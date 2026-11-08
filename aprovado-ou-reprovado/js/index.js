/*Algoritmo "Aprovado ou reprovado"

Var
   N1, N2, M : real


Inicio
   Escreva("digite a primeira nota: ")
   leia(N1)
   Escreva("digite a segunda nota: " )
   leia(N2)
   M <- (n1 + n2) / 2
   Escreval("Sua média é: ",M)
   se (M >= 7) entao
      Escreva("Aprovado")
   senao
      se (M >= 5) e (M < 7) entao
         EScreva("Recuperação")
      senao
         Escreva("Reprovado")
      fimse
   fimse



Fimalgoritmo

*/

"use strict";

//variaveis

let pergunta = document.querySelector('#textoNota');
let caixaInput = document.querySelector('#valorNota');

let nota1;
let nota2;
let M;

let controle = 1;
let botao = document.querySelector('#btn-confirmar');

//Escrevendo a pergunta;
pergunta.innerHTML = `Qual a primeira nota? `

//adicionando o evento click no botao
botao.addEventListener('click', function () {
   if (controle < 2) {
      //quardando o primeiro valor
      nota1 = Number(caixaInput.value);

      //limpando o input
      caixaInput.value = "";

      //escrevendo outra pergunta
      pergunta.innerHTML = `qual a segunda nota? `;

      //aumentando a variavel de controle para avançar para segunda pergunta
      controle++;

   } else {

      //quardando o valor da segunda nota
      nota2 = Number(caixaInput.value);

      //calculando a mediadas notas
      M = (nota1 + nota2) / 2;


      //decidindo se foi aprovado ou não
      if (M >= 7) {

         //Escrevendo a media do aluno
         document.querySelector('#resposta').innerHTML = `Sua Média foi ${M.toFixed(1)} você foi Aprovado.`;

      } else {
         //Escrevendo a media do aluno
         document.querySelector('#resposta').innerHTML = `Sua Média foi ${M.toFixed(1)} você foi Reprovado.`;
      }
   }

})