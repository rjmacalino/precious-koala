import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: '#ffbd59', dark: '#f2a83a' },
        cream: '#fef2aa',
        ink: { DEFAULT: '#373737', soft: '#6e6e6e' },
        line: '#f0e6c8',
        sand: '#fdf6ec',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
