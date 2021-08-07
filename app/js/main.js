
const body = document.querySelector('body');
const hambergerMenu = document.querySelector('#hamberger-menu');
const header = document.querySelector('.header');
// const overlay = document.querySelector('.overlay');
// const mobileMenu = document.querySelector('#mobile-menu');
const fadeElements = document.querySelectorAll('.has-fade');

hambergerMenu.addEventListener('click', () => {

    console.log("hamberger clicked");
    if (header.classList.contains("open")) { // Closing Hamberger Menu
        header.classList.remove("open");
        body.classList.remove("no-scroll")
        fadeElements.forEach(element => {
            element.classList.add("fade-out");
            element.classList.remove("fade-in");
        })
    } else {
        header.classList.add("open");
        body.classList.add("no-scroll");
        fadeElements.forEach(element => {
            element.classList.add("fade-in");
            element.classList.remove("fade-out");

        });
    }

});