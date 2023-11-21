var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//entrada dos valores

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());
let D = parseInt(lines.shift());

//cálculo da diferença do produto A e B pelo produto de C e D. 

let diferenca = (A * B) - (C * D);

//resultado

console.log("DIFERENCA = "+diferenca);