const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");
const contactForm = document.getElementById("contact-form");

const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme || "light";
root.classList.toggle("dark", initialTheme === "dark");

function syncThemeLabel() {
    themeLabel.textContent = root.classList.contains("dark") ? "Light" : "Dark";
}

syncThemeLabel();

themeToggle.addEventListener("click", () => {
    root.classList.toggle("dark");
    const nextTheme = root.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    syncThemeLabel();
});

mobileMenuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const href = anchor.getAttribute("href");
        const target = href ? document.querySelector(href) : null;

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        mobileMenu.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
    });
});

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:ahmednasser9060@gmail.com?subject=${subject}&body=${body}`;

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalLabel = submitButton.textContent;
        submitButton.textContent = "Opening Email...";
        submitButton.disabled = true;

        setTimeout(() => {
            submitButton.textContent = originalLabel;
            submitButton.disabled = false;
            contactForm.reset();
        }, 1800);
    });
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});

function setupCarousel(carousel) {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const dotsContainer = carousel.querySelector("[data-carousel-dots]");

    if (!track || slides.length === 0) {
        return;
    }

    let currentIndex = 0;
    let autoTimer;
    const interval = Number(carousel.dataset.interval) || 3500;
    const dots = slides.map((_, index) => {
        const dot = document.createElement("span");
        dot.className = "carousel-dot";
        dot.addEventListener("click", () => {
            goToSlide(index);
            restartAutoPlay();
        });
        dotsContainer?.appendChild(dot);
        return dot;
    });

    function goToSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle("is-active", slideIndex === currentIndex);
        });

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle("is-active", dotIndex === currentIndex);
        });
    }

    function restartAutoPlay() {
        window.clearInterval(autoTimer);
        autoTimer = window.setInterval(() => goToSlide(currentIndex + 1), interval);
    }

    prevButton?.addEventListener("click", () => {
        goToSlide(currentIndex - 1);
        restartAutoPlay();
    });

    nextButton?.addEventListener("click", () => {
        goToSlide(currentIndex + 1);
        restartAutoPlay();
    });

    carousel.addEventListener("mouseenter", () => window.clearInterval(autoTimer));
    carousel.addEventListener("mouseleave", restartAutoPlay);

    goToSlide(0);
    restartAutoPlay();
}

document.querySelectorAll("[data-carousel]").forEach(setupCarousel);

function updateActiveLink() {
    let currentId = "";

    sections.forEach((section) => {
        const top = section.offsetTop - 140;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("is-active", isCurrent);
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);
