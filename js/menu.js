const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.childNodes.forEach((child, index) => {
    child.classList.toggle(`active`);
  });
});

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.childNodes.forEach((child, index) => {
      child.classList.remove('active');
    });
  });
});