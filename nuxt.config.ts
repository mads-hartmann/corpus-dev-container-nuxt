// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Allow the dev server to be reached through Ona's forwarded-port host.
  // NUXT_ALLOWED_HOST is set by the dev-server automation; harmless when unset.
  vite: {
    server: {
      allowedHosts: process.env.NUXT_ALLOWED_HOST
        ? [process.env.NUXT_ALLOWED_HOST]
        : undefined
    }
  }
})
