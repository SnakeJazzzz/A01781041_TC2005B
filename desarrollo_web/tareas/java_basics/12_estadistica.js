//Escribe una función que tome una lista de números y devuelva la mediana y la moda.
const lista=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function medianaYModa(arr){
    let mediana;
    let moda;
    let n=arr.length;
    let sortedArr=arr.sort((a,b)=>a-b);
    //mediana
    if(n%2===0){
        mediana=(sortedArr[n/2-1]+sortedArr[n/2])/2;
    }else{
        mediana=sortedArr[Math.floor(n/2)];
    }
    //moda
    let count={};
    for(let i=0;i<n;i++){
        if(count[arr[i]]){
            count[arr[i]]++;
        }else{
            count[arr[i]]=1;
        }
    }
    let max=0;
    for(let key in count){
        if(count[key]>max){
            max=count[key];
            moda=key;
        }
    }
    return {mediana,moda};
}
console.log(medianaYModa(lista));