const hamburger = document.querySelectorAll('.hamburger');
const mobileMenu = document.querySelector(".mobile-menu");
const icons = document.querySelectorAll("i");

hamburger.forEach(item => {
    item.addEventListener("click", function (event) {
        const isVisible = mobileMenu.getAttribute('data-isvisible');
        if (isVisible === "true") {
            // hiding
            mobileMenu.setAttribute('data-isvisible', "false");
            icons[0].setAttribute('data-visible', "true");
            icons[1].setAttribute('data-visible', "false");
        } else if (isVisible === "false") {
            // showing 
            mobileMenu.setAttribute('data-isvisible', "true");
            icons[0].setAttribute('data-visible', "false");
            icons[1].setAttribute('data-visible', "true");
        }
    });
});
