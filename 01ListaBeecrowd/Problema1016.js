var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines.shift());

let carroX = 60;
let carroY = 90;

let distanciaEmUmaHora= 30;

/* 
velocidade --- distancia
60 - 30 
x - D
*/ 

let tempo = (carroX * distancia) / distanciaEmUmaHora;

console.log(tempo+" minutos");