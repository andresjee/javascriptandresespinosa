function anagrama(){

let respuesta=[]
let ana = ["a","m","o","r"]
for (let i = 3; i >= 0 ; i --){
for (let j = 0; j<= 3 ; i ++){
respuesta[j] = ana[i]
i=i-1
}
}
console.log(respuesta)
}
anagrama();