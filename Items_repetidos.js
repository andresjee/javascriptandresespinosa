// La función recibe una lista de números positivos
// Devuelve otra lista con los números que están repetidos
function repetidos(lista) {

    // Ordeno la lista (función callback para números)
    let ordenada = [...lista].sort(function (a, b) { return a - b });

    let repes = [];
    let item = 0;
    let existe;

    // Recorro la lista
    while (item < ordenada.length) {

        existe = false;

        // Comprobar que el elemento actual es igual al siguiente
        if (ordenada[item] === ordenada[item + 1]) {
            existe = true;
        }

        // Avanzar para saltar todos los repetidos
        while (ordenada[item] === ordenada[item + 1]) {
             item++;
        }

        // Si existe repetición, guardar el número repetido
        if (existe) {
            repes.push(ordenada[item]);
        }

        item++;
    }

    return repes;
}

// Evento del botón
document.getElementById("btnBuscar").addEventListener("click", () => {

    // Obtener texto del input
    let texto = document.getElementById("listaNumeros").value;

    // Convertir a array de números
    let lista = texto.split(",").map(num => parseInt(num.trim())).filter(n => !isNaN(n) && n > 0);

    // Si no hay números válidos
    if (lista.length === 0) {
        document.getElementById("resultado").textContent = "Introduce números válidos.";
        return;
    }

    // Obtener repetidos
    let resultado = repetidos(lista);

    document.getElementById("resultado").textContent =
        resultado.length > 0 ? resultado.join(", ") : "No hay números repetidos.";
});