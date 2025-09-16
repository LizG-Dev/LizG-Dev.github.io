function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        let barras = document.querySelectorAll(".progreso");
        barras.forEach((barra) => {
            barra.classList.add("active");
        });
    }
}

window.addEventListener("scroll", efectoHabilidades);