/*Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12]. */
let numero=12;
function factoresDeUnNumero(num){
    const factores =[];

    for(let i=1;i<=num;i++){
        if(num%i===0){
            factores.push(i);
        }
    }
    return factores;
}
console.log(factoresDeUnNumero(numero));