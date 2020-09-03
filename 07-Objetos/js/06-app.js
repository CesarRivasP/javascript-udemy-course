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


// Destructuring de un objeto de un objeto
const { infomation, infomation: { size }, infomation: { size: { weight } } } = data;

console.log(infomation); 
// Como se esta buscando acceder a size, information no existe, no crea la variable
// Para que information se cree, tienes que declararla aparte en el destructuring
console.log(size);
console.log(weight);