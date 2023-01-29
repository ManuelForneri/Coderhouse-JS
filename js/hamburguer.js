var btn = document.getElementById("hamburger"),
  list = document.getElementById("list"),
  contador = 0;

btn.addEventListener("click", Cambio, "true");

function Cambio() {
  if (contador == 0) {
    list.classList.add("open-ul");
    contador = 1;
  } else {
    list.classList.remove("open-ul");
    contador = 0;
  }
}
