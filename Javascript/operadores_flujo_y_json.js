//definimos un objeto de forma literal
var empleado = {
    nombre: "Smith",
    profesion: "Agente",
    edad: 42,
    armas: ["Pistola", "Rifle", "Kung Fu"]
};
console.log (empleado);

var serializado = JSON.stringify(empleado);
console.log(serializado);

serializado = serializado + '}';

var leido;

try{
    leido = JSON.parse(serializado);
} catch (err){
    console.log("ERROR: no se pudo leer serializado");
}

if(leido != undefined){
    console.log("hay algo leido");
} else {
    console.log("no hay nada leido");
}

for(var i = 0; i < empleado.armas.length; i++){
    var arma = empleado.armas[i];
    console.log(empleado.nombre + (arma == 'Kung Fu' ? " sabe " : " tiene ") + arma);
}

function accion (numero1, numero2){
  console.log(numero1);
  console.log(numero2);
  return "smith";
};

console.log(accion(undefined, 1));