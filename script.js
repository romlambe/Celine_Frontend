// Langage option
document.addEventListener('DOMContentLoaded', function() {
    // Detect browser language
    let browserLang = navigator.language || navigator.userLanguage;
    browserLang = browserLang.includes('fr') ? 'fr' : 'en';

    // Set initial language from localStorage or browser language or default to 'fr'
    let currentLang = localStorage.getItem('currentLang') || browserLang;

    // Language text content mapping
    const langTexts = {
        'en': {
            'prestation': 'Service',
            'le-lieu': 'Location',
            'contact': 'Contact Me',
            'flag': 'image/header/english_flag.png',
			'title_landing': 'Who am I',
			'paragraphe_1_landing': 'I discovered the benefits of massage when I lived in Moorea. Among the Polynesians massage is a daily practice and is one of the essential needs to ensure optimal well-being. After practicing the nursing profession for more than thirty years, I followed a one-year course of study in Toulouse to become a reflexotherapist and then a year of study at the holistic facial massage school of Montpellier for practice the profession of facialist.',
			'paragraphe_2_landing': 'Today, in a setting with a Wabi-Sabi trend decoration, privileged and intimate, I offer you tailor-made and high-end services. I really appreciate the masseur-massée alchemy, seeing, listening with your hands and above all receiving, seeing you leave looking happy and satisfied!',
			
        }
    };

    // Function to save the current language to localStorage
    function saveLanguage(lang) {
        localStorage.setItem('currentLang', lang);
    }

    // Update the UI with the current language
    function updateLanguage(lang) {
        // Update text for each link only if the language is English
        if (lang === 'en') {
            document.querySelectorAll('.navigation a').forEach(link => {
                const textKey = link.getAttribute('href').replace('#', '');
                link.textContent = langTexts[lang][textKey];
            });
        } else {
            // If the language is French, use the text already in the HTML
            document.querySelectorAll('.navigation a').forEach(link => {
                const textKey = link.getAttribute('href').replace('#', '');
                link.textContent = link.dataset.fr; // Assuming you have data-fr attributes for each link
            });
        }

        // Update the flag image
        const flagImage = document.querySelector('.language-flag');
        flagImage.src = lang === 'en' ? langTexts[lang]['flag'] : 'image/header/french_flag.png';

        // Save the current language
        saveLanguage(lang);
    }

    // Initialize the UI with the saved or browser language or default language
    updateLanguage(currentLang);

    // Add event listener to the flag for switching language
    document.querySelector('.language-flag').addEventListener('click', function() {
        // Toggle between French and English
        currentLang = (currentLang === 'fr') ? 'en' : 'fr';
        updateLanguage(currentLang);
    });
});


//Menu
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('.navigation');
    const languageToggle = document.getElementById('language-toggle');

    function moveLanguageToggle() {
        if (window.innerWidth <= 850) {
            if (!nav.contains(languageToggle)) {
                nav.prepend(languageToggle); // Move the toggle into the nav
            }
        } else {
            document.querySelector('.header-content').appendChild(languageToggle); // Move back to its original position on wider screens
        }
    }

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
        moveLanguageToggle();
    });

    window.addEventListener('resize', moveLanguageToggle);
});

// Landing page image adjustment
function adjustImageForViewport() {
	const imgElement = document.querySelector('.landing-child-40 img');
	if (window.innerWidth <= 650) {
		imgElement.src = 'image/landing/Celine_small.webp'; // Path to the smaller image
	} else {
		imgElement.src = 'image/landing/Celine.webp'; // Path to the original image
	}
}

// Listen for window resize events
window.addEventListener('resize', adjustImageForViewport);

// Adjust the image when the script loads
document.addEventListener('DOMContentLoaded', adjustImageForViewport);

//carousel
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
