// ===== LOADER =====
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        const lazyBackgrounds = document.querySelectorAll('[data-bg]');
        lazyBackgrounds.forEach(bg => {
            bg.style.backgroundImage = `url('${bg.dataset.bg}')`;
        });
    }, 100);
    
    setTimeout(() => {
        loader.classList.add('hidden');
        loaderFinished = true;
        
        setTimeout(() => {
            const activeSlide = document.querySelector('.hero-slide.active');
            if (activeSlide) {
                animateSlideContent(activeSlide);
            }
        }, 300);
    }, 1500);
    
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });
});

// ===== SCROLL HEADER BACKGROUND =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    menuToggle.classList.add('active');
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
});

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
}

// ===== HERO SLIDER =====
const heroSlider = document.getElementById('heroSlider');
const slides = document.querySelectorAll('.hero-slide');

let currentSlide = 0;
let autoSlideInterval;
let loaderFinished = false;

function animateSlideContent(slide) {
    if (!loaderFinished) return;
    
    const elements = slide.querySelectorAll('.hero-subtitle, .diamond-divider, .hero-title, .hero-description, .hero-cta');
    elements.forEach(el => {
        el.classList.remove('animate');
        void el.offsetWidth;
        el.classList.add('animate');
    });
}

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        const elements = slide.querySelectorAll('.hero-subtitle, .diamond-divider, .hero-title, .hero-description, .hero-cta');
        elements.forEach(el => el.classList.remove('animate'));
    });
    
    slides[currentSlide].classList.add('active');
    
    setTimeout(() => {
        animateSlideContent(slides[currentSlide]);
    }, 100);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
    resetAutoSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
    resetAutoSlide();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlide();
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 8000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

startAutoSlide();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.8s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.coffee-card, .service-card').forEach(el => {
    observer.observe(el);
});

// ===== VIEW MENU BUTTONS =====
document.querySelectorAll('.coffee-card-menu-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const menuSection = document.querySelector('#menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
