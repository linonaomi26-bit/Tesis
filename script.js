const botonSubir = document.getElementById("subir");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botonSubir.style.display = "block";
    } else {
        botonSubir.style.display = "none";
    }
});

botonSubir.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Animación al hacer scroll
const elementos = document.querySelectorAll(".card, .contenedor h2, .lista li");

const observar = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach((elemento) => {
    elemento.style