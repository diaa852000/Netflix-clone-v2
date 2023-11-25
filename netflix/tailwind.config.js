/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      authContainer: {
        position: 'relative',
      },
      content: {
        position: 'absolute',
        top:0,
        left:0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        height:' 100%',
        width:' 100%',
        display: 'grid',
        gridTemplateRows: '15vh 1fr',
        gap: '1rem',
      }

    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

