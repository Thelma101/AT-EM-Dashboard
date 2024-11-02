document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
    const openMobileMenuBtn = document.getElementById("open-mobile-menu");
    const closeMobileMenuBtn = document.getElementById("close-mobile-menu");
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
    const themeIcon = document.getElementById("theme-icon");
    const themeMode = document.getElementById("theme-mode");
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const carousel = document.getElementById('carousel');
    const slides = document.querySelectorAll('.carousel-item');

    // Mobile Menu Toggle
    if (openMobileMenuBtn && closeMobileMenuBtn) {
        openMobileMenuBtn.addEventListener("click", () => {
            sidebar.classList.remove("-translate-x-full");
            if (mobileMenuOverlay) mobileMenuOverlay.classList.remove("hidden");
        });

        closeMobileMenuBtn.addEventListener("click", () => {
            sidebar.classList.add("-translate-x-full");
            if (mobileMenuOverlay) mobileMenuOverlay.classList.add("hidden");
        });

        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener("click", () => {
                sidebar.classList.add("-translate-x-full");
                mobileMenuOverlay.classList.add("hidden");
            });
        }
    }

    // Dark Mode Toggle
    if (toggleDarkModeBtn) {
        toggleDarkModeBtn.addEventListener("click", () => {
            document.documentElement.classList.toggle("dark");
            if (document.documentElement.classList.contains("dark")) {
                themeIcon.classList.replace('bi-toggle-off', 'bi-toggle-on');
                themeMode.textContent = 'Light Mode';
            } else {
                themeIcon.classList.replace('bi-toggle-on', 'bi-toggle-off');
                themeMode.textContent = 'Dark Mode';
            }
        });
    }

    // Carousel Functionality
    if (prevButton && nextButton && carousel) {
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
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const collapseBtn = document.getElementById("collapse-sidebar");

    collapseBtn.addEventListener("click", () => {
        sidebar.classList.toggle("w-20");
        sidebar.classList.toggle("lg:w-64");

        // Hide sidebar labels when collapsed
        sidebar.querySelectorAll("span").forEach(label => {
            label.classList.toggle("hidden");
        });
    });
}
);


// //     // Toggle Mobile Menu
// //     openMobileMenuBtn.addEventListener("click", () => {
// //         sidebar.classList.remove("-translate-x-full");
// //         mobileMenuOverlay.classList.remove("hidden");
// //     });

// //     closeMobileMenuBtn.addEventListener("click", () => {
// //         sidebar.classList.add("-translate-x-full");
// //         mobileMenuOverlay.classList.add("hidden");
// //     });

// //     mobileMenuOverlay.addEventListener("click", () => {
// //         sidebar.classList.add("-translate-x-full");
// //         mobileMenuOverlay.classList.add("hidden");
// //     });

// //     // Toggle Dark Mode
// //     toggleDarkModeBtn.addEventListener("click", () => {
// //         document.documentElement.classList.toggle("dark");
// //     });
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   const sidebar = document.getElementById("sidebar");
//   const openMobileMenuBtn = document.getElementById("open-mobile-menu");
//   const closeMobileMenuBtn = document.getElementById("close-mobile-menu");

//   // Ensure these elements are found
//   if (openMobileMenuBtn && closeMobileMenuBtn) {
//     openMobileMenuBtn.addEventListener("click", () => {
//       sidebar.classList.remove("-translate-x-full");
//     });

//     closeMobileMenuBtn.addEventListener("click", () => {
//       sidebar.classList.add("-translate-x-full");
//     });
//   }
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const carousel = document.getElementById('carousel');
//     const slides = document.querySelectorAll('.carousel-item');
//     const prevButton = document.getElementById('prev');
//     const nextButton = document.getElementById('next');

//     let currentIndex = 0;
//     const totalItems = slides.length;
//     const autoRotateInterval = 3000;    
//     let autoRotate;

//     function updateCarousel() {
//         const offset = -currentIndex * 100;
//         carousel.style.transform = `translateX(${offset}%)`;
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % totalItems;
//         updateCarousel();
//     }

//     nextButton.addEventListener('click', () => {
//         nextSlide();
//         resetAutoRotate();
//     });

//     prevButton.addEventListener('click', () => {
//         currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//         updateCarousel();
//         resetAutoRotate();
//     });

//     function startAutoRotate() {
//         autoRotate = setInterval(nextSlide, autoRotateInterval);
//     }

//     function resetAutoRotate() {
//         clearInterval(autoRotate);
//         startAutoRotate();
//     }

//     startAutoRotate();
// });

