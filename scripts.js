// JavaScript for main page interactivity (e.g., carousel)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-image');
    let currentImage = 0;

    function showNextImage() {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
    }

    // Change image every 5 seconds
    setInterval(showNextImage, 2000);
});
