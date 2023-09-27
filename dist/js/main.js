// Elements to grab
const navbar = document.querySelector('header');
const galleryContainer = document.querySelector('.gallery-container');
// Declaration like this otherwise gives error
var nav_links = [];
nav_links = document.querySelector('.nav-links').querySelectorAll('li');
const scrollingElement = document.querySelector('.parallax_wrapper');
var whyUsText = document.querySelector('#whyUsText');
var scrollpos = scrollingElement.scrollTop;

// Animation related variables
// number = time in ms
var iconRevealDelay = 350;

var ticking = false;

scrollingElement.addEventListener('scroll', (event) => {
  maxScroll = scrollingElement.scrollHeight;
  lastKnownScrollPosition = scrollingElement.scrollTop;

  if (lastKnownScrollPosition >= maxScroll/2) {
    scrollingElement.querySelector('.amenitiesSection .deep_layer').classList.add('deep_layer_active');
    console.log("Reached 50%")
  } else {
    scrollingElement.querySelector('.amenitiesSection .deep_layer').classList.remove('deep_layer_active');
  }

  // console.log(lastKnownScrollPosition);
});

// Navbar animation
// function addTransparentBg() {
//   navbar.classList.add('navbar-transform-bg');
//   nav_links.forEach((link) => {
//     link.querySelector('a').classList.add('navbar-transform-text');
//   });
// }

// function removeTransparentBg() {
//   navbar.classList.remove('navbar-transform-bg');
//   nav_links.forEach((link) => {
//     link.querySelector('a').classList.remove('navbar-transform-text');
//   });
// }

// function animateIcons(delay) {
//   var icons = galleryContainer.querySelectorAll('.icon');
//   var textContainers = galleryContainer.querySelectorAll('.text-container');
//   var i = 0;

//   function delayedLoop() {
//     setTimeout(function () {
//       icons[i].classList.add('icon-animate');
//       textContainers[i].classList.add('text-container-animate');
//       i++;
//       // Icons length will always be equal the textContainers length
//       if (i < icons.length) {
//         delayedLoop();
//       }
//     }, delay);
//   }

//   delayedLoop();
// }

// var iconsFired = false;
// var whyusFired = false;
// // Scrollbar listener
// scrollingElement.addEventListener('scroll', () => {
//   scrollpos = scrollingElement.scrollTop;
//   // console.log(scrollpos);
//   // Navbar
//   // scrollpos >= 100 ? addTransparentBg() : removeTransparentBg();
//   // Icons in info section
//   if (scrollpos >= 200 && iconsFired === false) {
//     animateIcons(iconRevealDelay);
//     iconsFired = true;
//   }
//   if (scrollpos >= 1090 && whyusFired === false) {
//     animateWhyUs();
//     whyusFired = true;
//   }
// });
