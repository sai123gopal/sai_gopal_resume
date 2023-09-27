document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const fullScreenDialog = document.getElementById("full-screen-dialog");
  const closeFullScreenDialog = document.getElementById(
    "close-full-screen-dialog"
  );
  const projectCard = document.getElementById("project-card");
  const dialogCards = document.querySelectorAll(".dialog-card");
  const scrollToTopLink = document.getElementById("scroll-to-top");
  const sections = document.querySelectorAll(".fade-in");
  const socialIcons = document.querySelectorAll(".social-icons a");

  socialIcons.forEach(function (icon) {
    icon.addEventListener("click", function (e) {
      e.preventDefault();
      const url = icon.getAttribute("href");
      window.open(url, "_blank");
    });
  });

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  // Initial check on page load
  checkScroll();

  // Listen for scroll events
  window.addEventListener("scroll", checkScroll);

  scrollToTopLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
    });
  });

  mobileMenuIcon.addEventListener("click", function () {
    fullScreenDialog.classList.toggle("show-dialog");
  });

  closeFullScreenDialog.addEventListener("click", function () {
    fullScreenDialog.classList.remove("show-dialog");
  });

  // Add event listeners to close the full-screen dialog when a card is clicked
  dialogCards.forEach(function (card) {
    card.addEventListener("click", function () {
      fullScreenDialog.classList.remove("show-dialog");
    });
  });
});


