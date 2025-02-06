// Ejecuta el código cuando todo el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var whatsappButton = document.querySelector(".whatsapp-button");

    // Aseguramos que el botón de WhatsApp esté visible desde el inicio
    whatsappButton.style.display = 'block';  // Asegura que el botón de WhatsApp esté visible

    // Solo aplicar la lógica de scroll si el ancho de la ventana es mayor a 966px
    if (window.innerWidth > 966) {
        // Verifica el estado del scroll inicial para el navbar
        if (window.pageYOffset > 50) {
            navbar.classList.add("scrolled");  // Solo añadir la clase si el scroll es mayor de 50px
        } else {
            navbar.classList.remove("scrolled");  // Eliminar la clase si el scroll está en la parte superior
        }

        // Evento de scroll para manejar la visibilidad del navbar
        window.onscroll = function() {
            if (window.pageYOffset > 50) {  // Detecta si has hecho scroll más de 50 píxeles
                navbar.classList.add("scrolled");  // Añade la clase "scrolled"
            } else {
                navbar.classList.remove("scrolled");  // Elimina la clase "scrolled" si el scroll vuelve a la parte superior
            }
        };

        // Inicializa AOS solo en pantallas mayores de 966px
        AOS.init({
            duration: 1200, // Duración de la animación
            once: true     // Ejecutar solo una vez
        });
    } else {
        // Si la pantalla es menor a 966px, elimina las animaciones AOS (no se inicializa)
        document.querySelectorAll('[data-aos]').forEach(function(element) {
            element.removeAttribute('data-aos');  // Elimina el atributo data-aos
        });
    }

    // Inicializa el carrusel de testimonios (si se usa en tu página)
    $(".testimonial-carousel").owlCarousel({
        loop: true,               // Repite el carrusel infinitamente
        margin: 30,               // Espacio entre los elementos
        nav: false,               // Deshabilitar las flechas de navegación
        autoplay: true,           // Activa el desplazamiento automático
        autoplayTimeout: 3000,    // Tiempo entre cada desplazamiento (3 segundos)
        autoplayHoverPause: true, // Pausar cuando el ratón esté sobre el carrusel
        items: 1,                 // Mostrar un solo testimonio a la vez
        animateOut: 'slideOutLeft' // Animación de deslizamiento hacia la izquierda
    });
});
