// Crie um módulo que contém 3 funções, uma para calcular a área de um círculo,
// outra para calcular a área de um triângulo e outra para calcular a área de um
// retângulo, importe e utilize essas função em seu arquivo principal;

const prompt = require("prompt-sync")();
let area = require("./funcao.js");

let raio = prompt("Digite o raio do círculo:");
console.log(areaCirculo(raio));
