
function agregarPrompt(){
  let notas = [];
  //agregar push notas [posicion]
  for (let i=0 ; i<=4 ; i = i+ 1){
      let datos = parseFloat(prompt("Ingresa sus notas ") + i );
      notas[i]=datos
       
    }

    alert("las notas ingresadas son: " + notas);
}

agregarPrompt();
    

















