let shop = JSON.parse(localStorage.getItem("Carrito de Compras"));

for (i = 0; i < shop.length; i++) {
  let contenedorCarrito = document.querySelector(".container-shoppingCart");
  let newShop = ` <div class="shop-card animated fadeIn">
        <div class="middle">
            <img src="${shop[i].image}" alt="" class="imagenes" />
        </div>
        <div class="middle">
            <p class="title-product">${shop[i].titulo}</p>
            <p class="product-price">${shop[i].precio}</p>
            <input
                id="button-${shop[i].id}"
                type="button"
                class="btn-eliminar"
                value="Eliminar"
                onclick=""
            />
        </div>
    </div>
      `;
  contenedorCarrito.innerHTML += newShop;
}
function vaciar() {
  localStorage.clear();
  let contenedorCarrito = document.querySelector(".container-shoppingCart");
  contenedorCarrito.innerHTML = "";
}
