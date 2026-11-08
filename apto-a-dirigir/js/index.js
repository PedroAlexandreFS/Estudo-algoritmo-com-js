/*Algoritmo "apto � dirigir"

Var
   Nnasc, nat, Idade: real

Inicio
   Escreva("Em que ano nasceu? ")
   leia(Nnasc)
   Escreva("qual o ano atual? ")
   leia(Nat)
   idade <- Nat - Nnasc
   Escreval("sua idade � ",Idade)
   se (Idade >= 18) entao
      Escreva("voc� est� apto pra tirar a carteira")
   senao
      Escreva("voc� n�o est� apto para dirigir")
   fimse


Fimalgoritmo
*/

"use strict";

//fazendo a pergunta
let pergunta = document.querySelector('#pergunta');
pergunta.innerHTML = `Em que ano você Nasceu?`

//pegando  a caixa
let caixaInput = document.querySelector('#resposta');

//pegando o botao
let botao = document.querySelector('#btn-resultado');

//variavelde controle
let controle = 1;

//variaveis de Resposta
let AnoNasceu;
let AnoAtual;

//adcionando o evento click
botao.addEventListener('click', function () {
    if (controle < 2) {

        //quardando o valordo ano nascimento
        AnoNasceu = Number(caixaInput.value);

        //Deixando em branco
        caixaInput.value = "";

        //mudando a pergunta
        pergunta.innerHTML = `Qual o ano Atual?`

        //aumentando o valor do controle para avançar
        controle++
    } else {

        //quardando o valor do ano atual
        AnoAtual = Number(caixaInput.value);

        //calculando a idade
        let resposta = AnoAtual - AnoNasceu;

        //mostrando a idade
        if (resposta >= 18) {
            document.querySelector('#resultado').innerHTML = `sua idade é ${resposta}, você está apto para dirigir. `;
        } else {
            document.querySelector('#resultado').innerHTML = `sua idade é ${resposta}, você não está apto para dirigir.`;
        }

    }

})