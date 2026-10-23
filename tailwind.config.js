/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F3EEDF',
        'paper-deep': '#E8E1CD',
        ink: '#16150F',
        'ink-soft': '#5B574A',
        signal: '#FF4F1F',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"Instrument Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        logbook: 'cubic-bezier(0.22, 1, 0.36, 1)',
        stamp: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        slide: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
};
