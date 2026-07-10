# Panel de edición para el cliente (Pages CMS)

El starter ya trae `.pages.yml`, que le da al cliente un **panel web** para editar la carta y los eventos sin tocar código ni Git. Guarda → commit al repo → Cloudflare reconstruye solo.

> **Por qué Pages CMS:** no hay que montar servidor de autenticación ni OAuth worker. Es gratis, open-source, y el contenido sigue viviendo en tu repo (sin base de datos externa).

---

## Puesta en marcha (vos, una vez por cliente)

1. Subí el proyecto a un repo de **GitHub**.
2. Andá a **https://app.pagescms.org** e iniciá sesión con GitHub.
3. Instalá la **GitHub App** de Pages CMS sobre ese repo (podés darle acceso solo a ese repo).
4. Abrí el proyecto → Pages CMS lee `.pages.yml` y ya te muestra **Carta** y **Eventos** como colecciones editables.
5. Probá crear/editar un plato y confirmá que aparece el commit en GitHub y que Cloudflare redeploya.

Eso es todo. No hay backend que mantener.

---

## Dar acceso al cliente

Dentro del proyecto en Pages CMS, usás **Collaborators** para invitar al cliente. Entra con su cuenta de GitHub (gratis; si no tiene, se crea una en 2 minutos) y solo ve el panel de edición — nunca el código.

Qué ve el cliente al editar un plato:

- Nombre del plato *(texto)*
- Descripción *(texto)*
- Precio *(número)*
- Categoría *(desplegable: Entradas / Pastas / Principales / Postres)*
- Mostrar en la home *(sí/no)*
- Orden *(número)*

Solo llena campos. **No puede romper el diseño** porque el layout lo controlás vos en el código.

---

## Cómo encaja en tu modelo de negocio

Esto es justo el "cliente con su login + fee mensual" que buscabas, pero **con hosting propio en Cloudflare** (no atado a Showit):

- **Vos** sos dueño del repo y del deploy → tu "máquina" repetible.
- **El cliente** edita su contenido solo, desde el navegador.
- **Cobrás** un fee mensual de mantenimiento/hosting (aunque Cloudflare Pages sea gratis, el valor es el sistema + soporte + updates que ofrecés).
- Se **repite igual** en cada cliente: clonás el starter, ajustás config y contenido, invitás al cliente.

---

## Alternativas (si algún día las necesitás)

- **Decap CMS / Sveltia CMS** — panel 100% auto-hospedado en `/admin` del propio sitio (sin depender de app.pagescms.org). A cambio, hay que desplegar un pequeño OAuth Worker en Cloudflare para el login con GitHub.
- **TinaCMS** — edición visual sobre la propia página e invitación de editores por email (el cliente no necesita GitHub). Más potente, pero suma una dependencia de Tina Cloud y su free tier tiene límites.

Para empezar, Pages CMS es el mejor punto de equilibrio: mínimo setup, gratis, y el cliente igual edita desde el navegador.
