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
products.push(new Producto("Reloj Caballero", 2000, "Lemon", "Negro"));
products.push(new Producto("Reloj Dama", 2500, "Casio", "Rosa"));
products.push(new Producto("Mate imperial", 5500, "MateCampo", "Negro"));

// Se creo un constructor de objetos de servicios
class Servicio {
  constructor(tipo, costo, descripcion) {
    this.id = services.length + 1;
    this.tipo = tipo;
    this.costo = costo;
    this.descripcion = descripcion;
  }
}
services.push(
  new Servicio("compostura", 2000, "todo tipo de composturas     ")
);
services.push(
  new Servicio("Reparacion de joyas", 5000, "Reparacion de todo tipo de joyas")
);
services.push(
  new Servicio(
    "reparacion de relojes",
    6000,
    "Reparacion de todo tipo de relojes"
  )
);

function addProducto() {
  let titulo = prompt("Ingrese el titulo del producto");
  let precio = parseFloat(prompt("Ingrese el precio del producto"));
  while (isNaN(precio)) {
    precio = parseFloat(
      prompt("Error, eso no es un numero, intentelo otra vez :")
    );
  }
  let marca = prompt("Ingrese la marca del producto");
  let color = prompt("Ingrese el color del producto");
  products.push(new Producto(titulo, precio, marca, color));
  console.table(products);
}
function addServices() {
  let tipo = prompt("Ingrese el nombre del ervicio");
  let precio = parseFloat(prompt("Ingrese el precio del Servicio"));
  while (isNaN(precio)) {
    precio = parseFloat(
      prompt("Error, eso no es un numero, intentelo otra vez :")
    );
  }
  let descripcion = prompt("Ingrese una descripcion del servicio");
  services.push(new Servicio(tipo, precio, descripcion));
  console.table(services);
}

let opcion = prompt(
  "Ingrese la opcion \n 1. Agregar un producto \n 2. Agregar un Servicio \n X. Salir"
);
while (opcion != "X") {
  switch (opcion) {
    case "1":
      addProducto();
      break;
    case "2":
      addServices();
      break;
    case "X":
      break;
    default:
      alert("No se encontro la opcion que ingreso, vuelva a intentarlo");
      break;
  }
  opcion = prompt(
    "Ingrese la opcion \n 1. Agregar un producto \n 2. Agregar un Servicio \n X. Salir"
  );
}
