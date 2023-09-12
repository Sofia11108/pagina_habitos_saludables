// const imagenes = document.querySelectorAll('.imagen');
// let currentSlide = 0;

// function showImagen(index) {
//   imagenes.forEach(imagen => {
//     imagen.style.display = 'none';
//   });
//   imagenes[index].style.display = 'block';
// }

// function nextimagen() {
//   currentSlide = (currentSlide + 1) % imagenes.length;
//   showImagen(currentSlide);
// }

// // Muestra el primer slide al cargar la página
// showImagen(currentSlide);

// // Inicia el slider automático
// setInterval(nextimagen, 1000);


// const verMasBtns = document.querySelectorAll('.verMasBtn');
// const informacionExtras = document.querySelectorAll('.informacionExtra');

// verMasBtns.forEach((boton, index) => {
//   boton.addEventListener('click', () => {
//     if (informacionExtras[index].style.display === 'none') {
//       informacionExtras[index].style.display = 'flex';
//       boton.textContent = 'Ver menos';
//     } else {
//       informacionExtras[index].style.display = 'none';
//       boton.textContent = 'Ver más';
//     }
//   });
// });

// const verMasBtns = document.querySelectorAll('.verMasBtn');

// verMasBtns.forEach((boton) => {
//   boton.addEventListener('click', (event) => {
//     const contenedor = event.currentTarget.closest('.card');
//     const informacionExtra = contenedor.querySelector('.informacionExtra');

//     if (informacionExtra.style.display === 'none') {
//       informacionExtra.style.display = 'flex';
//       boton.textContent = 'Ver menos';
//     } else {
//       informacionExtra.style.display = 'none';
//       boton.textContent = 'Ver más';
//     }
//   });
// });

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



// const imagenes = document.querySelectorAll('.imagen')
// let contador = 1
// let cantImg = 0
// function funcion() {
//   imagenes.forEach(imagen => {
//     if (imagen.classList.contains('img-oculta')) {
//       cantImg ++
//       if (cantImg <= 2) {
//         contador ++
//       console.log("oculto");
//       // imagen.classList.remove('img-oculta')
//       imagenes[contador].classList.remove('img-oculta')
//       // imagenes[3].classList.remove('img-oculta')
//       }
//       setTimeout(() => {
//         if (cantImg == 2) {
//           let resta = contador - 1
//           console.log("contador " + contador);
//           console.log("resta " + resta);
//           imagenes[resta].classList.add('img-oculta')
//           imagenes[contador].classList.add('img-oculta')
//           cantImg = 0
//   console.log("SI ENTRÖ");
//         }
//       }, 1000);
//       // if (contador == 5) {
//       //   contador = 1
//       // }
//     } else {
//       console.log("visible");
//       imagen.classList.add('img-oculta')
//     }
//   });
// }
// setInterval(funcion, 1000)


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



// const imagenes = document.querySelectorAll('.imagen');
// let contador = 0;

// function mostrarSiguienteImagen() {
//   imagenes[contador].classList.add('img-oculta');
//   contador = (contador + 2) % imagenes.length; // Avanza dos posiciones
//   imagenes[contador].classList.remove('img-oculta');
//   contador = (contador + 1) % imagenes.length; // Avanza una posición
// }

// setInterval(mostrarSiguienteImagen, 3000); // Cambia de imagen cada 3 segundos
