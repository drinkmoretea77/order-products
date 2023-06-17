// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxt/image'],
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'ru',
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'ru',
        file: 'ru.json'
      }
    ],
    types: 'composition',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false
  },
  css: [
    '@/assets/styles/main.scss',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss" as *;'
        }
      }
    }
  }
})
