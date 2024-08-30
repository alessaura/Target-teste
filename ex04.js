function calcularPercentual(faturamentoMensal) {
    let totalFaturamento = 0;
    let percentualEstados = {};

    // Calcula o total do faturamento mensal
    for (let estado in faturamentoMensal) {
        totalFaturamento += faturamentoMensal[estado];
    }

    // Calcula o percentual de cada estado
    for (let estado in faturamentoMensal) {
        let percentual = (faturamentoMensal[estado] / totalFaturamento) * 100;
        percentualEstados[estado] = percentual.toFixed(2);
    }

    return percentualEstados;
}

// Exemplo de uso:
let faturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let percentuais = calcularPercentual(faturamentoMensal);

for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
