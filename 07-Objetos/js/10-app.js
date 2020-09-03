"use strict";

const data = {
  name: 'Porsche',
  price: 500,
  avaliable: true,
};

const size = {
  weight: '1500kg',
  size: '3m'
};

const information = {
  date: new Date(),
  title: 'New Porsche 911'
};

console.log(data);
console.log(size);

// Combinar objetos
const result = Object.assign(data, size);
console.log(result);

// Otra forma de combinar objetos - Spread Operator o Rest Operator
const newResult = { ...data, ...information };
console.log(newResult);