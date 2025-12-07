function splitFrase1(frase, anchoMax) {
    let filas = [], pal = 0, ind = 0;

    let palabras = frase.split(' ');
    filas[0] = '';

    while (pal < palabras.length - 1) {

        filas[ind] += palabras[pal] + ' ';

        if (anchoMax - filas[ind].length < palabras[pal + 1].length) {
            filas[ind] = filas[ind].trim();
            ind++;
            filas[ind] = '';
        }

        pal++;
        }

    filas[ind] += palabras[pal];

    return filas;
}


// --------------------------------------------------------
// SOLUCIÓN 2: Usando reduce
// --------------------------------------------------------

function splitFrase2(frase, ancho) {
    let palabras = frase.split(' ');

    let cadena = palabras.reduce((pal, act) => {

        if (pal.length == 0) {
            pal[0] = act;
        } else {
            if (pal[pal.length - 1].length + act.length < ancho) {
                pal[pal.length - 1] += ' ' + act;
            } else {
                pal.push(act);
            }
        }

        return pal;

    }, []);

    return cadena;
}

// --------------------------------------------------------
// LÓGICA DEL BOTÓN
// --------------------------------------------------------
document.getElementById("btnProcesar").addEventListener("click", () => {

    let frase = document.getElementById("frase").value.trim();
    let ancho = parseInt(document.getElementById("ancho").value);

    if (!frase || isNaN(ancho) || ancho <= 0) {
        document.getElementById("resultado1").textContent = "Datos inválidos.";
        document.getElementById("resultado2").textContent = "";
        return;
    }

    let r1 = splitFrase1(frase, ancho);
    let r2 = splitFrase2(frase, ancho);

    document.getElementById("resultado1").textContent = JSON.stringify(r1);
    document.getElementById("resultado2").textContent = JSON.stringify(r2);

});

