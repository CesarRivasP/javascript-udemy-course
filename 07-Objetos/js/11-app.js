"use strict";
// This dentro de objetos
// La palabra this se refiere a los valores que existen en el mismo objeto
const productPorsche = {
  name: 'Porsche',
  price: 500,
  avaliable: true,
  printInfo: function(){
    // Al poner this indicamos que busque la propiedad dentro del mismo objeto en el que se encuentra
    console.log(`El producto ${this.name} tiene un precio de: ${this.price}`)
  }
};

const productLexus = {
  name: 'Lexus',
  price: 300,
  avaliable: true,
  printInfo: function(){
    // Al poner this indicamos que busque la propiedad dentro del mismo objeto en el que se encuentra
    console.log(`El producto ${this.name} tiene un precio de: ${this.price}`)
  }
};

productPorsche.printInfo();
productLexus.printInfo();