const themeToggleButton = document.querySelector('#theme-toggle');
const body = document.querySelector('body');

if (themeToggleButton) { // Ensure the button exists before adding event listener
    themeToggleButton.addEventListener('click', function() {
        body.classList.toggle('light-mode');

        const isLightMode = body.classList.contains('light-mode');
        themeToggleButton.textContent = isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    });
}

// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        // Optional: Add aria-expanded for accessibility
        menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });
}