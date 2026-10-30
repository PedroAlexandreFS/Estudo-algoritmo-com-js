/*algoritmo "IDADE"
var

   Anoat, AnoN, Idade : inteiro

inicio
   Escreva("Em que ano nasceu? ")
   leia(AnoN)
   Escreva("Em que ano estamos? ")
   leia(Anoat)
   Idade <- Anoat - AnoN
   Escreval("Sua idade é : ",Idade)
   se (Idade >= 18) entao
      Escreva("você está na maioridade.")
   senao
      Escreva("você é menor de idade.")
   fimse




fimalgoritmo
*/


//peguntando o ano de nascimento
let pergunta = document.querySelector('#AnoNascimento');
pergunta.innerHTML = "Em que ano você nasceu? ";

//pegando a caixa do input do nascimento
let inputCaixaNasci = document.querySelector('#inputAnoNascimento');

//variavel para quarda o primeiro valor
let anoNascimento;

//variavel do segundo valor
let anoAtual;

//pegando o botão
let botaoResultado = document.querySelector('#btn-confirmar');

//variavel de controle
let controle = 1;

//iniciando o evento click
botaoResultado.addEventListener('click', function () {
    //condicional para saber se já pode avança paa etapa dois
    if (controle < 2) {
        //quardando o valor ano de nascimento 
        anoNascimento = inputCaixaNasci.value;

        //deixando o input em branco
        inputCaixaNasci.value = "";

        //mudando a pergunta
        pergunta.innerHTML = "Qual o ano atual? ";

        //avançando para a etapa dois
        controle++


    } else {

        //quardando o valor ano atual
        anoAtual = inputCaixaNasci.value;

        //calculando a idade
        idade = anoAtual - anoNascimento;

        //mostrando o resultado
        document.querySelector('#resultado').innerHTML = "você tem: " + idade + " Anos";

    };






})