import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─────────────────────────────────────────────────────────────
//  COLECCIONES DE CONTENIDO = el "CMS" del sitio.
//  Cada archivo .md en estas carpetas es un ítem editable.
//  El cliente (o un panel git-based tipo Decap/Pages CMS que se
//  conecta acá) solo llena estos campos. No puede romper el diseño.
// ─────────────────────────────────────────────────────────────

// Platos de la carta
const menu = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/menu' }),
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    precio: z.number(),
    categoria: z.enum(['Entradas', 'Pastas', 'Principales', 'Postres']),
    destacado: z.boolean().default(false),
    orden: z.number().default(0),
  }),
});

// Eventos / novedades (lo que la artista o el restaurante actualiza seguido)
const eventos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eventos' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    resumen: z.string(),
    imagen: z.string().optional(), // ruta dentro de /public (ej: /img/evento.jpg)
    publicado: z.boolean().default(true),
  }),
});

export const collections = { menu, eventos };
