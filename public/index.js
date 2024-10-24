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


document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const slides = document.querySelectorAll('.carousel-item');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let currentIndex = 0;
  const totalItems = slides.length;
  const autoRotateInterval = 3000;
  let autoRotate;

  function updateCarousel() {
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems; 
      updateCarousel();
  }

  nextButton.addEventListener('click', () => {
      nextSlide();
      resetAutoRotate();
  });

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
      resetAutoRotate();
  });

  function startAutoRotate() {
      autoRotate = setInterval(nextSlide, autoRotateInterval);
  }

  function resetAutoRotate() {
      clearInterval(autoRotate);
      startAutoRotate();
  }

  startAutoRotate();
});

// function toggleDetails(element) {
//   const details = element.parentElement.nextElementSibling; 
//   details.classList.toggle('hidden');
  
//   const chevronIcon = element.querySelector('img');
//   chevronIcon.classList.toggle('rotate-90');
// }

function toggleDetails(element) {
  const details = element.closest('.bg-white').querySelector('.details-section');
  details.classList.toggle('hidden');

  const chevronIcon = element.querySelector('.chevron-icon');
  chevronIcon.classList.toggle('rotate-90');
}

