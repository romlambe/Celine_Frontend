document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    showSlides(slideIndex); // Initialize the first slide

    // Start the automatic slideshow
    let slideInterval = setInterval(function() { plusSlides(1); }, 10000);

    // Dot navigation setup, if you have dots for navigation
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide(index + 1);
        });
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        clearInterval(slideInterval); // Stop the auto-slideshow on manual navigation
        slideInterval = setInterval(function() { plusSlides(1); }, 10000); // Restart the slideshow
        showSlides(slideIndex = n);
    }

    function showSlides(n, immediate = false) {
        let slides = document.getElementsByClassName("carousel-item");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        // Handle the slide-out animation
        let currentSlide = document.querySelector('.carousel-item.active');
        if (currentSlide && !immediate) {
            currentSlide.classList.add("slide-out");
            setTimeout(() => {
                currentSlide.classList.remove("active", "slide-out");

                // Proceed to show the new slide
                displayNewSlide();
            }, 500); // This timeout should match the duration of the slide-out animation
        } else {
            // No active slide or immediate change requested, directly show the new slide
            displayNewSlide();
        }

        function displayNewSlide() {
            // Reset all slides before showing the new slide
            Array.from(slides).forEach(slide => {
                slide.classList.remove("active");
            });

            slides[slideIndex - 1].classList.add("active");

            // Update dot navigation
            Array.from(dots).forEach(dot => {
                dot.classList.remove("active");
            });
            dots[slideIndex - 1].classList.add("active");
        }
    }
});
