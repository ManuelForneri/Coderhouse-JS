function serchProducto() {}
function servicios() {}

const products = [];

class Producto {
  constructor(id, titulo, precio, marca, color) {
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
products.push(new Producto("Mate imperial", "5300", "MateCampo", "Marron"));

let opcion = prompt(
  "Ingrese la opcion \n 1. Ver productos \n 2. Mayor de las edades \n 3. Menor de las edades \n X. Salir"
);
while (opcion != "X") {
  switch (opcion) {
    case "1":
      serchProducto();
      break;
    case "2":
      servicios();
      break;
    case "3":
      break;
    case "X":
      break;
    default:
      alert("No se encontro la opcion que ingreso, vuelva a intentarlo");
      break;
  }
  opcion = prompt(
    "Ingrese la opcion de la operacion que desea realizar \n 1. Promedio de edades \n 2. Mayor de las edades \n 3. Menor de las edades \n X. Salir"
  );
}
