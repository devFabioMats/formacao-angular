var minhaVar = 'Minha Variável!';
function minhaFuncao(x, y) {
    return x + y;
}
// ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
// Arrow Functions
numeros.map(function (valor) { return valor * 2; }); // ES 2015
// Classes
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
// Tipagem de variáveis
var n1 = 'sdfsdf';
n1 = 4;
