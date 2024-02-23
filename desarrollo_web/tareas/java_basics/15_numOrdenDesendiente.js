//Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
let lista = [1, 5, 3, 2, 4, 6, 7, 84, 9, 100, 11, 22, 33, 16, 45];
function ordenDescendiente(numeros){
    return numeros.sort((a,b)=>b-a);
}
console.log(ordenDescendiente(lista)); 
