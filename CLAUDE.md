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
Nav → Hero → Servicios → Reserva → Footer
```

| Componente | Archivo | Notas |
|---|---|---|
| Nav | `Nav.astro` | Fixed, fondo `#e3dfdc`, logo + "Nutrición Deportiva" texto, links anchor, Instagram |
| Hero | `HeroSection.astro` | Imagen Unsplash full-screen, overlay gradiente, headline con `clamp()` |
| Servicios | `ServiciosSection.astro` | 2 cards centradas con `flex wrap justify-center`, imagen `h-72`, texto centrado, `max-w-md` por card. Sin botones CTA |
| Reserva | `ReservaSection.astro` | Formulario completo con calendario + horarios lado a lado |
| Footer | `FooterSection.astro` | Solo copyright centrado |

> `SobreMiSection.astro` existe en el proyecto pero fue eliminada del index.

## Archivos clave

- `astro.config.mjs` — `output: 'static'`, Tailwind vite plugin
- `src/styles/global.css` — Design tokens CSS vars, fuentes, reset, clases utilitarias
- `src/layouts/BaseLayout.astro` — HTML base, meta tags, Google Fonts link
- `src/data/servicios.ts` — Array de servicios con `imageUrl` y `imageAlt`
- `src/data/horarios.ts` — Disponibilidad real por día: L 17:30-20h, M 8:30-12:30, X 15:30-20h, J 13-17h
- `src/scripts/scroll-animations.ts` — GSAP fade-in al scroll, respeta `prefers-reduced-motion`

## Design System

Tokens en `src/styles/global.css` — nunca hardcodear colores en componentes:

```css
--color-primary:      #00682f
--color-primary-dark: #004d22
--color-primary-light:#e8f5ee
--color-surface:      #f7f4ef   /* fondo beige cálido */
--color-on-surface:   #1a1a1a
```

Fuentes: **Plus Jakarta Sans** (headings, class `heading-*`) · **Manrope** (body) — cargadas via Google Fonts `<link>` en BaseLayout.

## Formulario de reserva

Encabezado centrado (`text-align: center`). Tarjeta form con clase `.reserva-form` (`max-width: 46rem`, `padding: 2.5rem 2rem` mobile / `3rem 3.5rem` sm+).

Estructura interna:
1. **Datos personales** — `.form-fields-grid` (CSS grid, 1 col mobile → 2 col sm+), 4 campos
2. **Calendario + Horarios** — `.form-schedule-grid` (CSS grid, 1 col mobile → `1fr 1fr` sm+, `align-items: stretch`)
3. **Botón "Solicitar turno"** — `.form-submit-area` centrado, separado por `<div class="form-divider">`

### Regla crítica — estilos dinámicos

**Todo el layout y estilo del form está en `<style is:global>`, nunca en clases Tailwind.**  
Tailwind 4 no compila clases usadas solo dentro de `<script define:vars>`. Los elementos creados por JS (chips de horarios, celdas del calendario) solo reconocen clases definidas en `is:global`.

Clases JS que deben existir en `<style is:global>`:
- `.cal-day`, `.cal-day--enabled`, `.cal-day--disabled`, `.cal-day--selected`
- `.horario-chips-row` — `display: flex !important; flex-wrap: wrap`
- `.horario-chip` — `display: inline-flex !important; width: auto !important`
- `.horario-chip--selected` — `display: inline-flex !important; width: auto !important`
- `.horario-franja-label`, `.horarios-grid`

Si un chip seleccionado se expande a ancho completo, el motivo es que `display: inline-flex` o `width: auto` no están aplicando — agregar `!important`.

### Otros detalles
- Calendario: días habilitados L/M/X/J, días pasados deshabilitados, celdas circulares. Días abreviados a una letra (D/L/M/X/J/V/S)
- Panel de horarios: muestra mensaje vacío hasta que se selecciona un día; al seleccionar, popula `.horarios-grid` con franjas y chips vía JS
- Columna de horarios usa `.horarios-col { display: flex; flex-direction: column }` y `.horarios-panel { flex: 1 }` para igualar altura con el calendario
- Envío: simulado (pendiente conectar Formspree — reemplazar el `setTimeout` en el submit handler con `fetch('https://formspree.io/f/TU_ID', ...)`)

## Imágenes

Actualmente todas son placeholders de Unsplash. Para reemplazar con fotos reales:
- Hero: `src/components/HeroSection.astro` — atributo `src` del `<img>`
- Servicios: `src/data/servicios.ts` — campos `imageUrl` e `imageAlt`

Al agregar imágenes propias, moverlas a `src/assets/images/` y usar el componente `<Image>` de Astro para optimización automática (WebP + srcset).

## Logo

`public/assets/logo.jpeg` — JPEG con fondo gris claro. El nav usa `#e3dfdc` para que el logo integre sin parecer un parche.

## Reglas de desarrollo

- Mobile-first: sin prefijo = mobile, `md:` = tablet, `lg:` = desktop
- Un solo `loading="eager"` (hero). Todo lo demás `loading="lazy"`
- CSS vars para colores, nunca valores hardcodeados
- Datos (servicios, horarios) en `src/data/*.ts`, nunca hardcodeados en componentes

## Referencia de diseño

`/desing/` — archivos originales del cliente (no tocar):
- `desing.html` — prototipo de referencia
- `about.txt` — brief con horarios reales y descripción de servicios
- `logo.jpeg`, `colors.png` — assets de marca

`/skills/` — guías técnicas del workflow de construcción.
