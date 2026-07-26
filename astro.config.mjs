import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://portfolio-valentinogarciamendez.pages.dev',
  integrations: [icon(), sitemap()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
})
