// 7. Escribe un programa que pida un número y diga si es divisible por 2.
const prompt = require('prompt-sync')();
var valor1 = prompt("Escriba el numero:");
if (valor1 % 2 == 0)
    console.log('El valor es divisible entre 2');
else
    console.log('El valor no es divisible entre 2');
