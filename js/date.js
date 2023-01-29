/* Obtener el elemento con el id "anio" y establecer el texto interno en el año actual. */
const a = new Date();
footer = document.querySelector(".footer");

footer.innerHTML += `
<div>
        Designed & Developed by Manuel Forneri -
        <span class="anio">${a.getFullYear()}</span>
      </div>
      <div class="redes-container">
        <div>
          <a target="_blank" href="#" aria-label="Facebook"
            ><i class="fa-brands fa-linkedin hover-linkedin"></i></a>
        </div>
        <div>
          <a target="_blank" href="#" aria-label="instagram"
            ><i class="fa-brands fa-instagram hover-instagram redes"></i
          ></a>
        </div>
        <div>
          <a target="_blank" href="#" aria-label="Whatsapp"
            ><i class="fa-brands fa-whatsapp hover-whatsapp redes"></i
          ></a>
        </div>
      </div>
      <p>Siguenos en nuestras redes</p>
`;
