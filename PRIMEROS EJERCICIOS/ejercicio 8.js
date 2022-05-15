// 8. Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad).
const prompt = require('prompt-sync')();
const number = parseInt(prompt('Entre un numero positivo:'));
let isPrime = true;
if (number === 1) {
    console.log('el 1 no es primo ni compuesto');
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number+' SI es un numero primo');
    } else {
        console.log(number+"  No es un numero primo");
    }
}
else {
    console.log('No es un numero primo');
}