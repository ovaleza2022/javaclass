// Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”.

const prompt = require('prompt-sync')();
const nombreUsuario = prompt("Nombre de usuario:");
console.log("  Hola " + nombreUsuario);
