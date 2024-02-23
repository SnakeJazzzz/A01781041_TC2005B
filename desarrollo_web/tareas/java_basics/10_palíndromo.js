/*Escribe una función que revise si una cadena de texto es un palíndromo o no. */
let texto='Anita lava la tina';
function palindromo(someText){
    let texto = someText.replace(/ /g, '').toLowerCase();
    let textoInvertido = texto.split('').reverse().join('');
    return texto == textoInvertido;
}
console.log(palindromo(texto));