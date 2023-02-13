const images = document.querySelectorAll('.image-slider img');
let currentImageIndex = 0;
images[currentImageIndex].style.left = 0;

setInterval(() => {
  images[currentImageIndex].style.left = '-100%';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.left = 0;
}, 5000);
