# Agency Starter — Astro + Cloudflare Pages

Starter reusable para sitios de cliente: **rápido, estático, con SEO resuelto y un hueco para animaciones GSAP**. Pensado para clonar en cada proyecto nuevo.

Ejemplo incluido: un restaurante (**Bella Nonna**). Cambiás config + contenido y ya tenés otro cliente.

---

## 🚀 Arranque rápido

```bash
npm install       # instala dependencias
npm run dev       # servidor local en http://localhost:4321
npm run build     # genera el sitio estático en /dist
npm run preview   # previsualiza el build
```

Necesitás Node 18+ (probado en Node 22).

---

## 🗂️ Estructura (qué tocar y qué no)

```
src/
├─ site.config.ts        ← 1) DATOS DEL CLIENTE (nombre, teléfono, links, nav)
├─ content.config.ts     ← esquema de las colecciones (los campos editables)
├─ content/
│  ├─ menu/*.md          ← 2) CONTENIDO: un archivo = un plato
│  └─ eventos/*.md       ← 2) CONTENIDO: un archivo = un evento
├─ pages/                ← las páginas (home, menu, 404)
├─ layouts/BaseLayout    ← el molde común (head, SEO, GSAP)
├─ components/
│  ├─ SEO.astro          ← todo el SEO técnico (no hace falta tocarlo)
│  ├─ EmbedSlot.astro    ← hueco para pegar widgets (reservas, newsletter)
│  ├─ Header / Footer
└─ styles/global.css     ← 3) COLORES y tipografías (design tokens)
```

**Para un cliente nuevo, el 90% del trabajo es:** editar `site.config.ts`, cambiar los `.md` de contenido, y ajustar los colores en `global.css`.

---

## ✍️ Cómo edita el contenido el cliente

Cada plato o evento es un archivo `.md` con campos simples:

```md
---
nombre: Tagliatelle al ragú
descripcion: Pasta al huevo hecha en casa, ragú braseado 6 horas.
precio: 9800
categoria: Pastas
destacado: true
orden: 1
---
```

El cliente **solo llena campos**: no ve diseño ni código, así que **no puede romper el layout**. Dos formas de que edite:

1. **Vos lo editás** (care plan): tocás el `.md`, `git push`, y Cloudflare reconstruye solo.
2. **Panel visual git-based** (recomendado para clientes): ya viene configurado con **Pages CMS** (archivo `.pages.yml`). El cliente edita los mismos campos desde un panel web lindo en `app.pagescms.org`; al guardar, hace commit y el sitio se reconstruye. Ver **`CMS-SETUP.md`** para la puesta en marcha y cómo dar acceso al cliente.

> El contenido vive en el repo → el diseño lo garantizás vos → el cliente no rompe nada.

---

## ✨ Animaciones GSAP

Ya está integrado. Cualquier elemento con `data-reveal` aparece al hacer scroll (fade + subir), y respeta `prefers-reduced-motion`.

```html
<h2 data-reveal>Este título aparece al hacer scroll</h2>
```

La lógica está en `src/layouts/BaseLayout.astro` (script de módulo, GSAP viene de npm y se empaqueta minificado). Para efectos más específicos (parallax, timelines), agregás tu código en ese mismo script o en un `<script>` de la página — tenés GSAP + ScrollTrigger disponibles.

---

## 🔍 SEO (ya resuelto)

- Meta title/description por página (props del `BaseLayout`).
- Open Graph + Twitter Card (se ven bien al compartir en WhatsApp/redes).
- Canonical automático.
- **JSON-LD** de negocio local (schema.org) — bueno para SEO local / Google.
- `sitemap-index.xml` y `robots.txt` generados solos.
- Rendimiento de fábrica: sitio estático en el CDN de Cloudflare = Core Web Vitals altos sin esfuerzo.

Por página, pasás título y descripción así:

```astro
<BaseLayout title="Carta" description="Nuestra carta de pastas y postres.">
```

**Antes de publicar** cambiá el dominio en dos lugares: `astro.config.mjs` (`site:`) y `src/site.config.ts` (`url:`). Y subí una imagen `public/og-default.jpg` (1200×630) para las previews al compartir.

---

## ☁️ Deploy a Cloudflare Pages

1. Subí el proyecto a un repo de GitHub.
2. En Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**.
3. Elegí el repo y configurá:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cada `git push` reconstruye y publica solo.
5. **Dominio:** en Pages → Custom domains, agregás el dominio del cliente y seguís las instrucciones de DNS (apuntás el dominio de GoDaddy/registrador a Cloudflare).

Hosting gratis, HTTPS automático, CDN global. Sin servidor que mantener.

---

## 🛒 Sumar carrito / reservas / newsletter

Se hace con **embeds** (sin backend). Usá el componente `EmbedSlot` o pegá el código directo:

- **Reservas:** widget de OpenTable / TheFork / Eat App.
- **Carrito chico:** Shopify Buy Button o Snipcart (pensado para sitios estáticos).
- **Newsletter:** formulario embebido de Mailchimp / Brevo.
- **WhatsApp:** ya está, es un link `wa.me` en `site.config.ts`.

El cliente gestiona productos/reservas/campañas desde el panel de cada servicio; el sitio solo muestra el widget.

---

## Checklist para clonar en un cliente nuevo

- [ ] `site.config.ts` — nombre, datos, links, nav
- [ ] `global.css` — colores y fuentes de la marca
- [ ] `src/content/` — cargar el contenido real
- [ ] `astro.config.mjs` + `site.config.ts` — dominio real
- [ ] `public/og-default.jpg` — imagen para compartir
- [ ] `public/favicon.svg` — favicon de la marca
- [ ] Embeds — pegar reservas / newsletter / carrito
- [ ] Deploy a Cloudflare Pages + conectar dominio
