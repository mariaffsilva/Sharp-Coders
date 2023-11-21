var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valores = lines.shift().split(' ');

let A = parseFloat(valores[0]); 
let B = parseFloat(valores[1]); 
let C = parseFloat(valores[2]);
let pi = 3.14159;

//cálculo

let areaTriangulo = (A * C) / 2;
let areaCirculo = pi * Math.pow(C,2);
let areaTrapezio = ((A + B) * C) / 2;
let areaQuadrado = Math.pow(B,2);
let areaRetangulo = A * B

//resultado

console.log("TRIANGULO: "+areaTriangulo.toFixed(3));
console.log("CIRCULO: "+areaCirculo.toFixed(3));
console.log("TRAPEZIO: "+areaTrapezio.toFixed(3));
console.log("QUADRADO: "+areaQuadrado.toFixed(3));
console.log("RETANGULO: "+areaRetangulo.toFixed(3));