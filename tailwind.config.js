module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      signature: ['Great Vibes', 'cursive'],
    },
    colors: {
      gray: '#818181',
      'light-gray': '#D9D9D9',
      black: '#064420',
      orange: '#0de338',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: () => ({
        'smanse': 'url("/bg2.png")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
