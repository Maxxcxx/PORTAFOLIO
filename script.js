// Espera a que el DOM se cargue completamente antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header"); // Encabezado
    const btnSubir = document.getElementById("btnSubir"); // Botón de subir

    // Función que maneja el scroll para sticky header y botón de subir
    function manejarScroll() {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

        if (btnSubir) {
            btnSubir.style.display = window.scrollY > 300 ? "block" : "none";
        }
    }

    // Optimización: debounce para mejorar rendimiento
    let timeout;
    window.addEventListener("scroll", () => {
        clearTimeout(timeout);
        timeout = setTimeout(manejarScroll, 50);
    });

    // Evento para el botón de subir arriba
    if (btnSubir) {
        btnSubir.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Scroll suave para enlaces de navegación
    document.querySelectorAll("nav ul li a").forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            const destino = document.querySelector(enlace.getAttribute("href"));
            if (destino) {
                destino.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

