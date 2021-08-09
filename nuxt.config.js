export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'diegovasquezrevilla.com',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
   loading: { color: '#fff' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
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
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/http',
    'nuxt-svg-loader',
    'nuxt-seo',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "",
          authDomain: "",
          databaseURL: "",
          projectId: "",
          storageBucket: "",
          messagingSenderId: "",
          appId: "",
          measurementId: ""
      
        },
        services: {
          analytics: true
        }
        
      }
    ],
  ],
  seo: {
    // Module options
    baseUrl: '',
    name: 'basic template',
    title: 'basic template',
    templateTitle: '%title%',
    description: 'a basic nuxt-tailwind template with seo firebase daisy ui and other basic plugins',
    canonical: 'www.github.com',
    keywords: ['template','nuxt'],
    isForcedTrailingSlash: false,
    
    facebook: {
      handle: '@nuxt',
      site: '@nuxt',
      cardType: 'summary_large_image',
    },
  },
  googleAnalytics: {
    id: "G-"
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        // https://github.com/nuxt/nuxt.js/issues/9224#issuecomment-830577523
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    }
  }
}
