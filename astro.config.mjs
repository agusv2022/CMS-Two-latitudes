import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 👉 Cambiá esto por el dominio real de cada cliente antes de publicar.
export default defineConfig({
  site: 'https://tu-cliente.com',
  integrations: [sitemap()],
});
