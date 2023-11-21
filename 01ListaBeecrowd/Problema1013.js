var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valores = lines.shift().split(' '); 

let a = parseInt(valores[0]);
let b = parseInt(valores[1]);
let c = parseInt(valores[2]);

let maior1 = ((a + b ) + Math.abs(a - b)) / 2;
let resultado = ((maior1 + c) + Math.abs(maior1 - c)) / 2;

//resultado

console.log(resultado +" eh o maior")