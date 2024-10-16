// Scroll detection logic for navbar visibility
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    // If the bottom of the hero section is less than or equal to 0, hide navbar
    if (heroBottom <= 60) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
});