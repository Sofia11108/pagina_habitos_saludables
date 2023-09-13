// ver más - ver menos
const verMasBtns = document.querySelectorAll('.verMasBtn');

verMasBtns.forEach((boton) => {
  boton.addEventListener('click', (event) => {
    const contenedor = event.currentTarget.closest('.card');
    const informacionExtra = contenedor.querySelector('.informacionExtra');

    const estiloInformacion = window.getComputedStyle(informacionExtra);

    if (estiloInformacion.display === 'none') {
      informacionExtra.style.display = 'flex';
      boton.textContent = 'Ver menos';
    } else {
      informacionExtra.style.display = 'none';
      boton.textContent = 'Ver más';
    }
  });
});


// carrusel
const imagenes = document.querySelectorAll('.imagen');
let grupoActual = 0;

function mostrarGrupo(grupoActual) {
  for (let i = 0; i < imagenes.length; i++) {
    console.log("grupo cfr" + grupoActual);
    console.log("indice cfr" + i);
    console.log("");
    if (i >= grupoActual && i < grupoActual + 3) {
      imagenes[i].classList.remove('img-oculta');
    } else {
      imagenes[i].classList.add('img-oculta');
    }
  }
}

function avanzarGrupo() {
  grupoActual = (grupoActual + 3) % imagenes.length;
  mostrarGrupo(grupoActual);
}

mostrarGrupo(grupoActual);
setInterval(avanzarGrupo, 3500); // Cambia de grupo cada 3 segundos

