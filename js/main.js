/* Creando dos arreglos vacíos. */
const products = [];
const shoppingCart = [];

/* Crea un nuevo objeto de producto con una identificación única, un título y un precio. */

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

/* Un bucle for que itera a través de la matriz de productos y establece el texto interno de los
elementos con el nombre de clase "título-producto" en el título del producto y el texto interno de
los elementos con el nombre de clase "precio-producto" en el precio del producto. */

for (i = 0; i < products.length; i++) {
  let titulos = document.getElementsByClassName("title-product");
  let precio = document.getElementsByClassName("product-price");
  titulos[i].innerText = products[i].titulo;
  precio[i].innerText = "$" + products[i].precio;
}

/* Obtener el elemento con el id "anio" y establecer el texto interno en el año actual. */
anio = document.getElementById("anio");
a = new Date();
anio.innerText = a.getFullYear();

/**
 * Toma la identificación del producto que desea agregar al carrito de compras, luego obtiene los
 * productos del almacenamiento de la sesión, luego analiza los productos en una matriz, luego empuja
 * el producto a la matriz del carrito de compras, luego establece el matriz de carrito de compras al
 * almacenamiento local.
 * @param id - la identificación del producto
 */
sessionStorage.setItem("productos", JSON.stringify(products));

function addShoppingCart(id) {
  let prod = sessionStorage.getItem("productos", products);
  let arr = [];
  arr = JSON.parse(prod);
  shoppingCart.push(arr[id - 1]);
  localStorage.setItem("Carrito de Compras", JSON.stringify(shoppingCart));

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "su producto se añadio al carrito",
    showConfirmButton: false,
    timer: 1501,
    backdrop: false,
  });
}
