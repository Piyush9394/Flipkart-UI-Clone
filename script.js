// -----------------------------
// Banner Slider Functionality
// -----------------------------
let currentSlide = 0;
const banner = document.getElementById('banner');
const slides = banner.querySelectorAll('.banneritem');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    const offset = -currentSlide * 100;
    banner.style.transform = `translateX(${offset}%)`;
}

function moveBanner(step) {
    showSlide(currentSlide + step);
}

setInterval(() => {
    moveBanner(1);
}, 4000);

document.querySelectorAll('.dropdown').forEach(drop => {
    const btn = drop.querySelector('.dropdown-btn');
    const content = drop.querySelector('.dropdown-content');
    if (btn && content) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });
        window.addEventListener('click', () => {
            content.style.display = 'none';
        });
    }
});
