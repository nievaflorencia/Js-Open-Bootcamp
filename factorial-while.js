//factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

//Crear una función
function factorial(num){
    //Crear una variable resultado que guarde num
    var result = num;
    
    //si num = 0 o num = 1, el factorial devolverá 1
    if (num === 0 || num === 1)
    return 1;

    //Crear un bucle While
    while (num > 1){
        num--; //decrementa por 1 con cada iteración 
        result = result * num; 

        /*
                        num    num--    result     result *= num
            1ra Ite..   10     9         10         90 = 10 * 9
        */ 
    }
    //Regresa el factorial del integral dado
    return result; 
}

console.log(factorial(10)) 