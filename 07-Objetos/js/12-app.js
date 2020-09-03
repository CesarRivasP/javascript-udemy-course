"use strict";

// Object Literal - Menos dinamico
const productPorsche = {
  name: 'Porsche',
  price: 500,
  avaliable: true,
};

// Object Constructor - Mas dinamico
// Asi era la progrmacion orientada a objetos en JS
function Product(name, price){
  this.name = name;
  this.price = price;
  this.avaliable = true;
}

const product2 = new Product('Porsche', 145000);
console.log(product2);

const product3 = new Product('Lexus', 65000);
console.log(product3);