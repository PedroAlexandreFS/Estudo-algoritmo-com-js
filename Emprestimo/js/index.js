/*

Algoritmo "Emprestimo"

Var
valorE, Qparcelas,juros, valorP : real



Inicio

 Escreva("qual o valor do seu Emprestimo: ")
 leia(valorE)
 
 juros <- (valorE * 20) / 100
 valorE <- valorE + juros
 Escreval("valor do emprestimo a pagar vai ficar: ", valorE, " com o juros de 20%")
 Escreva("quantidades de parcelas a ser pagar: ")
 leia(Qparcelas)
 valorP <- valorE/ Qparcelas
 Escreva("valor da parcelar será de ",Qparcelas,"x de: ",valorP)
 

Fimalgoritmo
*/

//escrevendo a pergunta
document.querySelector("#texto1").innerHTML = "Qual o Valor Do Emprestimo";

//pegando a caixa do input
let inputCaixa = document.querySelector("#inputTexto");

//botao do calcular emprestimo
let btnCalcular = document.querySelector("#btn-emprestimo");

//evento click e a função do que vai acontecerquando ativado
btnCalcular.addEventListener("click", function () {

    //pegando o valor do input
    let inputTexto = Number(inputCaixa.value);

    //definindo o juros
    let juros = (inputTexto * 20) / 100;

    //adcionandos o juros no valor
    inputTexto += juros;

    //mostrando o valor com juros para o usuario
    document.querySelector("#texto2").innerHTML = "valor do emprestimo a pagar vai ficar: R$" + inputTexto + " com o juros de 20%";

    //perguntando a quantidade de parcelas 
    document.querySelector("#texto3").innerHTML = " Em quantas parcelas: R$" + inputTexto.toFixed(2);
    //amazenando a parcela
    let parcelas = document.querySelector("#parcelas");
    //botão para confirmar a parcela
    let btnConfimar = document.querySelector("#btn-confirmar");
    //evento click para confimar o parcelamento
    btnConfimar.addEventListener('click', function () {
        //pegando o valor da parcela
        let qtParcelas = parcelas.value;
        //dividindo o valor pela quantidade de parcelas
        let valorParcelado = inputTexto / qtParcelas;
        //mostrando o valor da parcela
        document.querySelector("#texto4").innerHTML = "O valor parcelado ficou: R$" + valorParcelado.toFixed(2);

    })
})





