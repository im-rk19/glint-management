const slides = document.querySelectorAll('.slide');
const slides2 = document.querySelectorAll('.slide2');
let currentSlide = 0;
let currentSlide2 = 0;

function showSlide() {
  slides[currentSlide].classList.add('active');
}

function showSlide2() {
  slides2[currentSlide2].classList.add('active');
}

function hideSlide() {
  slides[currentSlide].classList.remove('active');
}

function hideSlide2() {
  slides2[currentSlide2].classList.remove('active');
}

function nextSlide() {
  hideSlide();
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

function nextSlide2() {
  hideSlide2();
  currentSlide2 = (currentSlide2 + 1) % slides2.length;
  showSlide2();
}

// Initially show the first slide
showSlide();

// Initially show the first slide
showSlide2();

// Automatically advance to the next slide every 5 seconds
setInterval(nextSlide, 5000);
setInterval(nextSlide2, 5000);


// Smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', function() {
  var navLinks = document.querySelectorAll('nav ul li a');
  var currentScrollPos = window.pageYOffset;

  navLinks.forEach(function(link) {
    var section = document.querySelector(link.getAttribute('href'));
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    if (currentScrollPos >= sectionTop && currentScrollPos < (sectionTop + sectionHeight)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

