'use strict';

//información de proceso
var info = {
    pid: process.pid,
    version: process.version,
    platform: process.platform,
    title: process.title,
    argumentos: process.argv,
    execPath: process.execPath,
    carpeta: process.cwd()
};

console.log('entro en ', info);

process.on('exit', function(){
   console.log('Adios. Antes de terminar me despido.');
});
console.log('fin del proceso');

process.exit(0);
console.log('no me ejecutaré');
process.on('exit', function () {
    console.log('Soy otra despedida');
});