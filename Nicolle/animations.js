// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animaciones de entrada
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, starting animations');
    
    // Animación principal del hero
    gsap.to(".fade-in-up", {
        scrollTrigger: {
            trigger: ".fade-in-up",
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false // Cambiar a true para debugging
        },
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power2.out"
    });

    // Animación para elementos del menú
    gsap.to(".menu-item", {
        scrollTrigger: {
            trigger: ".menu-item",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        duration: 0.8,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });
    gsap.to(".testimonial-item", {
        scrollTrigger: {
            trigger: ".testimonial-item",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        duration: 4,
        y: 0,
        opacity: 1,
        stagger: 0.4,
        ease: "back.out(1.7)"
    });
    // Animación para elementos hover-scale
    gsap.to(".hover-scale", {
        scrollTrigger: {
            trigger: ".hover-scale",
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        duration: 0.6,
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });

    // Animación para las tarjetas de testimonios
    gsap.to(".testimonial-card, .testimonial-card-2, .testimonial-card-3", {
        scrollTrigger: {
            trigger: ".testimonial-card",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 0.8,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Animación para el video
    gsap.to(".video-container", {
        scrollTrigger: {
            trigger: ".video-container",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "power2.out"
    });

    // Animación para recomendaciones
    gsap.to(".recommendation-item", {
        scrollTrigger: {
            trigger: ".recommendation-item",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        duration: 5,
        x: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power2.out"
    });

    // Animación para elementos con clase gsap-fade
    gsap.to(".gsap-fade", {
        scrollTrigger: {
            trigger: ".gsap-fade",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 0.6,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power2.out"
    });

    // Carousel dots interaction
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            
            // Animación del dot seleccionado
            gsap.to(dot, {
                duration: 0.3,
                scale: 1.4,
                ease: "back.out(1.7)",
                yoyo: true,
                repeat: 1
            });
        });
    });

    // Smooth scroll para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: target,
                    ease: "power2.inOut"
                });
            }
        });
    });

    // Animación para botones
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.05,
                y: -3,
                ease: "power2.out"
            });
        });

        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                y: 0,
                ease: "power2.out"
            });
        });
    });

    // Animación de entrada para el logo
    gsap.from("nav h1", {
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "power2.out"
    });

    // Animación para el menú de navegación
    gsap.from("nav ul li", {
        duration: 1.5,
        y: -20,
        opacity: 0,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out"
    });

    // Animación para el botón de orden
    gsap.from("nav button", {
        duration: 0.8,
        scale: 0,
        opacity: 0,
        delay: 1,
        ease: "back.out(1.7)"
    });
    document.querySelectorAll('.stars').forEach(starContainer => {
    const stars = Array.from(starContainer.querySelectorAll('.star'));
    let selected = -1;

    stars.forEach((star, idx) => {
        // Hover visual
        star.addEventListener('mouseenter', () => {
            stars.forEach((s, i) => {
                s.classList.toggle('selected', i <= idx);
            });
        });
        // Al hacer clic, fija la selección
        star.addEventListener('click', () => {
            selected = idx;
            stars.forEach((s, i) => {
                s.classList.toggle('selected', i <= selected);
                s.dataset.selected = i <= selected ? "true" : "false";
            });
        });
    });

    // Al salir del contenedor, restaura la selección fija
    starContainer.addEventListener('mouseleave', () => {
        stars.forEach((s, i) => {
            s.classList.toggle('selected', i <= selected);
        });
    });
});

    const btn = document.getElementById('search-btn');
    const input = document.getElementById('search-input');
    if (btn && input) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (input.style.width === '10rem') {
                input.style.width = '0';
                input.style.opacity = '0';
            } else {
                input.style.width = '10rem';
                input.style.opacity = '1';
                input.focus();
            }
        });
        document.addEventListener('click', function(e) {
            if (input.style.width !== '10rem') return;
            if (!document.getElementById('search-container').contains(e.target)) {
                input.style.width = '0';
                input.style.opacity = '0';
            }
        });
    }

    // Animación secuencial de aparición
    const fadeEls = document.querySelectorAll('.gsap-fade');
    gsap.set(fadeEls, {opacity: 0, y: 40});
    gsap.to(fadeEls, {
        opacity: 1,
        y: 0,
        duration: 3,
        stagger: 0.3,
        ease: "power2.out"
    });
});



// Animaciones adicionales al hacer scroll


// Refresh ScrollTrigger cuando se redimensiona la ventana
window.addEventListener('resize', function() {
    ScrollTrigger.refresh();
});

// Debug: Verificar que GSAP y ScrollTrigger están cargados
console.log('GSAP loaded:', typeof gsap !== 'undefined');
console.log('ScrollTrigger loaded:', typeof ScrollTrigger !== 'undefined');

// Variables del carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
let autoPlayInterval;

// Función para mostrar un slide específico
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'next');
    });
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    // Calcular índices anterior y siguiente
    const prevIndex = (index - 1 + slides.length) % slides.length;
    const nextIndex = (index + 1) % slides.length;

    slides[prevIndex].classList.add('prev');
    slides[nextIndex].classList.add('next');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    resetAutoPlay();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    resetAutoPlay();
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    resetAutoPlay();
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 3250);
}

function pauseAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Agregar dentro del DOMContentLoaded existente:
// Inicializar el carousel
showSlide(0);
startAutoPlay();


// Animación para botones de navegación
gsap.from(".carousel-nav", {
    duration: 0.8,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    delay: 1.5,
    ease: "back.out(1.7)"
});

// Control con teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'ArrowRight') nextSlide();
});

// Soporte táctil
let startX = 0, endX = 0;

if (document.querySelector('.carousel-container')) {
    document.querySelector('.carousel-container').addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    document.querySelector('.carousel-container').addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
        }
    });
}


document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});

// Animación de telón
gsap.to("#curtain-left", {
    x: "-100vw",
    duration: 2, // Más lento
    ease: "power2.inOut"
});
gsap.to("#curtain-right", {
    x: "100vw",
    duration: 2, // Igual que el izquierdo para simetría
    ease: "power2.inOut",
    onComplete: function() {
        document.getElementById('curtain-left').style.display = "none";
        document.getElementById('curtain-right').style.display = "none";
    }
});

