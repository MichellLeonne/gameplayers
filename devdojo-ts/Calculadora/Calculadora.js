"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var primeiraStr = (0, readline_sync_1.question)('Digite o primeiro numero:\n');
    var operador = (0, readline_sync_1.question)('Digite o operador:\n');
    var segundaStr = (0, readline_sync_1.question)('Digite o segundo numero\n');
    var validInput = isNumber(primeiraStr) && isOperador(operador) && isNumber(segundaStr);
    // Verifica se tudo e valido em uma unica instrução
    if (validInput) {
        var primeiroNum = parseInt(primeiraStr);
        var segundoNum = parseInt(segundaStr);
        var resultado = calculate(primeiroNum, operador, segundoNum);
        console.log(resultado);
        //converte seu primeiro argumento para uma string e resultado mostra resultado
    }
    else {
        console.log('\nInformacao invalida\n');
        main();
    }
}
function calculate(primeiroNum, operador, segundoNum) {
    switch (operador) {
        case '+':
            return primeiroNum + segundoNum;
        case '-':
            return primeiroNum - segundoNum;
        case '*':
            return primeiroNum * segundoNum;
        case '/':
            return primeiroNum / segundoNum;
    }
}
function isOperador(operador) {
    switch (operador) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var podeSerNum = parseInt(str);
    var isNum = !isNaN(podeSerNum);
    return isNum;
}
main();
