document.addEventListener('DOMContentLoaded', function() {
    // Menú de navegación móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    if (mobileMenu && navbar) {
        mobileMenu.addEventListener('click', function() {
            navbar.classList.toggle('active');
            mobileMenu.classList.toggle('is-active'); // Para animación de hamburguesa
        });

        // Cerrar el menú al hacer clic en un enlace (para móviles)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                mobileMenu.classList.remove('is-active');
            });
        });
    }


    // Actualizar el año en el footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Opcional: Resaltar el enlace de navegación activo al hacer scroll
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-list li');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) { // Ajusta el offset si es necesario
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('.nav-link').getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });

    // Opcional: Suavizar el scroll para enlaces internos (aunque scroll-behavior: smooth ya ayuda)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Opcional: Manejo básico del formulario de contacto (sin backend)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir el envío por defecto

            // Aquí podrías añadir lógica para enviar los datos a un servicio de formularios
            // como Formspree, Netlify Forms, o un backend propio.
            // Por ahora, solo mostraremos un mensaje de éxito.

            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
            contactForm.reset(); // Limpiar el formulario
        });
    }
});