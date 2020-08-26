const product4 = String('Monitor Asus ROG');

//No usa parentesis como otros metodos porque es una propiedad de los strings
console.log(product4.length);

// Verificar si un string tiene una determinada palabra
const product5 = new String('Monitor AliemWare');

console.log(product5.indexOf('AliemWare')); // = 8, significa que inicia en la letra numero 8 del string
// Si retorna -1 quiere decir que no lo encontro


// Mejor que indexOf
const testProduct2 = "Monitor de 28\"";

console.log(testProduct2.includes('tablet'));
console.log(testProduct2.includes('Monitor'));
console.log(testProduct2.includes('monitor'));  //false. Debe ser identico al string, incluyendo si tiene mayusculas o no