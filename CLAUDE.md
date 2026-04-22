# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page para **Ana Valverde Nutrición Deportiva**. Construida con **Astro 6.x** (static output), **Tailwind CSS 4.x** y **TypeScript strict**. Sin React/Vue/Svelte — Astro components + vanilla JS.

## Commands

```bash
npm run dev       # Dev server → http://localhost:4321
npm run build     # Production build → dist/
npm run preview   # Preview del build local
```

## Estructura de secciones (orden en index.astro)

```
Nav → Hero → Servicios → Testimonios → FAQ → Reserva → Footer
```

| Componente | Archivo | Notas |
|---|---|---|
| Nav | `Nav.astro` | Fixed, transparente sobre hero (texto negro), al scroll → `#4A7C59` (texto blanco). Brand: "Ana Valverde / Nutrición Deportiva" inline, Cormorant Garamond italic |
| Hero | `HeroSection.astro` | Fondo blanco con imagen Unsplash semitransparente. Contenido centrado (sin placeholder). Headline Dancing Script verde `#335c43` |
| Servicios | `ServiciosSection.astro` | 3 cards en grid, imagen + icono + texto. Hover: `translateY(-12px)` + sombra + zoom en imagen |
| Testimonios | `TestimoniosSection.astro` | Fondo `#1c3d2e`, 3 cards semitransparentes. Hover: `translateY(-12px)` + fondo más claro |
| Reserva | `ReservaSection.astro` | Fondo `#f9edfd`. Formulario con calendario + horarios lado a lado |
| Footer | `FooterSection.astro` | Fondo `#1c3d2e`, texto blanco. 3 columnas: marca, navegación, Instagram |

> `SobreMiSection.astro` existe en el proyecto pero fue eliminada del index.

## Archivos clave

- `astro.config.mjs` — `output: 'static'`, Tailwind vite plugin
- `src/styles/global.css` — Design tokens CSS vars, fuentes, reset, clases utilitarias
- `src/layouts/BaseLayout.astro` — HTML base, meta tags, Google Fonts link
- `src/data/testimonios.ts` — Array de testimonios (nombre, texto, contexto)
- `src/data/horarios.ts` — Disponibilidad real por día: L 17:30-20h, M 8:30-12:30, X 15:30-20h, J 13-17h
- `src/scripts/scroll-animations.ts` — GSAP fade-in al scroll, respeta `prefers-reduced-motion`

## Design System

Tokens en `src/styles/global.css`:

```css
--color-primary:      #00843D
--color-primary-dark: #005c2b
--color-primary-light:#e6f4ec
--color-surface:      #F5F3F0
--color-on-surface:   #1a1a1a
```

Fuentes: **Cormorant Garamond** (headings `heading-*`) · **Dancing Script** (hero headline) · **Plus Jakarta Sans** (botones, eyebrows) · **Manrope** (body) — cargadas via Google Fonts en BaseLayout.

## Nav

- Transparente + texto negro cuando está arriba del todo
- Al scroll (`scrollY > 60`): fondo `#4A7C59`, texto blanco — JS añade clase `.nav-scrolled`
- Brand: "Ana Valverde / Nutrición Deportiva", Cormorant Garamond italic, color `#335c43` → blanco al scroll
- Mobile: menú desplegable transparente al inicio, `#4A7C59` al scroll. Links Cormorant Garamond `1rem`. Fondo y colores siguen la clase `.nav-scrolled`

## Hero

- Fondo: `linear-gradient(rgba(255,255,255,0.88), ...) + url(Unsplash)` — imagen semitransparente
- Contenido centrado horizontalmente, sin imagen placeholder a la derecha
- Headline: Dancing Script, color `#335c43`
- `min-height: 68vh`

## Formulario de reserva

Encabezado centrado. Tarjeta `.reserva-form` (`max-width: 46rem`).

Estructura interna:
1. **Datos personales** — `.form-fields-grid` (1 col mobile → 2 col sm+)
2. **Calendario + Horarios** — `.form-schedule-grid` (1 col mobile → `1fr 1fr` sm+)
3. **Botón "Solicitar turno"** — `.form-submit-area` centrado

### Regla crítica — estilos dinámicos

**Todo el layout y estilo del form está en `<style is:global>`, nunca en clases Tailwind.**  
Tailwind 4 no compila clases usadas solo dentro de `<script define:vars>`. Los elementos creados por JS (chips de horarios, celdas del calendario) solo reconocen clases definidas en `is:global`.

Clases JS que deben existir en `<style is:global>`:
- `.cal-day`, `.cal-day--enabled`, `.cal-day--disabled`, `.cal-day--selected`
- `.horario-chips-row` — `display: flex !important; flex-wrap: wrap`
- `.horario-chip` — `display: inline-flex !important; width: auto !important`
- `.horario-chip--selected` — `display: inline-flex !important; width: auto !important`
- `.horario-franja-label`, `.horarios-grid`

### Validación de campos

`.field-error` tiene `display: none` por defecto. Al validar, JS añade clase `.show` (`display: block`). **No usar clase Tailwind `hidden`** — `is:global` la sobreescribe.

### Otros detalles
- Calendario: días habilitados L/M/X/J, días pasados deshabilitados, celdas circulares
- Envío: simulado — pendiente conectar Formspree (`fetch('https://formspree.io/f/TU_ID', ...)`)

## Imágenes

Placeholders de Unsplash. Para reemplazar con fotos reales:
- Hero fondo: `HeroSection.astro` — atributo `url()` en el CSS de `.hero-section`
- Servicios: hardcodeadas en el array dentro de `ServiciosSection.astro`

Al agregar imágenes propias, moverlas a `src/assets/images/` y usar `<Image>` de Astro.

## Reglas de desarrollo

- Mobile-first: sin prefijo = mobile, `md:` = tablet, `lg:` = desktop
- Un solo `loading="eager"` (hero). Todo lo demás `loading="lazy"`
- CSS vars para colores — evitar hardcodear salvo cuando el color es específico de una sección (ej. `#1c3d2e` del footer/testimonios)
- Datos en `src/data/*.ts`, nunca hardcodeados en componentes

## Referencia de diseño

`/desing/` — archivos originales del cliente (no tocar):
- `desing.html` — prototipo de referencia
- `about.txt` — brief con horarios reales y descripción de servicios
- `logo.jpeg`, `colors.png` — assets de marca

`/skills/` — guías técnicas del workflow de construcción.
