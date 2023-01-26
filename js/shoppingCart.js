/* Esto es obtener el almacenamiento local y establecer el total en 0. */
let shop = JSON.parse(localStorage.getItem("Carrito de Compras"));
let total = document.getElementById("total");
let t = 0;
const contenedorCarrito = document.querySelector(".container-shoppingCart");

/* Creando un nuevo div para cada artículo en el carrito de compras. */
for (i = 0; i < shop.length; i++) {
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
                onclick='eliminarProducto(${i})'
            />
        </div>
    </div>
      `;
  contenedorCarrito.innerHTML += newShop;
}
total.innerText = `Total : $${t}`;

/**
 * Limpia el almacenamiento local y el carrito de compras.
 */
function vaciar() {
  Swal.fire({
    title: "Seguro que quiere borrar todos los productos del carrito?",
    text: "¡No podrás revertir esto!",
    icon: "warning",

    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      localStorage.clear();
      contenedorCarrito.innerHTML = "";
      total.innerText = "Total : $0";
    }
  });
}
/**
 * Es una función que borra el almacenamiento local y el carrito de compras cuando el usuario hace clic
 * en el botón "comprar".
 */

function comprar() {
  Swal.fire({
    title: "Quiere comprar estos productos?",
    text: "",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Gracias por su compra!",
        "Pronto le llegara informacion a su Email",
        "success"
      );
      localStorage.clear();
      let contenedorCarrito = document.querySelector(".container-shoppingCart");
      contenedorCarrito.innerHTML = "";
      total.innerText = "Total : $0";
    }
  });
}

function eliminarProducto(posicion) {
  let newArr = [];
  Swal.fire({
    title: "Seguro que quiere eliminar el producto?",
    text: "¡No podrás revertir esto!",
    icon: "warning",

    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Eliminado!",
        "su producto se elimino correctamente.",
        "success"
      );
      contenedorCarrito.innerHTML = "";
      for (i = 0; i < shop.length; i++) {
        if (shop.length > 1) {
          if (i != posicion) {
            newArr.push(shop[i]);
          }
        } else {
          if (i == posicion) {
            newArr = [];
          }
        }
      }
      localStorage.setItem("Carrito de Compras", JSON.stringify(newArr));
      t = 0;
      for (i = 0; i < newArr.length; i++) {
        t += newArr[i].precio;
        let newShop = ` <div class="shop-card animated fadeIn">
              <div class="middle">
                  <img src="${newArr[i].image}" alt="" class="imagenes" />
              </div>
              <div class="middle">
                  <p class="title-shop">${newArr[i].titulo}</p>
                  <p class="product-price-shop">$${newArr[i].precio}</p>
                  <input
                      id="button-${newArr[i].id}"
                      type="button"
                      class="btn-eliminar"
                      value="Eliminar"
                      onclick='eliminarProducto(${i})'
                  />
              </div>
          </div>
            `;
        contenedorCarrito.innerHTML += newShop;
      }
      total.innerText = `Total : $${t}`;
    }
  });
}
