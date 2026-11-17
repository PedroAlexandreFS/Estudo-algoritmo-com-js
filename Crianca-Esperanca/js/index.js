/*Algoritmo "criançaEsperança"

Var
   D, valor:Inteiro

Inicio

   Escreval("--------------------------")
   Escreval("    Criança Esperança     ")
   Escreval("--------------------------")
   Escreval(" Muito obrigado por ajudar ")
   Escreval("[1] para doar 10$")
   Escreval("[2] para doar 25$")
   Escreval("[3] para doar 50$")
   Escreval("[4] para doar outros valores")
   Escreval("[5] para cancelar")
   leia(D)
   Escolha D
   caso 1
      valor <- 10
   caso 2
      valor <- 25
   caso 3
      valor <- 50
   caso 4
      Escreva("insirar o valor para doação: ")
      leia(valor)
   caso 5
      valor <- 0
   fimescolha
   Escreval(" ----------------------------")
   Escreval("Seu valor da doação é: ",valor)




Fimalgoritmo
*/

"use strict"

//objeto com os valores das opções do select
const doacao = {
   "1": "10$",
   "2": "25$",
   "3": "50$",
   "4": "outros valores",
   "5": "cancelar"

};

//variaveis
const resultado = document.querySelector("#resultado");
const form = document.querySelector("#form");
const escolhar = document.querySelector('#doar');

//Adicionado o evento submit para o formulario
form.addEventListener('submit', function (e) {

   //impedindo a pagina recarregar apos o envio do formulario
   e.preventDefault();

   //variaveis valor do select
   const valorscolhido = escolhar.value;

   //atribuindo o valor do select para o objeto
   const valordoacao = doacao[valorscolhido];

   //variavel para verificar se o input existe
   const inputExiste = document.querySelector('#inputExiste')


   // se o valor escolhido for igual a "4 corresponde ao valor do objeto



   if (valorscolhido === "4") {

      // entao ele ira conferir se inputExiste se ele nao existir,
      if (!inputExiste) {
         // ele irá cria um input adcionando" tipo,id e placeholder.
         const novoInput = document.createElement("input");
         novoInput.type = 'number';
         novoInput.id = 'inputExiste';
         novoInput.placeholder = 'Digite o valor';

         //e fazendo o resultado avisando para digita o valor.
         resultado.textContent = `Digite o valor desejado :`;
         //adcionando um filho no elemento do resultado
         resultado.appendChild(novoInput);
         //quando o input aparecer ficar em foco
         novoInput.focus();
      } else {
         //caso o input ja exista entao pegar o valor
         const valorDigitado = inputExiste.value;
         //conferindo se o valor digitado tem alguma coisa ou se o usuario digitou numero negativo
         if (valorDigitado === "" || valorDigitado < 0) {
            alert("Por favor, digite um valor válido");

         } else {
            //caso o valor digitado seja validoele escreverar ovalor doado
            resultado.textContent = `o valor doado foi  ${valorDigitado}`;
         }

      }
      //casoo usuario canceler a operação aparecerar doação cancelada
      //senao aparecerar o valor doado
   } else if (valorscolhido === "5") {
      resultado.textContent = `Doação Cancelada`
   } else {
      resultado.textContent = `o valor doado foi ${valordoacao}`;
   }


});

