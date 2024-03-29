/* Creando dos arreglos vacíos. */
const products = [];

/* Crea un nuevo objeto de producto con una identificación única, un título y un precio. */

class Producto {
  constructor(titulo, precio, image) {
    this.id = products.length + 1;
    this.titulo = titulo;
    this.precio = precio;
    this.image = image;
  }
}
products.push(
  new Producto(
    "Mountain bike Battle 210 R29",
    80000,
    "../assets/mountainBike210.webp"
  )
);
products.push(
  new Producto("Bicicleta Silverfox 2021 M", 75689, "../assets/silverFox.webp")
);
products.push(
  new Producto(
    "Mountain Bike Thunder Sky Rodado 29",
    66799,
    "../assets/MountainBikeThunderSky.webp"
  )
);
products.push(
  new Producto(
    "Mountain bike TopMega Sunshine R29",
    86899,
    "../assets/mountainBikeTopMega.webp"
  )
);
products.push(
  new Producto(
    "Mountain bike Shifter",
    64999,
    "../assets/MountainBikeShifter.webp"
  )
);
products.push(
  new Producto(
    "Mountain bike SLP 5 pro R29 18",
    79376,
    "../assets/MountainbikeSLP5pro.webp"
  )
);
products.push(
  new Producto(
    "Bicicleta paseo femenina Futura",
    51838,
    "../assets/BicicletaFuturaCountryR26.webp"
  )
);
products.push(
  new Producto(
    "Mountain bike Olmo Wish 290",
    94499,
    "../assets/MountainbikeOlmoWish290.webp"
  )
);
products.push(
  new Producto(
    "Bicicleta plegable Fire Bird R20",
    85000,
    "../assets/BicicletaPlegableFireBirdR20.webp"
  )
);
products.push(
  new Producto(
    "Bicicleta Ghepard X 2.0 Mtb R29 Shimano Aluminio Slp Disco",
    88916,
    "../assets/BicicletaGhepardX2.0MtbR29.webp"
  )
);

console.table(products);

/* Crear una nueva tarjeta para cada producto en la matriz de productos. */
for (i = 0; i < products.length; i++) {
  let contenedorProductos = document.querySelector(".container-grid-products");

  let newCard = `
  <div class="product-card animated fadeIn">
  <img src="${products[i].image}" alt="" class="imagenes" />
  <p class="title-product">${products[i].titulo}</p>
  <p class="product-price">${products[i].precio}</p>
  <input
    id="button-${products[i].id}"
    type="button"
    class="btn-compra"
    value="Comprar"
    onclick="addShoppingCart(${products[i].id})"
  />
</div>`;
  contenedorProductos.innerHTML += newCard;
}

sessionStorage.setItem("productos", JSON.stringify(products));

function addShoppingCart(id) {
  let prod = sessionStorage.getItem("productos", products);
  let shoppingCart = [];
  let arr = [];
  let cart = JSON.parse(localStorage.getItem("Carrito de Compras"));
  arr = JSON.parse(prod);

  if (cart === null) {
    shoppingCart.push(arr[id - 1]);
    localStorage.setItem("Carrito de Compras", JSON.stringify(shoppingCart));
  } else {
    cart.forEach((p) => {
      shoppingCart.push(p);
    });
    shoppingCart.push(arr[id - 1]);
    localStorage.setItem("Carrito de Compras", JSON.stringify(shoppingCart));
  }
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "su producto se añadio al carrito",
    showConfirmButton: false,
    timer: 1500,
    backdrop: false,
  });
}
