"use strict";

// EL habilitar modo estricto va a exigir que cumplas ciertas reglas a la hora de escribir codigo JS
// Al habitarlo, hay acceso a una serie de metodos para objetos "Object Methods"
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

// Para que un objeto no pueda ser modificado, hay que habilitar el modo estricto de javascript
// Esto va a evitar que el objeto pueda ser modificado, ni cambiar, agregar o eliminar propiedades
Object.freeze(data);

// Como saber si un objeto esta congelado
console.log(Object.isFrozen(data));

/* data.avaliable = false;  //Error
delete data.avaliable;  //Error */

console.log(data);