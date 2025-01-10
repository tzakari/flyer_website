// Animation des sections au défilement
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.about-section, .services-section, .projects-section');

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight) {
            section.classList.add('visible');
        }
    });
});

// Carousel des projets
const carouselSlide = document.querySelector('.carousel-slide');
const carouselProjects = document.querySelectorAll('.project');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

// Mise à jour du carousel
function updateCarousel() {
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Bouton "Suivant"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselProjects.length; // Retour au début après le dernier
    updateCarousel();
});

// Bouton "Précédent"
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselProjects.length) % carouselProjects.length; // Retour à la fin avant le premier
    updateCarousel();
});

// Indicateurs cliquables
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

