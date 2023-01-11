const products = [];
// Se creo un constructor de objetos de productos

class Producto {
  constructor(titulo, precio) {
    this.id = products.length + 1;
    this.titulo = titulo;
    this.precio = precio;
  }
}
products.push(new Producto("Mountain bike Battle 210 R29", 80000));
products.push(new Producto("Bicicleta Silverfox 2021 M", 75689));
products.push(new Producto("Mountain Bike Thunder Sky Rodado 29", 66799));
products.push(new Producto("Mountain bike TopMega Sunshine R29", 86899));
products.push(new Producto("Mountain bike Shifter", 64999));
products.push(new Producto("Mountain bike SLP 5 pro R29 18", 79376));
products.push(new Producto("Bicicleta paseo femenina Futura", 51838));
products.push(new Producto("Mountain bike Olmo Wish 290", 94499));
products.push(new Producto("Bicicleta plegable Fire Bird R20", 85000));

console.table(products);
