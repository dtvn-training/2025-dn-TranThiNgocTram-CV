document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const navbar = document.getElementById("navbar");

    // Toggle the menu when clicking the burger icon
    burgerMenu.addEventListener("click", function () {
        navbar.classList.toggle("active");
        burgerMenu.classList.toggle("active");
    });

    // Close the menu when clicking a link
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            burgerMenu.classList.remove("active");
        });
    });
});
