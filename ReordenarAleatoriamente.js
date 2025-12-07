let lista = [1, 5, 2, 4, 6, 7];

// Mostrar array original
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("original").textContent = lista.join(", ");
});

// Función para desordenar usando tu método
function desordenar() {
    let copia = [...lista];

    copia.sort((a, b) => Math.random() >= 0.5 ? -1 : 1);

    document.getElementById("desordenado").textContent = copia.join(", ");
}

// Evento del botón
document.getElementById("btnDesordenar").addEventListener("click", desordenar);




