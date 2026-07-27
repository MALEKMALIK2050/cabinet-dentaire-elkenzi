/* ═══════════════════════════════════════════════════════════════
   DentaArt — Magical JavaScript Engine ✨
   Particles, Cursor Glow, Splash Screen, Animated Counters,
   Scroll Animations, Slider, Lightbox, and more
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ────────────────────────────────────
  // 1. SPLASH SCREEN
  // ────────────────────────────────────
  const splash = document.getElementById('splashScreen');
  if (splash) {
    setTimeout(() => {
      splash.classList.add('hidden');
      setTimeout(() => splash.remove(), 600);
    }, 2200);
  }

  // ────────────────────────────────────
  // 2. MOBILE MENU TOGGLE
  // ────────────────────────────────────
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
      } else {
        icon.classList.replace('fa-times', 'fa-bars');
      }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
      });
    });
  }

  // ────────────────────────────────────
  // 3. LANGUAGE DROPDOWN
  // ────────────────────────────────────
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

  // ────────────────────────────────────
  // 4. HEADER SCROLL EFFECT
  // ────────────────────────────────────
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ────────────────────────────────────
  // 5. BACK TO TOP BUTTON
  // ────────────────────────────────────
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ────────────────────────────────────
  // 6. SCROLL ANIMATIONS (Intersection Observer)
  // ────────────────────────────────────
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up, .scale-in').forEach(el => {
    observer.observe(el);
  });

  // ────────────────────────────────────
  // 7. SLIDER / CAROUSEL
  // ────────────────────────────────────
  const slidesContainer = document.getElementById('sliderSlides');
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');

  if (slidesContainer && slides.length > 0 && dotsContainer) {
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.classList.add('slider-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.slider-dot');

    function goToSlide(index) {
      currentSlide = index;
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    }

    // Auto-play
    let sliderInterval = setInterval(() => {
      goToSlide((currentSlide + 1) % totalSlides);
    }, 5000);

    // Pause on hover
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => clearInterval(sliderInterval));
      sliderContainer.addEventListener('mouseleave', () => {
        sliderInterval = setInterval(() => {
          goToSlide((currentSlide + 1) % totalSlides);
        }, 5000);
      });
    }
  }

  // ────────────────────────────────────
  // 8. ANIMATED COUNTERS
  // ────────────────────────────────────
  const counters = document.querySelectorAll('.count-up');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(start + (target - start) * eased);
          el.textContent = current.toLocaleString();

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target.toLocaleString();
          }
        }

        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  // ────────────────────────────────────
  // 9. HERO PARTICLES
  // ────────────────────────────────────
  const particlesContainer = document.getElementById('heroParticles');
  if (particlesContainer) {
    const colors = [
      'rgba(184, 22, 46, 0.15)',
      'rgba(232, 68, 90, 0.12)',
      'rgba(242, 120, 138, 0.1)',
      'rgba(249, 168, 180, 0.12)',
      'rgba(184, 22, 46, 0.08)'
    ];

    for (let i = 0; i < 25; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 8 + 3;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
      particle.style.animationDelay = (Math.random() * 10) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  // ────────────────────────────────────
  // 10. CURSOR GLOW (Desktop only)
  // ────────────────────────────────────
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && window.matchMedia('(min-width: 769px)').matches) {
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateGlow() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      cursorGlow.style.left = glowX + 'px';
      cursorGlow.style.top = glowY + 'px';
      requestAnimationFrame(animateGlow);
    }

    animateGlow();
  }

  // ────────────────────────────────────
  // 11. CONTACT FORM
  // ────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isArabic = document.documentElement.lang === 'ar';
      const successMsg = isArabic
        ? "شكرًا لرسالتكم! سيتواصل معكم فريقنا في أقرب وقت ممكن."
        : "Merci pour votre message ! Notre équipe vous contactera dans les plus brefs délais.";
      
      // Create toast notification
      showToast(successMsg, 'success');
      contactForm.reset();
    });
  }

  // ────────────────────────────────────
  // 12. TOAST NOTIFICATION SYSTEM
  // ────────────────────────────────────
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      top: 100px;
      right: 30px;
      background: ${type === 'success' ? 'linear-gradient(135deg, #25D366, #128C7E)' : 'linear-gradient(135deg, #B8162E, #E8445A)'};
      color: white;
      padding: 16px 28px;
      border-radius: 14px;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 0.95rem;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      z-index: 99999;
      transform: translateX(120%);
      transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      max-width: 400px;
      line-height: 1.5;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.transform = 'translateX(0)';
    });

    setTimeout(() => {
      toast.style.transform = 'translateX(120%)';
      setTimeout(() => toast.remove(), 500);
    }, 4000);
  }

  // Make showToast available globally
  window.showToast = showToast;
});

// ────────────────────────────────────
// LIGHTBOX (Global functions for gallery)
// ────────────────────────────────────
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (lightbox && img) {
    img.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
