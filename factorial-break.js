//- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break


function factorial(num){
    //Crear una variable resultado que guarde num
    var result = num;
    
    
    if (num === 0 || num === 1)
    return 1;

    
    while (num > 1){
        num--; 
        result = result * num; 
        break;
    }
    
    return result; 
}

console.log(factorial(10)) 