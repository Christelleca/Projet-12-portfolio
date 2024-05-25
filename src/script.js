document.addEventListener("DOMContentLoaded", function () {
    AOS.init();

    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const logoTexts = document.querySelectorAll(".logo_text");
    let currentIndex = 0;

    // Animation de rotation des symboles dans le logo
    setInterval(() => {
        logoTexts.forEach((text, index) => {
            text.classList.toggle("visible", index === currentIndex);
        });
        currentIndex = (currentIndex + 1) % logoTexts.length;
    }, 10000);

    // Mode nuit et jour
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");
        const icon = themeToggle.querySelector("i");
        if (body.classList.contains("dark-theme")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });

    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Scroll down button
    document
        .querySelector(".scroll_down")
        .addEventListener("click", function () {
            document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" });
        });

    // Menu déroulant pour tablette
    const menuToggle = document.querySelector(".menu_toggle");
    const navLinks = document.querySelector(".header_navbar nav ul");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        if (navLinks.classList.contains("active")) {
            navLinks.style.maxHeight = navLinks.scrollHeight + "px";
        } else {
            navLinks.style.maxHeight = "0";
        }
    });

    navLinks.addEventListener("transitionend", () => {
        if (!navLinks.classList.contains("active")) {
            navLinks.style.maxHeight = null;
        }
    });
});
