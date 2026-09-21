import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s %separator %siteName',
      templateParams: { separator: '·', siteName: 'Hackathon 2026' },
      title: 'Home',
      meta: [
        { name: 'description', content: 'Hackathon 2026 project.' },
        { name: 'theme-color', content: '#020617' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  experimental: {
    typedPages: true,
  },
  compatibilityDate: '2026-09-21',
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
