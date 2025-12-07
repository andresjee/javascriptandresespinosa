
function frutas(){
let frutas = ["manzana", "banana"];
let nuevaLongitud = frutas.unshift("naranja");

console.log(frutas); // Salida: ["naranja", "manzana", "banana"]
console.log(nuevaLongitud); // Salida: 3
}
frutas()


let frutas = ["Manzana", "Plátano", "Naranja"];
let ultimaFruta = frutas.pop(); // últimaFruta ahora es "Naranja"

console.log(frutas); // Salida: ["Manzana", "Plátano"]
console.log(ultimaFruta); // Salida: "Naranja"
