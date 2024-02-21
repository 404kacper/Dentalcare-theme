const scrollingElement = document.querySelector('.parallax_wrapper');
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

  // console.log(lastKnownScrollPosition);
});

const navButton = document.querySelector('#navbar-btn-expand');
const header = document.querySelector('.nav-container');

navButton.addEventListener('click', () => {
  // modify the header/nav-container to hide extra contents based on clip-path
  if (!header.classList.contains('expanded')) {
    header.classList.add('expanded');
    navButton.classList.add('expanded-btn');
  } else {
    header.classList.remove('expanded');
    navButton.classList.remove('expanded-btn');
  }
});
