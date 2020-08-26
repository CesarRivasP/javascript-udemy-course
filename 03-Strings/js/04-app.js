const product = '               Monitor de 25              ';

console.log(product);
console.log(product.length);  //42, espacios en blanco tambien cuentan

//eliminados los espacios en blanco al inicio
const handleDeleteStartWhiteSpaces = product.trimStart();
console.log(handleDeleteStartWhiteSpaces);  
console.log(handleDeleteStartWhiteSpaces.length);

//eliminados los espacios en blanco al final
const handleDeleteEndWhiteSpaces = product.trimEnd();
console.log(handleDeleteEndWhiteSpaces);
console.log(handleDeleteEndWhiteSpaces.length);

// Metodos de forma encadenada
const chainMethods = product.trimStart().trimEnd();  //estos metodos no tienen ni un año de haber sido publicados
console.log(chainMethods);
console.log(chainMethods.length);

// borrar en ambas direcciones, inicio y final
const handleDeleteWhiteSpaces = product.trim();
console.log(handleDeleteWhiteSpaces);
console.log(handleDeleteWhiteSpaces.length);