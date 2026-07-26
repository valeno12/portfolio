import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

export default defineConfig({
  integrations: [icon()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
})
