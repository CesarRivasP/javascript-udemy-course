// Undefined
let number;

console.log(number);  //undefined
console.log(typeof number);

// Null
let numberOne = null;

console.log(numberOne);  //null
console.log(typeof numberOne);  //object -> tipo de dato, segun ecma los null deden de ser un objeto


// Comparacion
console.log(number == numberOne);  //true
console.log(number === numberOne);  //false - siempre utilizar metodo estricto, para evitar ambiguedades y comportamientos extraños