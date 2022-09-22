const toggleButton = document.getElementsByClassName("toggle-btn")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
const navIcon = document.getElementsByClassName("nav-icon")[0];
const indexToggle = document.getElementsByClassName("index-toggle")[0];
const indexContent = document.getElementsByClassName("index-content")[0];
const changeFooter = document.getElementsByClassName("footer-class")[0];

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active-toggle');
    navIcon.classList.toggle('rotate-nav');
})

indexToggle.addEventListener('click', () => {
    indexContent.classList.toggle('show-index');
    changeFooter.classList.toggle('change-footer');
})