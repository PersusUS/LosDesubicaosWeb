const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        currentIndex = index;
    });
});

// Star animation
const starContainer = document.querySelector('.stars');
const numberOfStars = 600;

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
  
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
  
    star.style.top = `${Math.random() * 300}vh`;
    star.style.left = `${Math.random() * 200}vw`;

    star.style.opacity = Math.random();

    starContainer.appendChild(star);

    const twinkleDuration = Math.random() * 5 + 2;
    star.style.animation = `twinkle ${twinkleDuration}s infinite ease-in-out`;
}

for (let i = 0; i < numberOfStars; i++) {
    createStar();
}
