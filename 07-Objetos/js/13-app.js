"use strict";

const productPorsche = {
  name: 'Porsche',
  price: 500,
  avaliable: true,
};


const productLexus = {};

// Nos puede ayudar a validar si un objeto esta vacio
console.log(Object.keys(productPorsche)); // retorna las keys
// Asi podemos saber si un objeto tiene informacion, puesto que si no tiene keys, no hay data
console.log(Object.keys(productLexus));

console.log(Object.values(productPorsche));  // retorna los values

// Retorna todo en pares
console.log(Object.entries(productPorsche)); // retorna todo