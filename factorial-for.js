//Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

//Paso a paso
//El factorial de un nro entero positivo se define como el producto de todos los números naturales anteriores o igual a él. 

/*Ejemplo:
    4! = 4 x 3 x 2 x 1= 24
    7! = 7 x 6 x 5 x 4 x 3 x 2 x 1 =5040
    1! = 1
*/ 

// 10 x 9 x 8 x 7 x  6 x  5 x    4   x   3      x 2     x 1 = 
//     90
//          720
//              5040
//                  30240
//                        151200 
//                              604800 
//                                     1814400
//                                             3628800
//                                                    3628800

function factorial(num){
    var  result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(10))

