module.exports = {
  prefix: 'tw-',
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
    require('daisyui'),
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
}
