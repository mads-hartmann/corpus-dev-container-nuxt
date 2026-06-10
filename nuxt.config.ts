// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Dev-only: allow the Ona forwarded-port host through Vite's host check.
  // The exposed-port domain is not localhost, so without this the dev server
  // returns "Blocked request". Scoped to development; production is untouched.
  $development: {
    vite: {
      server: {
        allowedHosts: true
      }
    }
  }
})
