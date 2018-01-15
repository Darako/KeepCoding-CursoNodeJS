 // una funcion básica. como declaración
 function funcionBasica(){
    console.log('función básica se ejecutó');
 };

funcionBasica();

// una función como declaración con argumentos y retorno

 function suma(a, b) {
   return a + b;
 };

 console.log(suma(1, 2));

 // una funcion como expresión
 var multiplica = function (a, b) {
     return a*b;
 }

 console.log(multiplica(2,5));

 var lang = 'es';

 function accesoContextoSuperior(){
    console.log(lang) ;
 }
 accesoContextoSuperior();

 // método de un objeto

 var agente = {
     nombre: 'Smith',
     saluda: function(){
         console.log('hola soy el agente ' + this.nombre)
     }
 }
 agente.saluda();

 // constructor de objetos

 function Movida(nombre){
     this.getNombre = function(){
         return nombre;
     };
     this.setNombre = function(value){
         nombre = value;
     };
 }

function Polla(a, b, c){
     this.nombre = a;
     this.apellido1 = b;
     this.apellido2 = c;
     this.show = function(value){
         console.log(value + "\n" + this.nombre + "\n");
     };
}

var pene = new Polla('a', 'b', 'c');
 console.log(pene);

 var kiwi = Movida('caqui');
 console.log(kiwi);
 /*
 console.log(kiwi.getNombre());
 kiwi.setNombre('fresa');
 console.log(kiwi.getNombre());
*/
