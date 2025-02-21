const images = [
    "img/com img1.jpg",
    "img/com img2.jpg",
    "img/com img3.jpg",
    "img/com img4.jpg",

];

let currentIndex = 0;
const heroSection = document.querySelector(".hero");

function changeBackground() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background every 3 seconds
setInterval(changeBackground, 3000);

// Initial background load
changeBackground();

document.addEventListener("DOMContentLoaded", function () {
  const institutionsSection = document.getElementById("institutions");

  function revealOnScroll() {
    const sectionPosition = institutionsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Adjust trigger point

    if (sectionPosition < screenPosition) {
      institutionsSection.classList.add("show");
    }
  }

  window.addEventListener("scroll", revealOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("nav-active");
  });
});

