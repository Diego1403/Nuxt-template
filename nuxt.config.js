export default {

  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: ' ' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#6c63ff' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: "stylesheet", type: "text/css" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
   script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
    { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
  ],
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  modules: [
    '@nuxt/http',
    'nuxt-svg-loader',
    'nuxt-seo',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: " ",
          authDomain: " ",
          databaseURL: " ",
          projectId: " ",
          storageBucket: " ",
          messagingSenderId: " ",
          appId: " ",
          measurementId: " "
      
        },
        services: {
          analytics: true
        }
        
      }
    ],
  ],
  seo: {
    // Module options
    baseUrl: ' ',
    name: ' ',
    title: ' ',
    templateTitle: '%title%',
    description:  '',
    canonical: 'https://www.github.com/',
    keywords: ['template','vue'],
    isForcedTrailingSlash: false,
    
    facebook: {
      handle: '@diegovasq14',
      site: '@diegovasq14',
      cardType: 'summary_large_image',
    },
  },
  googleAnalytics: {
    id: ""
  },

  axios: {
    BaseURL: process.env.API_URL,
  },

  purgeCSS: {
    whitelist: ['hidden'],
    whitelistPatterns: [/md:w-[1-6]/]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      loaders: {
        file: {
          esModule: false
        }
      }
    }
  }
}
