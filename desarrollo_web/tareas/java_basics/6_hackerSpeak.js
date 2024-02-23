/*Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.*/
let texto='Javascript es divertido';
function hackerSpeak(someText){
    let hackerSpeak = someText.replace(/a/g, '4').replace(/e/g, '3').replace(/i/g, '1').replace(/o/g, '0').replace(/s/g, '5').replace(/t/g, '7');
    return hackerSpeak;
}
console.log(hackerSpeak(texto));