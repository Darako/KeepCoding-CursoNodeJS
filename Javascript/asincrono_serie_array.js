"use strict";

console.log('Empiezo...');
function escribeTrasDosSegundos(texto, callback){
    setTimeout(function(){
        console.log(texto);
        callback();
    }, 1500);
}

// bucle asincrono en serie

// llamar a una funcion con array en serie,
// y al finalizar llamar al callback de finalización

function serie(lista, func, callbackFin) {
    if(lista){
        callbackFin();
        return;
    }
    func(lista.shift(), function(){
        serie(lista, func, callbackFin);
    })
}

var lista = [1, 2, 'tres', 4, 5];

serie(lista, escribeTrasDosSegundos, function () {
    console.log('he terminado');
});