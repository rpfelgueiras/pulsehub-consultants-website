module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      primary: ['Noto Sans', 'sans-serif'],
      secondary: ['Rubik', 'sans-serif'],
      italic: ['Playfair Display', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1142px',
    },
    colors: {
      transperent: 'transperent',
      current: 'currentColor',
      green: '#1ecb67',
      muted: '#777777',
      light: '#f8f9fa',
      white: '#FFFFFF',
      dark: '#000000',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
