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
});


