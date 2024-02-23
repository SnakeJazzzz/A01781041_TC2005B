/*Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.*/
let texto='cada palabra debe tener su primera letra en mayuscula';

function capitalizar(someText){
    return someText.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}
console.log(capitalizar(texto));