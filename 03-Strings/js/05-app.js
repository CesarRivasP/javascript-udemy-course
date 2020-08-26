// Reemplazar un texto de una cadena
const product = 'Monitor de 20 pulgadas';
console.log(product);

const replaceInch = product.replace('pulgadas', '"');
console.log(replaceInch);

const replaceMonitor = product.replace('Monitor', 'Monitor Curvo');
console.log(replaceMonitor)


// Cortar una parte de una cadena de texto
const sliceMonitor = product.slice(0, 8);
console.log(sliceMonitor);

// Si no le pasas un segundo valor, corta desde el inicio hasta el caracter indicado
const sliceEndString = product.slice(8);
console.log(sliceEndString);

//Si el primero numero es mayor que el segundo, no va a hacer nada el metodo


// Alternativa a slice
const substringProduct = product.substring(0, 8);  
console.log(substringProduct);
// Aunque se comporta igual que slice, se diferencia de este, si el pasas un numero mayor que el segundo parametro, este
// si voltea los parametros para poder realizar el corte del string

//Seleccionar el primer caracter de un string
const handleInitialWord = product.substring(0, 1);
console.log(handleInitialWord);

// Metodo mas simple para realizar la misma tarea
const handleGetInitialWord = product.charAt(0, 1);
console.log(handleGetInitialWord);