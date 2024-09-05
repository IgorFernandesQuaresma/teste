/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o 
próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, 
informado um número, ele calcule a sequência de Fibonacci e retorne 
uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer 
entrada de sua preferência ou pode ser previamente definido no código; */


function fibonacci(numero) {
    let fib = [0, 1];

    for (let i = 2; fib[fib.length - 1] <= numero; i++) {
        let proximoNum = fib[i - 1] + fib[i - 2];
        fib.push(proximoNum);
        
    }

    console.log(fib)
    
    if (fib.includes(numero)) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
}


let numero = 150; 

console.log(fibonacci(numero));


