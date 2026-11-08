/*Algoritmo "nota de A a F"

Var
   Nota: real


Inicio
   Escreva("qual foi sua primeira nota (0 a 1000)? ")
   leia(Nota)
   se (Nota <= 1000) e (Nota >= 900) entao
      EscrevaL("Sua nota foi A")
   senao
      se (Nota < 900) e (Nota >= 800) entao
         EscrevaL("Sua nota foi B")
      senao
         se (Nota < 800) e (Nota >=700) entao
            Escreval("Sua nota foi C")
         senao
            se (Nota < 700) e (Nota >= 600) entao
               EscrevaL("Sua nota foi D")
            senao
               se (Nota < 600) e (Nota >= 450) entao
                  Escreval("Sua nota foi E")
               senao
                  EScreval("Sua nota foi F")
               fimse
            fimse

         fimse
      fimse
   fimse


Fimalgoritmo
*/

"use strict";


//variaveis
let pergunta = document.querySelector('#texto');
let caixaInput = document.querySelector('#inputNota');
let botao = document.querySelector('#btn-confirmar');
let nota;
let NotaF = document.querySelector('#resposta');

//perguntando a nota
pergunta.innerHTML = `qual foi sua Nota? `

//adicionado o evento click no botão
botao.addEventListener('click', function () {
    //pegando o vlor da nota
    nota = caixaInput.value;

    //definindo a nota final
    if (nota >= 900) {
        NotaF.innerHTML = `Sua nota é ${nota} e foi A`;

    } else if (nota >= 800) {
        NotaF.innerHTML = `Sua nota é ${nota} e foi B`;

    } else if (nota >= 700) {
        NotaF.innerHTML = `Sua nota é ${nota} e foi c`;
    } else if (nota >= 600) {
        NotaF.innerHTML = `Sua nota é ${nota} e foi D`;
    } else if (nota >= 450) {
        NotaF.innerHTML = `Sua nota é ${nota} e foi E`;
    } else {
        NotaF.innerHTML = `Sua nota é ${nota} e foi F`;
    }

})
