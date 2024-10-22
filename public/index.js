document.querySelector('.dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  const darkModeStyles = `
    .dark-mode {
      background-color: #333;
      color: #fff;
    }
  
    .dark-mode .sidebar {
      background-color: #444;
    }
  
    .dark-mode .card {
      background-color: #555;
    }
  
    .dark-mode .status.completed {
      background-color: #218838;
    }
  
    .dark-mode .status.in-progress {
      background-color: #e0a800;
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = darkModeStyles;
  document.head.appendChild(styleSheet);
  
  // ?carousel
    const carousel = document.getElementById('carousel');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    
    let currentIndex = 0;
    const totalImages = carousel.children.length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    next.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });