function normalizar(frase) {
    const vocales = ['a','e','i','o','u'];
    const vocacent = ['á','é','í','ó','ú'];

    let normal = '';
    frase = frase.toLowerCase();

    for (let ind = 0; ind < frase.length; ind++) {
        let j = vocacent.indexOf(frase[ind]);

        if (j >= 0) {
            normal += vocales[j];
        } else {
            if (frase[ind].match(/[a-z0-9]/i)) {
                normal += frase[ind];
            }
        }
    }

    return normal;
}

// --------------------------------------------------------
// Función para contar frecuencia de caracteres
// --------------------------------------------------------
function cuentaCars(frase) {
    let lista = [];
    frase = normalizar(frase);

    for (let c = 0; c < frase.length; c++) {
        let ind = lista.findIndex(v => v.car === frase[c]);

        if (ind >= 0) {
            lista[ind].veces++;
        } else {
             lista.push({car: frase[c], veces: 1});
        }
    }

    // Orden alfabético
    lista.sort((a, b) => (a.car > b.car) ? 1 : -1);

    return lista;
}

// --------------------------------------------------------
// Evento para el botón
// --------------------------------------------------------
document.getElementById("btnContar").addEventListener("click", () => {
    const frase = document.getElementById("frase").value.trim();

    if (!frase) {
        document.getElementById("resultado").textContent = "Introduce una frase válida.";
        return;
    }
    const resultado = cuentaCars(frase);

    document.getElementById("resultado").textContent =
        resultado.map(obj => `car: '${obj.car}', veces: ${obj.veces}`).join("\n");
});