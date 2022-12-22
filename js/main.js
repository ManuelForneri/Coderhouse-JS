const products = [];
const services = [];
// Se creo un constructor de objetos de productos

class Producto {
  constructor(titulo, precio, marca, color) {
    this.id = products.length + 1;
    this.titulo = titulo;
    this.precio = precio;
    this.marca = marca;
    this.color = color;
  }
}
products.push(new Producto("Reloj Caballero", "2000", "Lemon", "Negro"));
products.push(new Producto("Reloj Dama", "2500", "Casio", "Rosa"));
products.push(new Producto("Mate imperial", "5500", "MateCampo", "Negro"));

// Se creo un constructor de objetos de servicios
class Servicios {
  constructor(tipo, costo, descripcion) {
    this.id = services.length + 1;
    this.tipo = tipo;
    this.costo = costo;
    this.descripcion = descripcion;
  }
}
products.push(
  new Servicios("compostura", 2000, "todo tipo de composturas     ")
);
products.push(
  new Servicios("Reparacion de joyas", 5000, "Reparacion de todo tipo de joyas")
);
products.push(
  new Servicios(
    "reparacion de relojes",
    6000,
    "Reparacion de todo tipo de relojes"
  )
);

function addProducto() {
  let titulo = prompt("Ingrese el titulo del producto");
  let precio = prompt("Ingrese el precio del producto");
  let marca = prompt("Ingrese la marca del producto");
  let color = prompt("Ingrese el color del producto");
  products.push(new Producto(titulo, precio, marca, color));
  console.log(products);
}
function addServices() {}
function viewAll() {}

let opcion = prompt(
  "Ingrese la opcion \n 1. Agregar un producto \n 2. Agregar un Servicio \n 3. Ver todo \n X. Salir"
);
while (opcion != "X") {
  switch (opcion) {
    case "1":
      addProducto();
      break;
    case "2":
      addServices();
      break;
    case "3":
      viewAll();
      break;
    case "X":
      break;
    default:
      alert("No se encontro la opcion que ingreso, vuelva a intentarlo");
      break;
  }
  opcion = prompt(
    "Ingrese la opcion \n 1. Agregar un producto \n 2. Agregar un Servicio \n 3. Ver todo \n X. Salir"
  );
}
