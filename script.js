/*
==========================
  COFFEX - COFFEE SHOP WEBSITE
==========================

PROJECT DETAILS
- Name: Coffex – Coffee Shop Website
- Version: 1.0.0
- Description: Modern, fully responsive website template designed for coffee shops, cafes, and premium beverage businesses.

DEVELOPER INFORMATION
- Developer: JohnDev19
- GitHub: https://github.com/JohnDev19

PROJECT METADATA
- Last Update: 2025-08-19
- License: MIT License

TECHNOLOGIES & FRAMEWORKS
- Core: Vanilla JavaScript (ES6+)
- Libraries: AOS (Animate on Scroll)
- Performance: Lazy Background Loading, Optimized Scroll Animations
- Interaction: Smooth Scroll, Hero Slider, Responsive Navigation

==========================
  TABLE OF CONTENTS
==========================
01. Loader Initialization
02. Scroll Header Background
03. Mobile Menu Toggle
04. Hero Slider
05. Smooth Scroll Links
06. Scroll Animations (Intersection Observer)
07. View Menu Button Scroll
==========================
*/

// ===== LOADER =====
console.log('Script loaded and executing');

let loaderFinished = false;

function hideLoader() {
    console.log('hideLoader called');
    const loader = document.getElementById('loader');
    if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
        loaderFinished = true;
        console.log('Loader hidden successfully');
        
        setTimeout(() => {
            const activeSlide = document.querySelector('.hero-slide.active');
            if (activeSlide) {
                animateSlideContent(activeSlide);
            }
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    
    try {
        const lazyBackgrounds = document.querySelectorAll('[data-bg]');
        lazyBackgrounds.forEach(bg => {
            bg.style.backgroundImage = `url('${bg.dataset.bg}')`;
        });
        
        setTimeout(hideLoader, 1500);
        
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out'
        });
    } catch (error) {
        console.error('Error in DOMContentLoaded:', error);
        hideLoader();
    }
});

window.addEventListener('load', function() {
    console.log('window load event fired');
    setTimeout(hideLoader, 100);
});

// ===== SCROLL HEADER BACKGROUND =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const topInfoBar = document.querySelector('.top-info-bar');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        if (topInfoBar) {
            topInfoBar.classList.add('scrolled');
        }
    } else {
        header.classList.remove('scrolled');
        if (topInfoBar) {
            topInfoBar.classList.remove('scrolled');
        }
    }
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    menuToggle.classList.add('active');
    document.body.classList.add('menu-open');
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.classList.remove('menu-open');
});

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.classList.remove('menu-open');
}

// ===== HERO SLIDER =====
const heroSlider = document.getElementById('heroSlider');
const slides = document.querySelectorAll('.hero-slide');

let currentSlide = 0;
let autoSlideInterval;

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

// ===== GO TO TOP BUTTON =====
const goToTopBtn = document.getElementById('goToTop');
const heroSection = document.querySelector('.hero');

function toggleGoToTopButton() {
    const heroHeight = heroSection ? heroSection.offsetHeight : 600;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollPosition > heroHeight) {
        goToTopBtn.classList.add('visible');
    } else {
        goToTopBtn.classList.remove('visible');
    }
}

window.addEventListener('scroll', toggleGoToTopButton);

goToTopBtn.addEventListener('click', function() {
    goToTopBtn.classList.add('flying');
    
    setTimeout(() => {
        goToTopBtn.classList.remove('flying');
    }, 800);
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
