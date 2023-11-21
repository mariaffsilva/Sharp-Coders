var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valores = lines.shift().split(" "); 

let A = parseFloat(valores[0]); 
let B = parseFloat(valores[1]);
let C = parseFloat(valores[2]);

//cálculo da raiz 

let delta = Math.pow(B,2) - 4 * A * C;

//condicional

if(A !== 0 && delta > -1 ){
    
    let x1 = (- (B) + Math.sqrt(delta)) / (2 * A);
    let x2 = (- (B) - Math.sqrt(delta)) / (2 * A);

    console.log("R1 = "+x1.toFixed(5));
    console.log("R2 = "+x2.toFixed(5));
}else{
    console.log("Impossivel calcular");
}
