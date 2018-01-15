"use strict";

console.log('Empiezo...');
function escribeTrasDosSegundos(texto, callback){
    setTimeout(function(){
        console.log(texto);
        callback();
    }, 2500);
}

// bucle asincrono en serie

// llamar a una funcion N veces en serie,
// y al finalizar llamar al callback de finalización

function serie(n, func, callbackFin) {
    if(n == 0){
        callbackFin();
        return;
    }
    n--;
    func(n, function(){
        serie(n, func, callbackFin);
    })
}

serie(5, escribeTrasDosSegundos, function () {
    console.log('he terminado');
});