/* Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0] */
const arre = [1, 0, 1, 1, 0, 0];
function quitaDuplicados(arreglo){
    let _arr=[];
    for(let i=0;i<arreglo.length;i++){
        if(_arr.indexOf(arreglo[i]) === -1) {
            _arr.push(arreglo[i]);
        }
    }
    return _arr;
}

console.log(quitaDuplicados(arre));