document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const navbar = document.getElementById("navbar");

    burgerMenu.addEventListener("click", function () {
        navbar.classList.toggle("active");
        burgerMenu.classList.toggle("active");
    });

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            burgerMenu.classList.remove("active");
        });
    });
});
