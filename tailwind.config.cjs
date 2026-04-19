/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  /* Dark mode is permanently ON — no toggle, always terminal-dark */
  darkMode: 'class',
  theme: {
    fontFamily: {
      /* Pixel font — headers, accents, logo, H2, meta-tags */
      pixel: ['"VT323"', 'monospace'],
      /* Monospace — body text, paragraphs, technical descriptions */
      mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      /* Fallback sans */
      sans: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
    },
    extend: {
      /* -----------------------------------------------
         BRUTALIST COLOR PALETTE — Pure HEX, no opacity wrappers.
         bg-zinc-950 base, off-white text, terminal green & CRT amber accents.
         ----------------------------------------------- */
      colors: {
        /* Backgrounds */
        'terminal-bg':    '#09090b',  /* zinc-950 */
        'terminal-panel': '#18181b',  /* zinc-900 */
        'terminal-card':  '#27272a',  /* zinc-800 */

        /* Text */
        'terminal-text':    '#d4d4d8', /* zinc-300 — primary body */
        'terminal-dim':     '#a1a1aa', /* zinc-400 — secondary/muted */
        'terminal-faint':   '#71717a', /* zinc-500 — faint meta text */

        /* Borders */
        'terminal-border':       '#3f3f46', /* zinc-700 */
        'terminal-border-hard':  '#52525b', /* zinc-600 */

        /* Accent: Terminal Green */
        'terminal-green':       '#10b981', /* emerald-500 */
        'terminal-green-dim':   '#059669', /* emerald-600 */
        'terminal-green-glow':  '#34d399', /* emerald-400 */

        /* Accent: CRT Amber */
        'terminal-amber':       '#f59e0b', /* amber-500 */
        'terminal-amber-dim':   '#d97706', /* amber-600 */
        'terminal-amber-glow':  '#fbbf24', /* amber-400 */

        /* Legacy compatibility aliases (so old classes don't break during refactor) */
        primary:        '#09090b',
        'primary-light':'#18181b',
        surface:        '#d4d4d8',
        'surface-alt':  '#18181b',
        accent:         '#10b981',
        'accent-glow':  '#34d399',
        'accent-deep':  '#059669',
        muted:          '#a1a1aa',
        border:         '#3f3f46',
        'border-light': '#3f3f46',
      },

      /* -----------------------------------------------
         TYPOGRAPHY — Retro terminal scale
         ----------------------------------------------- */
      fontSize: {
        'fib-xs':   ['0.75rem',  { lineHeight: '1rem' }],
        'fib-sm':   ['0.875rem', { lineHeight: '1.25rem' }],
        'fib-base': ['1.125rem', { lineHeight: '1.75rem' }],
        'fib-lg':   ['1.75rem',  { lineHeight: '2.25rem' }],
        'fib-xl':   ['2.5rem',   { lineHeight: '3rem' }],
        'fib-2xl':  ['4rem',     { lineHeight: '1.1' }],

        /* Pixel-specific sizes */
        'pixel-sm':  ['1rem',    { lineHeight: '1.5rem' }],
        'pixel-md':  ['1.5rem',  { lineHeight: '2rem' }],
        'pixel-lg':  ['2rem',    { lineHeight: '2.5rem' }],
        'pixel-xl':  ['3rem',    { lineHeight: '3.5rem' }],
        'pixel-2xl': ['4rem',    { lineHeight: '1.1' }],
      },

      /* -----------------------------------------------
         BRUTALIST — No curves. Override all radii to 0.
         ----------------------------------------------- */
      borderRadius: {
        'none': '0px',
        'bento': '0px',
        DEFAULT: '0px',
        'sm': '0px',
        'md': '0px',
        'lg': '0px',
        'xl': '0px',
        '2xl': '0px',
        '3xl': '0px',
        '4xl': '0px',
        'full': '0px',
      },

      /* -----------------------------------------------
         SHADOWS — Terminal glow effects
         ----------------------------------------------- */
      boxShadow: {
        'glow':       '0 0 15px rgba(16, 185, 129, 0.15)',
        'glow-lg':    '0 0 30px rgba(16, 185, 129, 0.25)',
        'glow-amber': '0 0 15px rgba(245, 158, 11, 0.15)',
        'bento':      '0 1px 3px rgba(0, 0, 0, 0.3)',
        'bento-dark': '0 1px 3px rgba(0, 0, 0, 0.5)',
        'terminal':   'inset 0 0 60px rgba(16, 185, 129, 0.03)',
      },

      /* -----------------------------------------------
         ANIMATIONS — Boot sequence, blink, scan
         ----------------------------------------------- */
      animation: {
        'fade-in':     'fadeIn 0.6s ease-out both',
        'slide-up':    'slideUp 0.7s ease-out both',
        'pulse-glow':  'pulseGlow 2s ease-in-out infinite',
        'blink':       'blink 1s step-end infinite',
        'scanline':    'scanline 8s linear infinite',
        'boot-in':     'bootIn 0.3s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.15)' },
          '50%':      { boxShadow: '0 0 40px rgba(16, 185, 129, 0.35)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        bootIn: {
          '0%':   { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
