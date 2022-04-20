// Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
const prompt = require('prompt-sync')();

const valor1 = parseInt(prompt("Escriba primer numero:"));
const valor2 = parseInt(prompt("Escriba segundo numero:"));
console.log(valor1+valor2)