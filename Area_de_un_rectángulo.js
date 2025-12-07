function distancia(ini, fin) {
    let difx = ini.x - fin.x;
    let dify = ini.y - fin.y;
    return Math.sqrt(difx * difx + dify * dify);
}

// --------------------------------------------------------
// Calcula el área de un rectángulo dadas sus 4 esquinas
// --------------------------------------------------------
function areaRect(p0, p1, p2, p3) {

    let dists = new Array(3);

    // Distancias desde p0 a los otros 3 puntos
    dists[0] = distancia(p0, p1);
     dists[1] = distancia(p0, p2);
    dists[2] = distancia(p0, p3);

    // La distancia mayor es la diagonal, la eliminamos
    let max = Math.max(...dists);
    let ind = dists.indexOf(max);
    dists.splice(ind, 1);

    // Lo que queda son base y altura
    let area = dists[0] * dists[1];

    return area;
}

// --------------------------------------------------------
// EJEMPLO DE USO (se ejecuta al hacer clic en el botón)
// --------------------------------------------------------
document.getElementById("btnCalcular").addEventListener("click", () => {

    let p0 = { x: 25, y: 40 };
    let p1 = { x: 10, y: 20 };
    let p2 = { x: 25, y: 20 };
    let p3 = { x: 10, y: 40 };

    let area = areaRect(p0, p1, p2, p3);

    document.getElementById("resultado").textContent = area;
});