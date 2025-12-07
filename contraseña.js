// Genera un número entero aleatorio
function intRandom(min, max) {
    let rnd = Math.random();
    return Math.floor(rnd * (max - min + 1)) + min;
}

// Listas de caracteres
const caracteres = [
    // Minúsculas
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    // Mayúsculas
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    // Dígitos
    ["0","1","2","3","4","5","6","7","8","9"],
    // Caracteres especiales
    ["!","@","#","$","%","&","*","?","+","=","-","/"]
];

// Función para generar password
function generarPassword() {

    // Longitud entre 8 y 15
    let largo = intRandom(8, 15);

    // Crear array vacío
    let pass = new Array(largo);
    pass.fill("");
    // Llenar con caracteres aleatorios
    pass.forEach((v, i, p) => {
        let lista = caracteres[intRandom(0, caracteres.length - 1)];
        let indice = intRandom(0, lista.length - 1);
        p[i] = lista[indice];
    });

    // Convertir en cadena
    let password = pass.join("");

    // Mostrar en pantalla
    document.getElementById("resultado").textContent = password;
}

// Evento para el botón
document.getElementById("btnGenerar").addEventListener("click", generarPassword);