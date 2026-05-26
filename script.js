document.addEventListener('DOMContentLoaded', () => {

// ===== SLIDER (CORREGIDO) =====
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    let slideInterval; // Variable para guardar el temporizador

    if (prevBtn && nextBtn && slides.length > 0) {

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // Función para iniciar/reiniciar el auto-cambio
        function startAutoSlide() {
            // Primero limpiamos cualquier intervalo que exista para que no se dupliquen
            clearInterval(slideInterval); 
            // Creamos uno nuevo
            slideInterval = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 5000);
        }

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showSlide(currentSlide + 1);
            startAutoSlide(); // Al hacer clic, reiniciamos el contador de 5 segundos
        });

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showSlide(currentSlide - 1);
            startAutoSlide(); // Al hacer clic, reiniciamos el contador de 5 segundos
        });

        // Iniciamos el slider por primera vez
        startAutoSlide();
    }

    // ===== MODAL =====
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModal = document.getElementById("closeModal");

    if (modal && modalImg && closeModal) {

        // GALERÍA
        document.querySelectorAll(".gallery-grid img").forEach(img => {
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = img.src;
            });
        });

        // SERVICIOS (por si también querés que funcione ahí)
        document.querySelectorAll(".service-img").forEach(img => {
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = img.src;
            });
        });

        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        modal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

});

document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.2 // Se activa cuando el 20% de la sección es visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((target) => observer.observe(target));
});

document.addEventListener("DOMContentLoaded", function() {
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.service-card');
                cards.forEach((card, index) => {
                    // Crea el efecto de cascada (la 1ra tarjeta 0ms, 2da 200ms, 3ra 400ms...)
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200); 
                });
                // Una vez que aparecen, dejamos de observar la sección
                serviceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const servicesSection = document.querySelector('.services-grid');
    if (servicesSection) {
        serviceObserver.observe(servicesSection);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('menu-open');
    const closeBtn = document.getElementById('menu-close');
    const sidebar = document.getElementById('sidebar');

    // Abrir y cerrar manual (los botones)
    if(openBtn && closeBtn && sidebar) {
        openBtn.addEventListener('click', () => sidebar.classList.add('active'));
        closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));

        // NUEVO: Cerrar al hacer clic en cualquier opción
        const links = sidebar.querySelectorAll('ul li a');
        links.forEach(l => {
            l.addEventListener('click', () => sidebar.classList.remove('active'));
        });
    }
    
    // ... resto de tus funciones (Slider, etc) ...
});

document.addEventListener('DOMContentLoaded', () => {
    const promoSection = document.querySelector('.promo-section');
    const promoCard = document.querySelector('.promo-card');
    const promoPrice = document.querySelector('.promo-price');
    const sparkleContainer = document.querySelector('.promo-sparkles');

    if (!promoSection || !promoCard || !promoPrice || !sparkleContainer) {
        return;
    }

    function popPrice() {
        promoPrice.classList.remove('promo-pop');
        void promoPrice.offsetWidth;
        promoPrice.classList.add('promo-pop');
    }

    popPrice();
    setInterval(popPrice, 3600);
    promoCard.addEventListener('mouseenter', popPrice);

    for (let i = 0; i < 12; i += 1) {
        const sparkle = document.createElement('span');
        sparkle.className = 'promo-sparkle';
        sparkle.style.setProperty('--sparkle-left', `${Math.random() * 95}%`);
        sparkle.style.setProperty('--sparkle-top', `${Math.random() * 90}%`);
        sparkle.style.setProperty('--sparkle-size', `${Math.random() * 5 + 3}px`);
        sparkle.style.setProperty('--sparkle-delay', `${Math.random() * 3.8}s`);
        sparkle.style.setProperty('--sparkle-duration', `${Math.random() * 2 + 3.6}s`);
        sparkleContainer.appendChild(sparkle);
    }

    promoCard.addEventListener('mousemove', (event) => {
        const rect = promoCard.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 6;
        const rotateX = (0.5 - y) * 6;
        promoCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    promoCard.addEventListener('mouseleave', () => {
        promoCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});