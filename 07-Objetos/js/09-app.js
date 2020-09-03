"use strict";

// Sellar el objeto
const data = {
  name: 'Porsche',
  price: 500,
  avaliable: true,
  infomation: {
    size: {
      weight: '1500kg',
      size: '3m'
    }
  }
};

/*
A diferencia de freeze, seal lo que hace es que no se puedan agregar ni eliminar propiedades, 
pero si se pueden modificar las existentes
*/
Object.seal(data);

data.avaliable = false;
// data.image = 'NewImage.jpg';  // Error
// delete data.infomation;  // Error

console.log(data);

// Para saber si un objeto esta sellado
console.log(Object.isSealed(data));
