// Parallax scrolling effect
document.addEventListener("DOMContentLoaded", function () {
  // Update header on scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Parallax effect for background elements
  const parallaxElements = document.querySelectorAll(
    ".shape, .geometric, .floating"
  );

  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;

    parallaxElements.forEach((element) => {
      // Different elements move at different speeds
      let speed;

      if (element.classList.contains("shape")) {
        speed = 0.2;
      } else if (element.classList.contains("geometric")) {
        speed = 0.4;
      } else {
        speed = 0.6;
      }

      const yPos = -(scrollPosition * speed);
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
