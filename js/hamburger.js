const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.nav');
const links = document.querySelectorAll('.nav a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-open');
  menu.classList.toggle('is-open');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    menu.classList.remove('is-open');
  });
});