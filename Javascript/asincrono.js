"use strict";

console.log('Empiezo...');
function escribeTrasDosSegundos(texto, tiempo, callback){
    setTimeout(function(){
       console.log(texto);
       callback();
    }, tiempo);
}

escribeTrasDosSegundos('texto1', 5000, function () {
    console.log('Fin1');
    escribeTrasDosSegundos('texto2', 5000, function () {
        console.log('Fin2');
    });
});

