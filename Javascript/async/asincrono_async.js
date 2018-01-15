var async = require('async');

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

var lista = [1, 2, 'tres', function(){ console.log('caca'); }, 5];

async.eachSeries(lista, escribeTrasDosSegundos, function () {
    console.log('he terminado');
});