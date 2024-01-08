
function foto(imagen) {

    if (imagen === "docker") {
        imagenCentral.src = "images/docker.png"
        imagenCentral.classList.add("animacion");
        textoCentral.innerHTML = "Información sobre docker"
    } else if (imagen === "git") {
        imagenCentral.src = "images/git.png"
        imagenCentral.classList.add("animacion");
        textoCentral.innerHTML = "Información sobre git"
    } else {
        textoCentral.innerHTML = "Mal aventurados sean a la cuesta de enero"
        imagenCentral.src = "images/cuesta.jpg"
        imagenCentral.classList.remove("animacion");
    }
}

function transicionar(destino) {
    imagenCentral.classList.add("transicion");
    imagenCentral.src = "images/espiral1.jpg"
        setTimeout(cambiar(destino), 3000);
}

function cambiar(destino){
    if (destino === "docker") {
        setTimeout(window.location.href = "docker.html", 3000);
    } else {
        setTimeout(window.location.href = "git.html", 2000);
    }
}