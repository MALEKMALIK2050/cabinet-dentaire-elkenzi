document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Language Dropdown Toggle
  const langDropdown = document.querySelector('.lang-dropdown');
  const langBtn = document.querySelector('.lang-dropdown-btn');

  if (langDropdown && langBtn) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove('active');
      }
    });
  }

  // Slider Logic
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  if (slidesContainer && slides.length > 0) {
    let currentSlide = 0;
    const totalSlides = slides.length;

    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 5000); // Change slide every 5 seconds
  }

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Basic validation or just show a success message (localized)
      const isArabic = document.documentElement.lang === 'ar';
      const successMsg = isArabic
        ? "شكرًا لرسالتكم! سيتواصل معكم فريقنا في أقرب وقت ممكن."
        : "Merci pour votre message ! Notre équipe vous contactera dans les plus brefs délais.";
      alert(successMsg);
      contactForm.reset();
    });
  }
});
