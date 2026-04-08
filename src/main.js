/**
 * main.js — Application Entry Point
 * Imports stylesheet and initializes all modules.
 */

// Import Tailwind CSS (processed by PostCSS via Vite)
import './style.css';

// Import modules
import { initTheme, bindThemeToggle } from './js/theme.js';
import {
  initMobileMenu,
  initSmoothScroll,
  initNavbarScroll,
  initBackToTop,
  initActiveNavHighlighting,
} from './js/navigation.js';
import { initTypewriter, initScrollReveal } from './js/animations.js';

// ─── Initialize theme immediately (before DOM ready to prevent FOUC) ───
initTheme();

// ─── Initialize everything else after DOM is ready ───
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  bindThemeToggle();

  // Navigation
  initMobileMenu();
  initSmoothScroll();
  initNavbarScroll();
  initBackToTop();
  initActiveNavHighlighting();

  // Animations
  initTypewriter();
  initScrollReveal();
});
