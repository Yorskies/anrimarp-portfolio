/**
 * animations.js — Typewriter Effect & Scroll Reveal Observer
 */

/**
 * Typewriter effect for the hero sub-headline.
 * Cycles through an array of role strings with typing and deleting animation.
 */
function initTypewriter() {
  const typewriterEl = document.getElementById('typewriter');
  if (!typewriterEl) return;

  const roles = [
    'Fullstack Developer',
    'System Administrator',
    'Software Engineer',
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseDuration = 2200;

  function typewrite() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      // Typing forward
      typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        // Pause at the end of the word
        isDeleting = true;
        setTimeout(typewrite, pauseDuration);
        return;
      }
      setTimeout(typewrite, typingSpeed);
    } else {
      // Deleting backward
      typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typewrite, typingSpeed * 4);
        return;
      }
      setTimeout(typewrite, deletingSpeed);
    }
  }

  // Start typewriter after a small delay for page load
  setTimeout(typewrite, 1200);
}

/**
 * Scroll reveal — uses IntersectionObserver to animate .reveal-section
 * elements into view. The `.revealed` CSS class is defined in style.css.
 */
function initScrollReveal() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.reveal-section').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
    revealObserver.observe(el);
  });
}

export { initTypewriter, initScrollReveal };
