
function foto(imagen) {
    document.querySelector(".datacion").removeAttribute("hidden")
    if (imagen === "docker") {
        imagenCentral.src = "images/docker.png"
        imagenCentral.classList.add("animacion");
        textoCentral.innerHTML = "Información sobre docker"
    } else if (imagen === "git") {
        imagenCentral.src = "images/git.png"
        imagenCentral.classList.add("animacion");
        textoCentral.innerHTML = "Información sobre git"
    }

  let imagenFlexa = document.querySelector('.flexa');
  imagenFlexa.style.animation = 'desvanecer 0.5s ease';
  ajustarFooter();
  setTimeout(function () {
    imagenFlexa.style.animation = 'aparecerDesdeArriba 1s ease';
    imagenFlexa.style.display = 'block';
    imagenFlexa.classList.remove('oculto');
  }, 500); 
}

function ajustarFooter() {
    let contenido = document.querySelector('main');
    let footer = document.querySelector('footer');
    footer.removeAttribute("hidden");

    let alturaContenido = contenido.clientHeight;
    let alturaVentana = window.innerHeight;

    if (alturaContenido < alturaVentana) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
    } else {
        footer.style.position = 'static';
    }
}