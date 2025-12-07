//escribe un programa que muestre por consola o alerta los numeros del 1 al 100, sutituyalos segun los siguientes puntos
// 1- los multiplos de 3 por la parabra sizz
//  2- los multiplos de 5 con la palabra buzz 
// 3- los multiplos de 3 y 5 con la palabra fizz buzz

function fizzbuzz (numero){

if (numero >0 & numero < 100){

if (numero % 5 === 0) {
alert ("buzz");

console.log();

}

if (numero % 3 === 0){

    alert("fizz");
    console.log();
}
if (numero % 3 === 0 & numero % 5 === 0 ){

alert ("fizzbuzz");
console.log();

}

}

}

let numero = parseInt(prompt("ingrese un numero del 1 al 100"))
fizzbuzz(numero);