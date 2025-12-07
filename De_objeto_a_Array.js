function toArray(obj) {
    let res = [];

    for (let item in obj) {
        res.push([item, obj[item]]);
    }

    return res;
}

// --------------------------------------------------------
// Ejemplo de uso con botón
// --------------------------------------------------------
document.getElementById("btnConvertir").addEventListener("click", () => {
    let objeto = { pan: 23, vino: 10, aceite: 12 };

    let precios = toArray(objeto);

    document.getElementById("resultado").textContent = JSON.stringify(precios, null, 2);
});