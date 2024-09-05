 /* 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? */

const indice = 13
let soma = 0
let k = 0


for (let index = 0; k < indice; index++) {
    k = k + 1
    soma = soma + k
}

console.log(soma)