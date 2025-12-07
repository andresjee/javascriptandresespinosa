   
   function mcm(a, b) {
    let mul = Math.max(a, b); // comenzamos con el mayor
    let inc = mul;  
   
   while (mul % a !== 0 || mul % b !== 0) {
        mul += inc;           // vamos probando múltiplos del mayor
    }

    return mul;
}

// Evento del botón para calcular el mcm
document.getElementById("btnCalcular").addEventListener("click", () => {
    const a = parseInt(document.getElementById("numA").value);
    const b = parseInt(document.getElementById("numB").value);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        document.getElementById("resultado").textContent =
            "Por favor, ingresa dos números enteros positivos.";
        return;
    }

    const resultado = mcm(a, b);
    document.getElementById("resultado").textContent = resultado;
});