// Slider Navigation
const sliderImages = [
       "../asset/foto1.jpg",
       "../asset/foto2.jpg",
       "../asset/foto3.jpg"
   ];
   
   let currentImageIndex = 0;
   
   document.addEventListener("DOMContentLoaded", function () {
       // Select elements
       const sliderImg = document.querySelector('.slider-img');
       const prevBtn = document.querySelector('.prev-btn');
       const nextBtn = document.querySelector('.next-btn');
   
       // Debugging: Check if elements exist
       if (!sliderImg || !prevBtn || !nextBtn) {
           console.error("Slider elements not found. Check your HTML and class names.");
           return;
       }
   
       // Update slider image
       function updateSlider() {
           sliderImg.src = sliderImages[currentImageIndex];
       }
   
       // Navigate to the previous image
       prevBtn.addEventListener('click', () => {
           currentImageIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
           updateSlider();
       });
   
       // Navigate to the next image
       nextBtn.addEventListener('click', () => {
           currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
           updateSlider();
       });
   
       // Initialize slider
       updateSlider();
   });
   