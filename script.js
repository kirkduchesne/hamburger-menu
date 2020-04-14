const burgerButton = document.querySelector(".menu-button");
let openMenu = false;

burgerButton.addEventListener('click', () => {
    if (!openMenu) {
        burgerButton.classList.add('burger-open');
        openMenu = true;
    } else {
        burgerButton.classList.remove('burger-open');
        openMenu = false;
    }
})