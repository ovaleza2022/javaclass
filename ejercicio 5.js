// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const prompt = require('prompt-sync')();
var valor1 = prompt("Escriba primer numero:");
var valor2 = prompt("Escriba segundo numero:");
console.log('El valor mayor es');
console.log(Math.max(valor1,valor2));
