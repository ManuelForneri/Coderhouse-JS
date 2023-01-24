let shop = JSON.parse(localStorage.getItem("Carrito de Compras"));
let total = document.getElementById("total");
let t = 0;

for (i = 0; i < shop.length; i++) {
  let contenedorCarrito = document.querySelector(".container-shoppingCart");
  t += shop[i].precio;
  let newShop = ` <div class="shop-card animated fadeIn">
        <div class="middle">
            <img src="${shop[i].image}" alt="" class="imagenes" />
        </div>
        <div class="middle">
            <p class="title-shop">${shop[i].titulo}</p>
            <p class="product-price-shop">$${shop[i].precio}</p>
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
total.innerText = `Total : $${t}`;
function vaciar() {
  localStorage.clear();
  let contenedorCarrito = document.querySelector(".container-shoppingCart");
  contenedorCarrito.innerHTML = "";
  total.innerText = "Total : $0";
}
