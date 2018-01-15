'use strict';

function creaClosure(valor) {
  return function () {
      return valor;
  }
};

var cl1 = creaClosure(1);

console.log(cl1());

function creaSumador(valor) {
    return function (valor2) {
        return valor + valor2;
    }
};

var suma5 = creaSumador(5);

console.log(suma5(10));
console.log(suma5(20));