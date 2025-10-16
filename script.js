// script.js
const fadeImage = document.querySelector('.fade-image');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  const triggerPoint = windowHeight / 1.5;

  if (scrollY > triggerPoint) {
    fadeImage.classList.add('visible');
  } else {
    fadeImage.classList.remove('visible');
  }
});
