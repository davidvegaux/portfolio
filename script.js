// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.setAttribute('data-feather', 'moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.setAttribute('data-feather', 'sun');
        localStorage.setItem('theme', 'dark');
    }
    
    // Re-render the icon
    feather.replace();
}

// Load saved theme and initialize icons
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.setAttribute('data-feather', 'sun');
    }
    
    // Initialize Feather icons
    feather.replace();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Download CV function
function downloadCV() {
    // Aquí puedes agregar la URL de tu CV o crear un enlace de descarga
    alert('CV en desarrollo - próximamente disponible para descarga');
}

// Efecto de desenfoque para project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectGrid = document.querySelector('.project-grid');
    
    if (projectGrid && projectCards.length > 0) {
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Desenfocar todos los cards
                projectCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.add('blurred');
                    }
                });
                // Enfocar el card actual
                card.classList.add('focused');
            });
            
            card.addEventListener('mouseleave', function() {
                // Quitar todas las clases de efectos
                projectCards.forEach(otherCard => {
                    otherCard.classList.remove('blurred', 'focused');
                });
            });
        });
    }
});

// Typewriter effect
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.querySelector('.typewriter-text');
    if (typewriterElement) {
        const skills = [
            'user research',
            'user journey mapping', 
            'wireframing',
            'vibe coding',
            'design systems',
            'benchmarking'
        ];
        
        const colors = [
            'var(--vegeta)',
            'var(--seiya)',
            'var(--saiyajin)',
            'var(--piccolo)',
            'var(--beerus)',
            'var(--samurai-x)'
        ];
        
        let currentSkillIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;
        
        function typeWriter() {
            const currentSkill = skills[currentSkillIndex];
            const currentColor = colors[currentSkillIndex];
            
            // Set color for current skill
            typewriterElement.style.color = currentColor;
            typewriterElement.style.borderColor = currentColor;
            
            if (isDeleting) {
                typewriterElement.textContent = currentSkill.substring(0, currentCharIndex - 1);
                currentCharIndex--;
                typeSpeed = 50; // Faster when deleting
            } else {
                typewriterElement.textContent = currentSkill.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                typeSpeed = 100; // Normal speed when typing
            }
            
            if (!isDeleting && currentCharIndex === currentSkill.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentSkillIndex = (currentSkillIndex + 1) % skills.length;
                typeSpeed = 500; // Pause before next word
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
        
        // Start typewriter effect after a delay
        setTimeout(typeWriter, 2000);
    }
});

// Parallax effect for project image
document.addEventListener('DOMContentLoaded', function() {
    const projectImageContainer = document.querySelector('.project-image-container');
    const projectHeroImage = document.querySelector('.project-hero-image');
    
    if (projectImageContainer && projectHeroImage) {
        let ticking = false;
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            projectHeroImage.style.transform = `translateY(${rate}px)`;
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick);
    }
});

// Project card focus effect
function initProjectCardFocus() {
    const projectGrid = document.querySelector('.project-grid');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectGrid && projectCards.length > 0) {
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                projectGrid.classList.add('has-hover');
                projectCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('is-hovered');
                    }
                });
                card.classList.add('is-hovered');
            });
            
            card.addEventListener('mouseleave', () => {
                projectGrid.classList.remove('has-hover');
                card.classList.remove('is-hovered');
                projectCards.forEach(otherCard => {
                    otherCard.classList.remove('is-hovered');
                });
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initProjectCardFocus();
    initParallaxEffects();
});

// Parallax effects for case study images
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.slide-image, .gallery-image, .tool-image, .avatar-image');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            
            // Only apply parallax if element is in viewport
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Enhanced slider functionality for case study
function initCaseStudySlider() {
    const slides = document.querySelectorAll('.screen-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlideIndex = 0;
    
    if (slides.length === 0) return;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (dots[i]) dots[i].classList.remove('active');
        });
        
        if (slides[index]) {
            slides[index].classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
        }
        currentSlideIndex = index;
    }
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
        const nextIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(nextIndex);
    }, 5000);
    
    // Initialize first slide
    showSlide(0);
}

// Initialize case study slider when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCaseStudySlider();
});

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.persona-card, .problem-card, .solution-card, .design-element');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
});

