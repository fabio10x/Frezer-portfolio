const themeToggleButton = document.querySelector('#theme-toggle');
const body = document.querySelector('body');
themeToggleButton.addEventListener('click', function() {
    // This line stays the same. It toggles the class.
    body.classList.toggle('light-mode');

    // Use a ternary operator to set the button text based on the current theme.
    const isLightMode = body.classList.contains('light-mode');
    themeToggleButton.textContent = isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode';
});