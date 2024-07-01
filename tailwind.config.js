/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#4a90e2',
          secondary: '#d3d3d3',
          accent: '#8b572a',
          color_shade_light: '#e7eeef',
          color_text_dark_faded : '#576871',
          color_text_medium_dark: '#35363f'
        },
        dark: {
          primary: '#1a202c',
          secondary: '#2d3748',
          accent: '#4a5568',
          card_shadow_1 : '#111827',
          card_shadow_2 : '#1d2432',
          color_text_dark_faded : '#b5c0d0',
          color_text_dark : '#fff',
          color_shade_light: '#1d2432'
        },
      },
    },
  },
  plugins: [],
}
