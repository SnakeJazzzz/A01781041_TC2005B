/*Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.*/
let lista = ['hola michael', 'adios', 'buenos dias', 'buenas noches', 'hasta luego'];
function cadenaMasCorta(arreglo){
    let arr=[];
    for (let i=0;i<arreglo.length;i++){
        arr.push(arreglo[i].length);
    }
    return Math.min(...arr);
}
console.log(cadenaMasCorta(lista));