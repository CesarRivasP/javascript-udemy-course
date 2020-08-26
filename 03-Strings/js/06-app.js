const product = 'Monitor de 20 pulgadas';

//repetir una cadena de texto multiple veces
const repeteatText = ' en Promocion'.repeat(3);  //si ingresas un flotante, JS va a redondear el numero
console.log(repeteatText);


// dividir un string
const activity = 'Estoy aprendiendo JS moderno';
const handleSplitString = activity.split(' ');
// transforma un string y lo divide en partes, y lo guarda en un array

console.log(handleSplitString);


const hobbies = 'Leer, Caminar, Escuchar Musica, Programar';
const handleSplitHobbies = hobbies.split(', ');
console.log(handleSplitHobbies);

const tweet = 'Aprendiendo JS moderno #JSModernoConJuan';
const handleHashTag = tweet.split('#');
console.log(handleHashTag);