const navbar = document.querySelector('header');
const nav_links = document.querySelector('.nav_links').querySelectorAll("li");
var scrollpos = window.scrollY;

function addTransparentBg () {
    navbar.classList.add("navbar-transform-bg");
    nav_links.forEach(link => {
        link.querySelector("a").classList.add("navbar-transform-text");
    });
}

function removeTransparentBg () {
    navbar.classList.remove("navbar-transform-bg");
    nav_links.forEach(link => {
        link.querySelector("a").classList.remove("navbar-transform-text");
    });
}

window.addEventListener('scroll', () => {
    scrollpos = window.scrollY;
    scrollpos >= 30 ? addTransparentBg() : removeTransparentBg();
})