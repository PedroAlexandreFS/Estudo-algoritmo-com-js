/*Algoritmo "convesor_f_c"

Var

   far,cel: real


Inicio
   Escreva("qual é a temperatura aqui? ")
   leia(far)
   cel <- (far - 32) / 1.8
   Escreva("Em celsius é: ", cel:4:1)

Fimalgoritmo
*/


//variavel de celsius
let cel = 0;
//variavel de fahrenheit
let inputFar = document.querySelector("#textoinput");

//perguntando a temperatura
document.querySelector("#texto").innerHTML = "Qual é a temperatura aqui?";

//variavel do far = o valor do texto input

let btn = document.querySelector("#btn-resultado");
btn.addEventListener("click", function () {

   let far = Number(inputFar.value);
   cel = (far - 32) / 1.8;
   document.querySelector("#resultado").innerHTML = cel.toFixed(1) + "°c";


})


