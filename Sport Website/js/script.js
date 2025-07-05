// Image Slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slider.style.transform = `translateX(-\${counter * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slider.style.transform = `translateX(-\${counter * 100}%)`;
});

// Countdown Timer
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const nextGame = new Date('July 15, 2025 19:00:00'); // July 15, 2025 7:00 PM
    const diff = nextGame - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

if (countdownElement) {
    setInterval(updateCountdown, 1000);
}

// Mobile Navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document
}
