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

// Los objetos si se pueden reasignar
// Una variable declarada como const, al estar en un objet, sus propiedades si se pueden reescribir o eliminar
data.avaliable = false;

delete data.infomation;

console.log(data);