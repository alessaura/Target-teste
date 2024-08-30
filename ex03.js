const fs = require('fs');

function calculateFaturamento(data) {
  let menorValor = Infinity;
  let maiorValor = 0;
  let somaFaturamento = 0;
  let diasAcimaMedia = 0;
  let diasComFaturamento = 0;

  // Filtra os dias com faturamento
  const diasComFaturamentoArray = data.filter(item => item.valor > 0);

  // Calcula a soma do faturamento diário
  for (let i = 0; i < diasComFaturamentoArray.length; i++) {
    const valor = diasComFaturamentoArray[i].valor;
    somaFaturamento += valor;
    if (valor < menorValor) {
      menorValor = valor;
    }
    if (valor > maiorValor) {
      maiorValor = valor;
    }
    diasComFaturamento++;
  }

  // Calcula a média mensal
  let mediaMensal = somaFaturamento / diasComFaturamento;

  // Conta os dias acima da média
  for (let i = 0; i < diasComFaturamentoArray.length; i++) {
    if (diasComFaturamentoArray[i].valor > mediaMensal) {
      diasAcimaMedia++;
    }
  }

  return {
    menorValor,
    maiorValor,
    diasAcimaMedia
  };
}

// Lê o arquivo JSON
const data = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));

// Chama a função calculateFaturamento
let resultado = calculateFaturamento(data);

console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
console.log(`Número de dias acima da média: ${resultado.diasAcimaMedia}`);