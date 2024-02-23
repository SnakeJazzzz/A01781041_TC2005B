//Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
let numero = 8;
function potenciaDeDos(num){
    return (num & (num-1)) === 0;
}
console.log(potenciaDeDos(numero));