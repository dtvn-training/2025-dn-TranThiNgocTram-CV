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

    function updateActiveSection() {
        let maxVisibleRatio = 0;
        let activeSection = null;
        const sections = Array.from(document.querySelectorAll("div[id]")).filter(div => ["about", "skills", "experiences", "awards", "interests"].includes(div.id))

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
            const visibilityRatio = visibleHeight / section.offsetHeight;

            if (visibilityRatio > maxVisibleRatio) {
                maxVisibleRatio = visibilityRatio;
                activeSection = section;
            }
        });

        if (activeSection) {
            document.querySelectorAll(".navbar a").forEach(
                headerItem => headerItem.classList.remove("active")
            )
            document.querySelector(`.navbar a[href="#${activeSection.id}"]`).classList.add("active");
        }
    }

    window.addEventListener("scroll", updateActiveSection);
});
