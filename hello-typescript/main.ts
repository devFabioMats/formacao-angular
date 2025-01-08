var minhaVar = 'Minha Variável!';

function minhaFuncao(x, y) {
    return x + y;
}

// ES 6 ou ES 2015
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor) {
    return valor * 2;
});

// Arrow Functions
numeros.map(valor => valor * 2); // ES 2015

// Classes
class Matematica {
    soma(x, y) {
        return x + y;
    }
}

// Tipagem de variáveis
var n1: any = 'sdfsdf';
n1 = 4;