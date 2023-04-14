// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// 	SP – R$67.836,43
// 	RJ – R$36.678,66
// 	MG – R$29.229,88
// 	ES – R$27.165,48
// 	Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

let total = 0;
let porcentagem = 0;
let porcentagemTotal = 0;

// Valores de faturamento por val (em reais)
const valores = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

for(let val in valores){
    total += valores[val];
    document.getElementById(`${val.toLowerCase()}-val`).innerHTML = `R$${valores[val]}`;
};

for (let val in valores) {
    porcentagem = ((valores[val] / total) * 100).toFixed(0);
    porcentagemTotal += parseInt(porcentagem);
    document.getElementById(`${val.toLowerCase()}-perc`).innerHTML = `${porcentagem}%`;
};

let totalInt = total.toFixed(2);
document.getElementById("total-val").innerHTML = `R$${totalInt}`;
document.getElementById("total-perc").innerHTML = `${porcentagemTotal}%`;