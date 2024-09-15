 // Wait for the page to fully load
 window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Add fade-out class for smooth transition
    preloader.classList.add('fade-out');

    // Display the content and remove the preloader after the fade-out
    setTimeout(() => {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 500); // Time matches the CSS transition duration
});
