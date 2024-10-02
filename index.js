let currentSlide = 0;

function moveSlides(n) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;
  
  currentSlide += n;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  slides.style.transform = `translateX(${-currentSlide * 400}px)`;
}
