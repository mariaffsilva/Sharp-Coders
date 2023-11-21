var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//entrada

let raio = parseFloat(lines.shift()); 
let pi = 3.14159;

//cálculo 

let volume = (4/3) * pi * (raio * raio * raio);

//para colocar número elevado pode usar seria Math.pow(R, 3)

//resultado

console.log("VOLUME = "+volume.toFixed(3));

