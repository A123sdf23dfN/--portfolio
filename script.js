// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adding lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Function to create stars
function addStar() {
  const starGeometry = new THREE.SphereGeometry(0.1, 24, 24);
  const starMaterial = new THREE.MeshBasicMaterial({
    color: Math.random() * 0xffffff,
  });
  const star = new THREE.Mesh(starGeometry, starMaterial);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}

// Add multiple stars
Array(200).fill().forEach(addStar);

// Position the camera
camera.position.z = 5;

// Handle window resize
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Animate function
function animate() {
  requestAnimationFrame(animate);

  // Rotate stars
  scene.rotation.y += 0.002;

  // Render the scene
  renderer.render(scene, camera);
}

// Start the animation
animate();

// Scroll event listener
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Move the scene down based on the scroll position
  scene.position.y = 0 - scrollY / 200;
});

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
