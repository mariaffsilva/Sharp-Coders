var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valoresPrimeiraLinha = lines.shift().split(" ");
let valoresSegundaLinha = lines.shift().split(" ");

let x1 = parseFloat(valoresPrimeiraLinha[0]); 
let y1 = parseFloat(valoresPrimeiraLinha[1]);

let x2 = parseFloat(valoresSegundaLinha[0]);
let y2 = parseFloat(valoresSegundaLinha[1]);

let distancia = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1, 2));

console.log(distancia.toFixed(4));