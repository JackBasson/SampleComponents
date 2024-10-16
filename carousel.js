// Carousel logic
const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let scrollPosition = 0;

rightArrow.addEventListener('click', () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (scrollPosition < maxScroll) {
        scrollPosition += 200;
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
});

leftArrow.addEventListener('click', () => {
    if (scrollPosition > 0) {
        scrollPosition -= 200;
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
});

document.querySelectorAll('.card').forEach(card => {
    const popoutImage = card.querySelector('.popout-image');

    card.addEventListener('mousemove', (e) => {
        const x = e.clientX - card.getBoundingClientRect().left; // Get x position within the card
        const y = e.clientY - card.getBoundingClientRect().top;  // Get y position within the card

        // Update the position of the popout image
        popoutImage.style.left = `${x}px`;
        popoutImage.style.top = `${y}px`;
    });

    card.addEventListener('mouseleave', () => {
        popoutImage.style.opacity = '0'; // Hide the image when the mouse leaves the card
    });
});

