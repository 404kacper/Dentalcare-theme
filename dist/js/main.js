const navbar = document.querySelector('header');
// Declaration like this otherwise gives error
var nav_links = [];
nav_links = document.querySelector('.nav_links').querySelectorAll('li');
const scrollingElement = document.querySelector(
  '.parallax-perspective-container'
);
var scrollpos = scrollingElement.scrollTop;

// Wait for the page to load
document.body.classList.add('js-loading');

window.addEventListener('load', showPage());

function showPage() {
  document.body.classList.remove('js-loading');
  console.log('Page loaded');
}

function addTransparentBg() {
  navbar.classList.add('navbar-transform-bg');
  nav_links.forEach((link) => {
    link.querySelector('a').classList.add('navbar-transform-text');
  });
}

function removeTransparentBg() {
  navbar.classList.remove('navbar-transform-bg');
  nav_links.forEach((link) => {
    link.querySelector('a').classList.remove('navbar-transform-text');
  });
}

scrollingElement.addEventListener('scroll', () => {
  scrollpos = scrollingElement.scrollTop;
  console.log(scrollpos);
  scrollpos >= 100 ? addTransparentBg() : removeTransparentBg();
});
