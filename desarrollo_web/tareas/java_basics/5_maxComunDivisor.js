/*Escribe una función que calcule el máximo común divisor de dos números.*/
let numero1 = 160, numero2 = 17;

function MCD(num1, num2) {
    while(num1 != num2){
        if(num1 > num2)
            num1 = num1 - num2;
        else
            num2 = num2 - num1;
    }
    return num1;
}

console.log(MCD(numero1, numero2));

