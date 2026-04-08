/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
    },
    extend: {
      /* -----------------------------------------------
         FIBONACCI TYPOGRAPHY SCALE
         Sequence: 8 · 13 · 21 · 34 · 55 · 89
         Mapped to rem (base 16px) for accessibility.
         ----------------------------------------------- */
      fontSize: {
        'fib-xs': ['0.75rem', { lineHeight: '1rem' }],       // 12px
        'fib-sm': ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
        'fib-base': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'fib-lg': ['1.75rem', { lineHeight: '2.25rem' }],    // 28px
        'fib-xl': ['2.5rem', { lineHeight: '3rem' }],        // 40px
        'fib-2xl': ['4rem', { lineHeight: '1.1' }],          // 64px
      },

      /* -----------------------------------------------
         COLOR PALETTE — No withOpacity, pure HEX only.
         Use Tailwind slash-opacity: bg-primary/50
         ----------------------------------------------- */
      colors: {
        primary: '#0F172A',          // Deep Navy — dark bg / primary identity
        'primary-light': '#1E293B', // Lighter slate variant
        surface: '#F8FAFC',          // Light mode background
        'surface-alt': '#F1F5F9',   // Light mode card / alt surface
        accent: '#06B6D4',          // Electric Cyan / Teal
        'accent-glow': '#22D3EE',   // Lighter accent for glows
        'accent-deep': '#0891B2',   // Deeper accent for hover states
        muted: '#94A3B8',           // Muted text / secondary
        border: '#334155',          // Dark mode border
        'border-light': '#E2E8F0',  // Light mode border
      },

      /* -----------------------------------------------
         EXTENDED UTILITIES
         ----------------------------------------------- */
      borderRadius: {
        'bento': '1.25rem',          // Bento card radius
        '4xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(6, 182, 212, 0.15)',
        'glow-lg': '0 0 40px rgba(6, 182, 212, 0.25)',
        'bento': '0 1px 3px rgba(0, 0, 0, 0.05), 0 20px 50px -12px rgba(0, 0, 0, 0.12)',
        'bento-dark': '0 1px 3px rgba(0, 0, 0, 0.3), 0 20px 50px -12px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'slide-up': 'slideUp 0.7s ease-out both',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.35)' },
        },
      },
    },
  },
  plugins: [],
};
