function Buscar(vocalB){
 let vocales=["a","e","i","o","u"]
for(let i=0; i< vocales.length; i++ ){

    if (vocales[i] == vocalB){
    alert("vocal encontrada")
    } else {

    alert("no es una vocal lavocal" )

    }
}
}
let b = prompt ("ingrese la vocal a buscar");
Buscar (b);


