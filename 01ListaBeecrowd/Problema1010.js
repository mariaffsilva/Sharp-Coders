var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//entrada

let primeiraLinha = lines.shift().split(' ');
let segundaLinha = lines.shift().split(' ');

let codigoPeca1 = parseInt(primeiraLinha[0])
let numeroPeca1 = parseInt(primeiraLinha[1])
let valorPeca1 = parseFloat(primeiraLinha[2])

let codigoPeca2 = parseInt(segundaLinha[0])
let numeroPeca2 = parseInt(segundaLinha[1])
let valorPeca2 = parseFloat(segundaLinha[2])

//cálculo

let valorASerPago = (numeroPeca1 * valorPeca1) + (numeroPeca2 * valorPeca2);

//resultado

console.log("VALOR A PAGAR: R$ "+valorASerPago.toFixed(2));