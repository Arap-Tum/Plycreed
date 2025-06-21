// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Simple scroll animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Header scroll effect
// window.addEventListener("scroll", () => {
//   const header = document.querySelector("header");
//   if (window.scrollY > 100) {
//     header.style.background = "rgba(255, 255, 255, 0.98)";
//     header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
//   } else {
//     header.style.background = "rgba(255, 255, 255, 0.95)";
//     header.style.boxShadow = "none";
//   }
// });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

function backgroundChange() {
  const header = document.getElementById("header");
  const heroSection = document.querySelector(".hero");

  if (!header || !heroSection) return;
  const heroHeight = heroSection.offsetHeight;
  console.log(header);
  console.log(heroHeight);
  window.addEventListener("scroll", () => {
    if (window.scrollY > heroHeight) {
      header.style.background =
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    } else {
      header.style.background = "";
    }
  });
}
backgroundChange();
