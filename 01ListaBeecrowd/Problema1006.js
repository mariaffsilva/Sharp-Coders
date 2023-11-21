var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//entrada de variáveis - notas

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let pesoNotaA = 2;
let pesoNotaB = 3;
let pesoNotaC = 5;

//cálculo da média 

let media = ((pesoNotaA * A) + (pesoNotaB * B) + (pesoNotaC * C))/(pesoNotaA + pesoNotaB + pesoNotaC);

//resultado 

console.log("MEDIA = "+media.toFixed(1));