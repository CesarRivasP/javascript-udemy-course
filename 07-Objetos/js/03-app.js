const data = {
  name: 'Porsche',
  price: 500,
  avaliable: true
};

// Agregar mas propiedades al objeto ya en la ejecuacion o en otras situaciones
data.image = "Imagen.jpg";

// Eliminar propiedades del objeto
delete data.avaliable;

console.log(data);