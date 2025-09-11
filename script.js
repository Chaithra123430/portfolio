// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Typing animation
var typed = new Typed("#typed", {
  strings: ["Web Developer", "Cloud Enthusiast", "Problem Solver"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});

// Dark/Light mode toggle
const modeBtn = document.querySelector(".mode-toggle");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  modeBtn.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Scroll animations
AOS.init({ duration: 1200, once: true });

// ✅ EmailJS Init
(function() {
  emailjs.init("tltPku6M0i6oWjB3d"); // Replace with your EmailJS Public Key
})();
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_h2o4bve", "template_i2nrwgl", this)
    .then(() => {
      alert("Message sent successfully! 🎉");
      this.reset();
    }, (err) => {
      alert("Failed to send message. Please try again.");
      console.error("Error:", err);
    });
});