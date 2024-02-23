//Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
let lista = ['hola', 'adios', 'hola', 'adios', 'hola', 'buenos dias', 'cuantas noches', 'devlyn', 'devlyn', 'devlyn'];
function cadenaMasFrecuente(arreglo){
    let count={};
    for(let i=0;i<arreglo.length;i++){
        if(count[arreglo[i]]){
            count[arreglo[i]]++;
        }else{
            count[arreglo[i]]=1;
        }
    }
    let max=0;
    let cadena;
    for(let key in count){
        if(count[key]>max){
            max=count[key];
            cadena=key;
        }
    }
    return cadena;
}
console.log(cadenaMasFrecuente(lista));