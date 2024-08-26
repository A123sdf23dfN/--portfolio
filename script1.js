document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });
      if (window.innerWidth <= 768) {
        // Close the menu on small screens after a link is clicked
        navLinks.classList.remove("active");
      }
    });
  });
});

// JavaScript for Scroll-Based Animations

// Function to handle element visibility
window.onload = function () {
  const skillsScroll = document.querySelector(".skills-scroll");
  skillsScroll.scrollLeft = 0;
  setInterval(() => {
    skillsScroll.scrollBy({ left: 1, behavior: "smooth" });
    if (
      skillsScroll.scrollLeft >=
      skillsScroll.scrollWidth - skillsScroll.clientWidth
    ) {
      skillsScroll.scrollLeft = 0;
    }
  }, 20); // Adjust the speed as needed
};
