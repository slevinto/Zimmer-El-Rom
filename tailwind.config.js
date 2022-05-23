module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.html',
      './assets/js/main.js'
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        'amatic': ['"Amatic SC"', 'cursive']
      },
      inset: {
        '100': '100%',
      }
    },
  },
  variants: {},
  plugins: [],
}
