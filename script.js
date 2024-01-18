let slideIndex = 1;
showSlides(slideIndex); // Initialize the first slide

// Start the automatic slideshow
let slideInterval = setInterval(function() { plusSlides(1); }, 10000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  let dots = document.getElementsByClassName("dot");

  // If n is greater than the number of slides, reset to first slide
  if (n > slides.length) { slideIndex = 1; }

  // If n is less than 1, set to the last slide
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and set the corresponding dot as active
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
