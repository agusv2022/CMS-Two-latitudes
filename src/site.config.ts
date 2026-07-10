// ─────────────────────────────────────────────────────────────
//  CONFIG CENTRAL DEL SITIO
//  Esto es lo ÚNICO que cambiás por cliente (más el contenido en
//  src/content/). Todo el resto del starter se alimenta de acá.
// ─────────────────────────────────────────────────────────────

export const site = {
  // Identidad
  name: 'Bella Nonna',
  tagline: 'Cocina italiana de barrio',
  description:
    'Trattoria familiar en el corazón de la ciudad. Pastas caseras, horno a leña y una carta que cambia con la estación.',

  // Dominio (tiene que coincidir con astro.config.mjs)
  url: 'https://tu-cliente.com',

  // Datos de negocio (se usan también para el SEO local / schema)
  business: {
    type: 'Restaurant', // schema.org type
    phone: '+54 11 5555 5555',
    email: 'hola@bellanonna.com',
    address: 'Av. Siempreviva 742, Buenos Aires',
    priceRange: '$$',
    hours: 'Mar a Dom · 12:00–15:30 y 20:00–23:30',
  },

  // Enlaces externos (embeds / redes / contacto)
  links: {
    whatsapp: 'https://wa.me/5491155555555', // click-to-chat: solo un link
    instagram: 'https://instagram.com/bellanonna',
    // Pegá acá el enlace de tu plataforma de reservas (OpenTable, TheFork, etc.)
    reservas: '#reservas',
  },

  // Navegación
  nav: [
    { label: 'Carta', href: '/menu' },
    { label: 'Eventos', href: '/#eventos' },
    { label: 'Reservas', href: '/#reservas' },
    { label: 'Contacto', href: '/#contacto' },
  ],
};

export type SiteConfig = typeof site;
