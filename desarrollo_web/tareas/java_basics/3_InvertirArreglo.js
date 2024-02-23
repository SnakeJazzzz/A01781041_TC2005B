/*Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.*/

//Escribe una función que invierta un arreglo de números y regrese un nuevo arreglo con el resultado
const   arr = [1, 2, 3, 4, 5, 6, 7];

function arrInvertido(arreglo){
    let _invertido=[];
    
    for (let i=arreglo.length -1;i>=0;i--){
        _invertido.push(arreglo[i]);      
    }
    return _invertido;

}
console.log(arrInvertido(arr));

//funcion que modifique el mismo arreglo que se pasa como argumento.*/
function swapElements(arreglo2){
    let end= arreglo2.length-1;
    let start = 0;

    while(start < end){
       let temp=arreglo2[start];
       arreglo2[start]=arreglo2[end];
       arreglo2[end]=temp;

       start++;
       end--;

      
    }
    return arreglo2;
}

console.log(swapElements(arr));