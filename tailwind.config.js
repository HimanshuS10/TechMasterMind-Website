/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ["Roboto Condensed", 'sans-serif'],
        'coding': ["Kanit", 'sans-serif'],
        'share': ["Share Tech Mono", 'monospace']
      },
      screens: {
        'min-xl': { 'min': '1580px' }, // Custom max breakpoint
        'max-xl': { 'max': '1580px' }, // Custom max breakpoint
        'max-mxl': { 'max': '1280px' }, // Custom max breakpoint
        'max-mlg': { 'max': '1024px' }, // Custom max breakpoint
        
        // Different Screens BreakPoint
        'max-lmid': { 'max': '768px' }, // Custom max breakpoint
        'max-mid': { 'max': '588px' }, // Custom max breakpoint
        'max-phone': { 'max': '415px' }, // Custom max breakpoint
      },
    },
  },
  plugins: [],
}

