/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
	• O menor valor de faturamento ocorrido em um dia do mês;
	• O maior valor de faturamento ocorrido em um dia do mês;
	• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
	a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
	b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

function calcularFaturamento() {

  fetch('json.json')
    .then(response => response.json())
    .then(data => {

      let menorValor = Infinity;
      let maiorValor = -Infinity;
      let somaValores = 0;
      let numDiasSuperiorMedia = 0;
      let numDias = data.faturamentoDiario.length;
      let numDiasUteis = 0;
      
      for (let i = 0; i < numDias; i++) {
        let valor = data.faturamentoDiario[i].valor;
        
        if (valor > 0) {
          somaValores += valor;
          numDiasUteis++;
          
          if (valor < menorValor) {
            menorValor = valor;
          }
          if (valor > maiorValor) {
            maiorValor = valor;
          }
          
          if (valor > somaValores / numDiasUteis) {
            numDiasSuperiorMedia++;
          }
        }
      }
      
      let resultado = document.getElementById('resultado');
      resultado.innerHTML = `Menor valor: R$ ${menorValor.toFixed(2)}<br>`;
      resultado.innerHTML += `Maior valor: R$ ${maiorValor.toFixed(2)}<br>`;
      resultado.innerHTML += `Dias com faturamento superior à média: ${numDiasSuperiorMedia} de ${numDiasUteis}`;
    })
    .catch(error => {
      console.error(error);
    });
}