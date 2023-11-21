var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//entrada 

let nomeDoVendedor = (lines.shift());
let salarioFixo = parseFloat(lines.shift());
let totalDeVendasNoMes = parseFloat(lines.shift());

let comissao = 0.15;

//cálculo 

let totalAReceber = salarioFixo + (totalDeVendasNoMes * 0.15)

//resultado

console.log("TOTAL = R$ "+totalAReceber.toFixed(2));