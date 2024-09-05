/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. 
Estes dias devem ser ignorados no cálculo da média; */

/* Para acessar o json server basta executar: 
json-server --watch dados.json --port 8080 e depois seguir o link abaixo:
http://localhost:8080/valores */


const url = 'http://localhost:8080/valores';
let valores = []

async function fetchData() {
try {

    const response = await fetch(url);
    
    
    if (!response.ok) {
        throw new Error('Resposta n encontrada');
    }

    const data = await response.json();
    valores = data; 


} catch (error) {

    console.error('Não foi possivel encontrar os dados:', error);
}
}

async function verificaMaior() {
    await fetchData();
    
    let maiorValor = valores[0].valor;

    valores.forEach(item => {
        if (item.valor > maiorValor) {
            maiorValor = item.valor;
        }
    });

    console.log('O maior valor é:', maiorValor.toFixed(2));
}

async function verificaMenor() {
    await fetchData();
    
    let menorValor = valores[0].valor;

    valores.forEach(item => {
        if (item.valor < menorValor) {
            menorValor = item.valor;
        }
    });

    console.log('O menor valor é:', menorValor);
}


async function maiorQueMedia() {
    await fetchData();
    let soma = 0
    
    valores.forEach(item => {
        soma += item.valor;
    });

    let media = soma / valores.length;

    let diasMaioresQueMedia = valores.filter(dia => dia.valor > media).length;

    console.log('A média valor é:', media.toFixed(2));
    console.log('Número de dias com faturamento a cima da média:', diasMaioresQueMedia);
}

verificaMenor();
verificaMaior();
maiorQueMedia()
