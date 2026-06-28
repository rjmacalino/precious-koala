import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    // Override entirely — project breakpoints differ from Tailwind defaults
    screens: {
      sm: '621px',   // ≥ this: medium screens (was max-width: 860px in old CSS)
      md: '861px',   // ≥ this: tablet
      lg: '1001px',  // ≥ this: laptop
      xl: '1201px',  // ≥ this: wide desktop
    },
    extend: {
      colors: {
        orange: {
          DEFAULT: '#f9b82f',
          dark: '#e6a01a',
          2: '#ffd166',
        },
        cream: '#fef3c7',
        sand: '#fff8e8',
        ink: {
          DEFAULT: '#1c1917',
          soft: '#78716c',
        },
        line: '#f0e4c4',
      },
      fontFamily: {
        sans: ['var(--font-main)', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1140px',
      },
      boxShadow: {
        card: '0 3px 14px rgba(100,70,20,0.08)',
        hover: '0 8px 32px rgba(100,70,20,0.10)',
      },
      fontSize: {
        display: ['clamp(2.8rem,7.5vw,5rem)',    { lineHeight: '1' }],
        heading: ['clamp(1.75rem,4vw,2.6rem)',   { lineHeight: '1.15' }],
        subhead: ['clamp(1.5rem,3.5vw,2.2rem)',  { lineHeight: '1.15' }],
      },
    },
  },
  plugins: [],
};

export default config;
