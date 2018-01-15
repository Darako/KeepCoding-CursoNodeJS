var numero = 1;

console.log("Valor de numero: " + numero);
console.log("Tipo de numero: " + typeof(numero));
numero = "hola";
console.log("Valor de numero: " + numero);
console.log("Tipo de numero: " + typeof(numero));

//strings
console.log("texto de prueba".split(" "));
var textoLargo =
    'Linea 1\n' +
    "Linea 2";
console.log(textoLargo);
var textoLargo2 = ["linea 1", "linea 2"];
console.log(textoLargo2.join('\n'));

//objetos

var objeto = {
    numero : 1,
    texto : "texto",
    sumaDos: function (v) {
        return v + 2;
    }
};

console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto.sumaDos(5));

//arrays
var array = [
    1,
    "hola",
    function (v) {
        return v - 2;
    },
    {valor: "holi"}
];

console.log(array);
console.log(array[2](5));

//hoisting

var x = 100;

function y() {
    if(x == 20){
        var x = 30;
    }
    return x;
};
console.log(x, y());

var valS = 2;

switch(valS){
    case 1 : {
        console.log(1);
        console.log(1);
        break;
    }
    case 2 : {
        console.log(2);
        console.log(2);
        break;
    }
}