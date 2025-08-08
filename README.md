# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# riff-vue

# Design System Variables

This document describes the design tokens extracted from Figma and implemented in Tailwind CSS for consistent UI development.

## 1. Colors

Colors are defined as **primitives** in `design-tokens/color-primitives.json` and loaded into Tailwind's `theme.extend.colors`.

```js
import * as colorPrimitives from "./design-tokens/color-primitives.json";

extend: {
  colors: colorPrimitives
}
```
Usage example:
```html
<div class="bg-brand-300 text-neutral-700">
  Button
</div>
```

## 2. Spacing

Spacing tokens from Figma map to Tailwind’s spacing scale in rem units

| Token | Value    | Px    |
| ----- | -------- | ----- |
| 50    | 0.125rem | 2px   |
| 100   | 0.25rem  | 4px   |
| 150   | 0.375rem | 6px   |
| 200   | 0.5rem   | 8px   |
| 300   | 0.75rem  | 12px  |
| 400   | 1rem     | 16px  |
| 600   | 1.5rem   | 24px  |
| 800   | 2rem     | 32px  |
| 1200  | 3rem     | 48px  |
| 1600  | 4rem     | 64px  |
| 2400  | 6rem     | 96px  |
| 4000  | 9.375rem | 150px |

Usage:
```html
<div class="p-400">Padding 16px</div>
```

## 3. Border Radius
```js
borderRadius: {
  "100": "0.25rem", // 4px
  "200": "0.5rem",  // 8px
  "400": "1rem",    // 16px
}
```



## 4. Typography

### Font Families

```js
fontFamily: {
  heading: ['Fira Sans', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
}
```

### Font Weights

```js
fontWeight: {
  regular: '400',
}
```

### Font Sizes
```js
fontSize: {
  xs: "0.75rem",    // 12px
  sm: "0.875rem",   // 14px
  md: "1rem",       // 16px
  lg: "1.25rem",    // 20px
  xl: "1.5rem",     // 24px
  '2xl': "2rem",    // 32px
  '3xl': "2.5rem",  // 40px
  '4xl': "3rem",    // 48px
  '5xl': "4rem",    // 64px
  '6xl': "4.5rem",  // 72px
}
```
Usage:

```html
<h1 class="font-heading text-4xl">Heading</h1>
<p class="font-body text-md">Body text</p>
```

## 5. Breakpoints

These match Figma frame sizes for responsive design.

| Tailwind Key | Min Width | Figma Reference                 |
| ------------ | --------- | ------------------------------- |
| xs           | 375px     | Mobile small                    |
| sm           | 640px     | Mobile large / small tablet     |
| md           | 768px     | Tablet portrait                 |
| lg           | 1024px    | Tablet landscape / small laptop |
| xl           | 1280px    | Desktop                         |
| 2xl          | 1440px    | Large desktop                   |
| 3xl          | 1920px    | Full HD / Wide monitors         |

Usage:

```html
<div class="p-4 md:p-8 xl:p-12">
  Responsive padding
</div>
```

### Principle:

We keep only primitives in Tailwind, no semantic mappings (primary, secondary, h1, etc.).
