var objeto = {
    numero: 1,
    texto: "texto prueba",
    esCero : function (v) {
        return v==0;
    },
    esUno : function (v) {
        return v==1;
    }
}

console.log("Valor de esCero(0): " + objeto.esCero(0));
console.log("Valor de esCero(0): " + objeto.esUno(0));

for(var pname in objeto){
    if(objeto.hasOwnProperty(pname)){
        console.log(pname + ' - ' + objeto[pname] +'\n');
    }
}

var array = [ 1, 'hola', {valor: "valor hola"}];
var array2 = [ 1, 2, 3];

console.log(array[0].valor);
console.log('.....................');
var linea = array.join('-');
console.log(linea.toString() );
array2.forEach(function (value) { console.log(value + 5) });