// 01 - Añadir libreria http
var http = require ('http');

// 02 - Pedimos a http que cree un server
// El parametro es una función que el servidor va a intentar responder
var server = http.createServer(function (request, response){
   response.writeHead(200, {'Content-type': 'text-plain; charset=UTF-8'});
   response.end('<h1>Hello Stuttgart, estoy loquete</h1>\n<h3>Pero aprendo rapido</h3>...\n');
});

// 03 - Arrancamos el servidor
server.listen(1337, '127.0.0.1');

// 04 - Mostramos un log en la consola
console.log('Servidor arrancado en localhost:1337');

