
  let num1 = parseFloat(prompt("Ingresa el primer número:"));
  let num2 = parseFloat(prompt("Ingresa el segundo número:"));
  let num3 = parseFloat(prompt("Ingresa el tercer número:"));

  console.log(num1)
  console.log(num2)
  console.log(num3)

  if (num1 > num2 && num1 > num3) {
    alert("El número mayor es: " + num1);
  } else if (num2 > num1 && num2 > num3) {
    alert("El número mayor es: " + num2);
  } else {
    alert("El número mayor es: " + num3);
  }
