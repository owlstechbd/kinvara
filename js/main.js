window.addEventListener('scroll', function() {
    const mainMenu = document.getElementById('main-menu');
    if (window.scrollY > 100) {
        mainMenu.style.top = '-250px'; // Adjust the value based on the height of the main menu
    } else {
        mainMenu.style.top = '0';
    }
});