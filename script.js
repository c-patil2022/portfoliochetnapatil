// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fade-in animation when sections come into view
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});

// Hover effect for skill and certification cards
document.querySelectorAll(".skills span, .certifications span").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.1)";
    card.style.transition = "transform 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Dynamic year in footer (optional)
const footer = document.createElement("footer");
footer.innerHTML = `<p>© ${new Date().getFullYear()} Your Name | Salesforce Portfolio</p>`;
document.body.appendChild(footer);
