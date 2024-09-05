/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de 
representação que cada estado teve dentro do valor total mensal da distribuidora.*/



const valores = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
];


let total = 0

for (let index = 0; index < valores.length; index++) {
    total += valores[index].valor 
}

console.log(`O valor total é: ${total.toFixed(2)}`)

for (let index = 0; index < valores.length; index++) {
    const percentual = (valores[index].valor / total) * 100;
    console.log(`O valor percentual de ${valores[index].estado} é ${percentual.toFixed(2)}`)
}


