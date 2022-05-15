// 6. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const prompt = require('prompt-sync')();
var valor1 = prompt("Escriba primer numero:");
var valor2 = prompt("Escriba segundo numero:");
var valor3 = prompt("Escriba tercer numero:");
console.log('El valor mayor es');
console.log(Math.max(valor1,valor2,valor3));
