// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    server: {
      // Allow Ona exposed-port hosts (<port>--<env-id>.<runner-domain>)
      // to reach the dev server through port forwarding.
      allowedHosts: ['.flex.doptig.cloud']
    }
  }
})
