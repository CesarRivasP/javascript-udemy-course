let result;

// Redondear hacia abajo de forma forzada
result = Math.floor(2.4);

// Redondear hacia arriba de forma forzada
result = Math.ceil(2.1);  //3

// Redondear hacia arriba y hacia abajo, dependiendo de si esta antes o despues de .5
result = Math.round(2.8);

// Raiz cuadrada del numero
result = Math.sqrt(144);  //12}

// Valor Absoluto
result = Math.abs(-144);  //siempre queda positivo

// Potencia
result = Math.pow(8, 2);

// Valor minimo
result = Math.min(10, 2);

// Valor max
result = Math.max(10, 2);

// Aleatorio - (pocas veces retorna numeros enteros)
result = Math.random();

// Aleatorio dentro de un rango
result = Math.floor(Math.random() * 20);


console.log(result)