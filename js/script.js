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

    const highlightNav = () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Ajusta este valor según tu diseño (altura del header + algo extra)
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('.nav-link').getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Llama al inicio para establecer la sección activa si ya se cargó la página con scroll

    // Opcional: Suavizar el scroll para enlaces internos (aunque scroll-behavior: smooth ya ayuda)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});