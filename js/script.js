const toggleButton = document.getElementsByClassName("toggle-btn")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
const navIcon = document.getElementsByClassName("nav-icon")[0];

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active-toggle');
    navIcon.classList.toggle('rotate-nav');
})