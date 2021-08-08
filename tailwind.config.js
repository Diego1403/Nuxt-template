module.exports = {
  prefix: '',
  purge: {
      content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
      ],
      options: {
          safelist: [
              /data-theme$/,
          ]
      }
  },
  plugins: [
  
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
}
