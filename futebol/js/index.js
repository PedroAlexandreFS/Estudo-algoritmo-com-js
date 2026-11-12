/*Algoritmo "Futebol"

Var

   gol1,gol2, dif : inteiro
   time1, time2 : caractere


Inicio
   Escreva("qual time um? ")
   leia(Time1)
   Escreva("qual time dois? ")
   leia(Time2)
   EScreval("----------------------------")
   Escreval("O jogo vai ser ",Time1," X ",Time2)
   Escreva("quantos gols o ",Time1," vai fazer? ")
   leia(gol1)
   Escreva("quantos gols o ",Time2," vai fazer? ")
   leia(gol2)
   dif <- abs(gol1 - gol2)
      Escolha dif
              caso 1,2
                   Escreva("Foi um jogo normal")
              caso 3,4
                   Escreva("Foi um jogaço")
              caso,5,6
                   Escreva("Foi um jogo fanstatico")
              outrocaso
                   Escreva("Foi um jogo surreal")
              fimescolha



Fimalgoritmo

*/

"use strict"

//variaveis

let pergunta = document.querySelector('#time1');
let caixaInput = document.querySelector('#time1Valor');
let botao = document.querySelector('#btn-continuar');
let resultado = document.querySelector('#times');

let controle = 1;

let time1;
let time2;

let gol1;
let gol2;

let dif;

//Fazendo a pergunta
pergunta.innerHTML = `Qual o primeiro time? `;

//adcionando o evento click no botao
botao.addEventListener('click', function () {
     if (controle == 1) {

          //quardando o valor na variavel
          time1 = caixaInput.value;

          //deixando o input em branco
          caixaInput.value = "";

          //fazendo outra pergunta
          pergunta.innerHTML = `Qual o segundo time`;

          //aumentando a variavel de controle
          controle++;
     } else if (controle == 2) {

          //quardando o segundo valor
          time2 = caixaInput.value;

          //lipando o input
          caixaInput.value = "";


          //fazendo a pergunta
          pergunta.innerHTML = `quanto o ${time1} marcou? `;

          //mostrando os times que vão jogar
          resultado.innerHTML = `O jogo vai ser ${time1} X ${time2} `;

          controle++;


     } else if (controle == 3) {

          //quardando o valor dos gols
          gol1 = caixaInput.value;

          //deixando em branco o input
          caixaInput.value = "";

          //mudando a pergunta
          pergunta.innerHTML = `quanto o ${time2} marcou?`;

          controle++;
     } else {

          let gols = document.querySelector('#gols');

          //quardando o valor do segundo time marcou
          gol2 = caixaInput.value;

          //calculando a diferença e colocando abs para o resultado sempre ser positivo
          dif = Math.abs(gol1 - gol2);

          switch (dif) {
               case 1:
               case 2:
                    gols.innerHTML = `O jogo foi ${time1} que marcou ${gol1} e ${time2} que marcou ${gol2} foi um jogo Normal`;

                    break;

               case 3:
               case 4:
                    gols.innerHTML = `O jogo foi ${time1} que marcou ${gol1} e ${time2} que marcou ${gol2} Foi um jogaço`;

                    break;
               case 5:
               case 6:
                    gols.innerHTML = `O jogo foi ${time1} que marcou ${gol1} e ${time2} que marcou ${gol2} Foi um jogo fanstatico`;

                    break;

               default:
                    gols.innerHTML = `O jogo foi ${time1} que marcou ${gol1} e ${time2} que marcou ${gol2} Foi um jogo surreal `;

                    break;
          }

     }
})

