const numberOne = "20";
const numberTwo = "20.2";
const numberThree = "Uno";
const numberFour = 20;


const handleParseToIntNumber = Number.parseInt(numberOne);
console.log(numberOne, handleParseToIntNumber);

const handleParseToFloatNumber = Number.parseFloat(numberTwo);
console.log(numberTwo, handleParseToFloatNumber);

// Si no es un numero
const handleParseStringToIntNumber = Number.parseInt(numberThree);
console.log(numberThree, handleParseStringToIntNumber);  // NaN: Not at Number

// Revisar si un numero es entero
const handleReviewIsInteger = Number.isInteger(numberFour);
console.log(numberFour, handleReviewIsInteger);  // true