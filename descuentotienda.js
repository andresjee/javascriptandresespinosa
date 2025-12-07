let descuento2=0;
let descuento4=0;

let compra = prompt("digitela valor de la compra");

console.log(compra);

if (compra>= 100 && compra < 200 ) {
    
    let descuento1 = (compra*10)/100;
    let descuento2 = compra - descuento1;
    

alert ("el descuento de la compra es " + descuento2);
}

if (compra >= 200 ){

    let descuento3 = (compra*20)/100;
    let descuento4 = compra - descuento2;
        alert ("el descuento es " + descuento4);

        
}


