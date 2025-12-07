 let edad = parseInt(prompt("digite la edad"));
    if ((edad > 0) && (edad <= 12 )){
alert("infantil")
    }

   else if ((edad>= 13) && (edad <= 17)) {

alert ("adolecente")

    }

   else if (edad >= 18 && edad <=59){

        alert("adulto");
    }

    else if (edad >= 60 ) {
alert ("adulto mayor");

    }

    
    // operadorador ternario

    (edad>0 && edad >=12)?alert("infantil"):(edad >= 13 && edad <= 17) ? alert("adolecentes"):(edad >= 18)? alert ("adulto"):(edad >= 60 )? alert("adulto mayor"):alert("no es valido"); 