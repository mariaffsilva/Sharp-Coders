var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//entrada

let numeroDoFuncionario = parseInt(lines.shift()); 
let horasTrabalhadas = parseInt(lines.shift());
let valorRecebidoPorHora = parseFloat(lines.shift()); 

//cálculo do salario

let salario = valorRecebidoPorHora * horasTrabalhadas

//resultado 

console.log("NUMBER = "+numeroDoFuncionario);
console.log("SALARY = U$ "+salario.toFixed(2));