

let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
let estatura = parseFloat(prompt("Ingresa tu estatura en metros:"));





  let imc = peso / (estatura **2);
  let diagnostico = "";

  if (imc < 18.5) {
    diagnostico = "Bajo peso";
  } else if (imc < 25) {
    diagnostico = "Normal";
  } else if (imc < 30) {
    diagnostico = "Sobrepeso";
  } else {
    diagnostico = "Obesidad";
  }


  alert("su diagnostico es: " + diagnostico);


  