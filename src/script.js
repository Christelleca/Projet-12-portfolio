document.addEventListener("DOMContentLoaded", function () {
    AOS.init();

    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const logoTexts = document.querySelectorAll(".logo_text");
    let currentIndex = 0;

    // Set initial logo text
    logoTexts[currentIndex].classList.add("visible");

    // Function to switch logo text
    function switchLogoText() {
        // Remove visible logo text
        logoTexts[currentIndex].classList.remove("visible");

        // Update logo text index
        currentIndex = (currentIndex + 1) % logoTexts.length;

        // Add visible to new logo text
        logoTexts[currentIndex].classList.add("visible");
    }

    // Switch logo text
    setInterval(switchLogoText, 10000);

    // Day and night mode
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-theme");
        const icon = themeToggle.querySelector("i");
        if (body.classList.contains("light-theme")) {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        } else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    });

    // Scroll to sections
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

    // Dropdown menu for tablet
    const menuToggle = document.querySelector(".menu_toggle");
    const navLinks = document.querySelector(".header_navbar nav ul");

    menuToggle.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        } else {
            navLinks.classList.add("active");
        }
    });

    // Project description modal
    const descriptionButtons = document.querySelectorAll(
        ".project_description"
    );
    const modal = document.getElementById("projectModal");
    const closeModal = document.querySelector(".close");
    const modalDescription = document.getElementById("modalDescription");
    const carouselContainer = document.querySelector(".carousel");

    descriptionButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const projectDetails = this.closest(".container_img_projets");
            const description = projectDetails.getAttribute("data-description");
            const imagesAttr = projectDetails.getAttribute("data-images");

            if (description && imagesAttr) {
                const images = imagesAttr.split(",");

                modalDescription.innerText = description;

                // Clear existing images
                carouselContainer.innerHTML = "";

                // Add new images
                images.forEach((src, index) => {
                    const img = document.createElement("img");
                    img.src = src.trim();
                    if (index === 0) img.classList.add("active");
                    carouselContainer.appendChild(img);
                });

                modal.classList.add("show");
            } else {
                console.error("Description or images not found");
            }
        });
    });

    closeModal.addEventListener("click", function () {
        modal.classList.remove("show");
    });

    // Close modal when clicking outside of modal-content
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });

    // Carousel function
    let currentSlide = 0;

    function showNextImage() {
        const images = document.querySelectorAll(".carousel img");
        if (images.length > 0) {
            images[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % images.length;
            images[currentSlide].classList.add("active");
        }
    }

    setInterval(showNextImage, 3000);
});
