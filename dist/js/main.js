const scrollingElement = document.querySelector('.parallax_wrapper');
const viewportWidth = document.querySelector(':root').clientWidth;
var scrollpos = scrollingElement.scrollTop;

// Animation related variables
// number = time in ms
var iconRevealDelay = 350;

var ticking = false;

scrollingElement.addEventListener('scroll', (event) => {
  maxScroll = scrollingElement.scrollHeight;
  lastKnownScrollPosition = scrollingElement.scrollTop;
  // The smaller this value the later animations will appear
  let viewportDivisor = 2.5;

  if (lastKnownScrollPosition >= maxScroll / viewportDivisor) {
    scrollingElement
      .querySelector('.amenitiesSection .front_layer')
      .classList.add('front_layer_active');

    scrollingElement
      .querySelector('.amenitiesSection .deep_mid_layer')
      .classList.add('deep_mid_layer_active');

    scrollingElement
      .querySelectorAll('.amenitiesSection .deep_mid_layer_front')
      .forEach((element) => {
        element.classList.add('deep_mid_layer_front_active');
      });
  } else {
    scrollingElement
      .querySelector('.amenitiesSection .front_layer')
      .classList.remove('front_layer_active');

    scrollingElement
      .querySelector('.amenitiesSection .deep_mid_layer')
      .classList.remove('deep_mid_layer_active');

    scrollingElement
      .querySelectorAll('.amenitiesSection .deep_mid_layer_front')
      .forEach((element) => {
        element.classList.remove('deep_mid_layer_front_active');
      });
  }
});

const navButton = document.querySelector('#navbar-btn-expand');
const header = document.querySelector('.nav-container');
const nav = document.querySelector('.nav');

navButton.addEventListener('click', () => {
  // modify the header/nav-container to hide extra contents based on clip-path
  if (!header.classList.contains('expanded')) {
    header.classList.add('expanded');
    navButton.classList.add('expanded-btn');
    // adding animate class to li elements
    nav.querySelectorAll('li').forEach((item) => {
      item.classList.add('animate');
      // adding animate class to each a element for text animation
      item.querySelectorAll('a').forEach((item) => {
        item.classList.add('animate');
      });
    });
    // adding animate class to ul element
    nav.querySelector('ul').classList.add('animate');
  } else {
    header.classList.remove('expanded');
    navButton.classList.remove('expanded-btn');
    nav.querySelectorAll('li').forEach((item) => {
      item.classList.remove('animate');
      item.querySelectorAll('a').forEach((item) => {
        item.classList.remove('animate');
      });
    });
    nav.querySelector('ul').classList.remove('animate');
  }
});

// articles carousel to prevent from vertical snapping to the top of container
document.addEventListener('DOMContentLoaded', function () {
  const arrowButtons = document.querySelectorAll('.articlesSection .arrow-btn');

  arrowButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      e.preventDefault(); // Stop the default anchor link behavior

      const container = document.querySelector(
        '.articlesSection .articles-container'
      );
      const targetGroup = document.querySelector(this.getAttribute('href'));

      if (targetGroup) {
        const targetScrollPosition =
          targetGroup.offsetLeft - container.offsetLeft;
        container.scrollTo({
          left: targetScrollPosition,
          behavior: 'smooth',
        });
      }
    });
  });
});

// script for adjusting scroll speed
// makes parallax effect more pronounced but can get annoying for some people
// so it's commented out for now

// document.addEventListener('DOMContentLoaded', function () {
//   const parallaxWrapper = document.querySelector('.parallax_wrapper');
//   if (!parallaxWrapper) return;

//   let targetScrollY = parallaxWrapper.scrollTop;
//   let currentScrollY = targetScrollY;
//   let isScrolling = false;

//   const smoothScroll = () => {
//     // Easing formula: simple linear interpolation
//     currentScrollY += (targetScrollY - currentScrollY) * 0.7;

//     if (Math.abs(targetScrollY - currentScrollY) > 0.5) {
//       parallaxWrapper.scrollTop = currentScrollY;
//       requestAnimationFrame(smoothScroll);
//     } else {
//       parallaxWrapper.scrollTop = targetScrollY;
//       isScrolling = false;
//     }
//   };

//   parallaxWrapper.addEventListener('scroll', function () {
//     targetScrollY = parallaxWrapper.scrollTop;

//     if (!isScrolling) {
//       isScrolling = true;
//       requestAnimationFrame(smoothScroll);
//     }
//   });
// });
