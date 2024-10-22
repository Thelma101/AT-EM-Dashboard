// document.querySelector('.dark-mode-toggle').addEventListener('click', function () {
//   document.body.classList.toggle('dark-mode');
// });

// const darkModeStyles = `
//     .dark-mode {
//       background-color: #333;
//       color: #fff;
//     }
  
//     .dark-mode .sidebar {
//       background-color: #444;
//     }
  
//     .dark-mode .card {
//       background-color: #555;
//     }
  
//     .dark-mode .status.completed {
//       background-color: #218838;
//     }
  
//     .dark-mode .status.in-progress {
//       background-color: #e0a800;
//     }
//   `;

// const carousel = document.getElementById('carousel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;
const totalItems = carousel.children.length; // Total number of slides

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Add event listeners for 'Next' and 'Prev' buttons
next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; // Move forward and loop back at the end
    updateCarousel();
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move backward and loop to the last item
    updateCarousel();
});

// console.log("Script loaded");
// document.addEventListener('DOMContentLoaded', () => {
//   const carousel = document.getElementById('carousel');
//   const slides = document.querySelectorAll('.carousel-item');
//   const prevButton = document.getElementById('prev');
//   const nextButton = document.getElementById('next');

//   let currentIndex = 0;

//   function updateCarousel() {
//     const totalSlides = slides.length;
//     const offset = -currentIndex * 100;
//     carousel.style.transform = `translateX(${offset}%)`;
//   }

//   nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     updateCarousel();
//   });

//   prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     updateCarousel();
//   });
// });
