/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FFF8F0',
          100: '#F7E7DC',
          200: '#FFDFD3',
          300: '#E8B4B8',
        },
        sage: {
          100: '#E8F0EA',
          200: '#C4D7C8',
          300: '#9BB8A0',
        },
        lavender: {
          100: '#E8DFE8',
          200: '#D4C5D0',
        },
        gold: '#D4AF37',
        deepRose: '#C08B8E',
        babyBlue: '#D4EBF9',
        pastelYellow: '#ffffd2ff',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.8s ease-in',
        'slideUp': 'slideUp 0.6s ease-out',
        'gentle-sway': 'gentleSway 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gentleSway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
