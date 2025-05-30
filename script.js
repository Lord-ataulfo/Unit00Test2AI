// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('#navbar .nav-links');
    const navLinkItems = document.querySelectorAll('#navbar .nav-links a');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Cambiar icono de hamburguesa a X y viceversa
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                mobileMenuToggle.setAttribute('aria-label', 'Cerrar menú');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                mobileMenuToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });
    }

    // Cerrar menú móvil al hacer clic en un enlace
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                mobileMenuToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });
    });


    // Opcional: Navbar que cambia de estilo al hacer scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)'; // Un poco más opaco al scrollear
        } else {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.85)';
        }
    });

    // Formulario de contacto (solo simulación de envío)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Aquí iría la lógica para enviar los datos del formulario (AJAX, Fetch API, etc.)
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            contactForm.reset(); // Limpiar el formulario
        });
    }

});