function resta (num1 , num2)
{

let resultado = num1 - num2;
alert ("RESULTADO RESTA "+ resultado);
console.log(resultado);

}
function suma (num1,num2)

{

    let resultado = num1 + num2
    alert ("RESULTADO SUMA " + resultado);
    console.log(resultado);
}

function multi (num1,num2){

let resultado = num1 * num2
alert("RESULTADO MULTIPLICASION " + resultado);
console.log(resultado);


}

function division (num1,num2){

let resultado = num1 / num2
alert ("RESULTADO DIVISION " + resultado);
console.log(resultado);

}

function residuo (num1,num2){

let resultado = num1 % num2
alert("RESULTADO RESIDUO"+resultado);
console.log(resultado);

}

let num1 = parseInt (prompt("digite numero 1 "));
let num2 = parseInt(prompt("digite numero 2 "));

resta (num1,num2);
suma (num1,num2);
multi (num1,num2);
division(num1,num2);
residuo(num1,num2);