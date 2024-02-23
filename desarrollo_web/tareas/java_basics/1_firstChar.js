//Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
const theString= 'abacddbec';


function firstChar(letters){
    let charCount = new Map();
    // Contar cuantas veces ocurre un caracter
    for (let i=0;i<letters.length;i++){
        let ch=letters.charAt(i);
        if(charCount.has(ch)){
            charCount.set(ch,charCount.get(ch)+1);
            
        }else{
            charCount.set(ch,1);
        }

    }
    //encontrar el primero que no se repite eh imprimirlo
    for (let i=0;i < letters.length; i++){
        let ch = letters.charAt(i);
        if(charCount.get(ch)===1){
            return ch;
        }
    }
    // si no hay return null
    console.log("No non repeating character found. ")
    return null;

}
console.log(firstChar(theString));



