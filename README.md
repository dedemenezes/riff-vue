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


# Riff Vue Component Library - Simple Documentation


## 🏗️ Component Library Structure

```
src/components/
├── app/           # App-specific components
├── inputs/        # Form components
├── layout/        # Layout & navigation
└── ui/           # Reusable UI components
    ├── accordion/
    ├── buttons/
    ├── cards/
    ├── icons/
    ├── tags/
    └── typography/
```

---

## 🎨 Design System

### Colors
- **Neutrals**: `neutrals-200`, `neutrals-300`, `neutrals-600`, `neutrals-900`, `neutrals-1000`
- **Brand**: `magenta-600`, `laranja-600`, `vermelho-600`
- **Transparency**: `white-transp-1000`

### Typography
- **Fonts**: `font-body`, `font-heading`
- **Weights**: `font-regular`, `font-semibold`
- **Sizes**: `text-xs`, `text-sm`, `text-md`, `text-xl`

### Spacing
- **Scale**: `100`, `150`, `200`, `300`, `400` (padding/margin)
- **Border Radius**: `rounded-100`, `rounded-200`

---

## 📚 Typography Components

### BaseHeader
Main heading component with customizable font size and color.
```vue
<BaseHeader fontSize="text-2xl" textColor="text-neutrals-900">
  Page Title
</BaseHeader>
```

### BodyRegular
Standard body text component.
```vue
<BodyRegular>
  Regular paragraph text content
</BodyRegular>
```

### Other Typography
- **HeaderSmall**: Small heading text
- **SectionHeader**: Section title styling
- **SubHeading**: Subtitle component
- **OverLine**: Small caps text
- **BodyStrongXs**: Extra small bold text

---

## 🔘 Button Components

### BaseButton
Main button component with variants and sizes.

**Variants:**
- `gray`: Default neutral button
- `cta`: Gradient call-to-action button
- `rioMarket`: Red background button
- `underline`: Text button with underline

**Sizes:**
- `xs`: Extra small (px-200 py-150)
- `sm`: Small (px-300 py-200)
- `md`: Medium (px-400 py-400)
- `lg`: Large (px-200 py-400)

```vue
<BaseButton variant="cta" size="md">
  Click me
</BaseButton>
```

### ButtonText
Text-only button component.

**Variants:**
- `dark`: Dark text with hover
- `light`: White transparent text
- `color`: Gradient text effect

```vue
<ButtonText variant="color" size="md" text="Learn More" />
```

---

## 📝 Input Components

### TextInput
Standard text input with label and validation states.
```vue
<TextInput
  id="email"
  label="Email Address"
  placeholder="Enter your email"
  v-model:value="email"
/>
```

### CheckboxInput
Checkbox with custom styling and label.
```vue
<CheckboxInput
  label="I agree to terms"
  v-model="agreed"
/>
```

---

## 🃏 Card Components

### ArticleCard
Article display card with image and content.

**Variants:**
- `primary`: Full content display
- `secondary`: Fixed height (182px)
- `simple`: Minimal version

```vue
<ArticleCard
  variant="primary"
  :backgroundImage="imageUrl"
  title="Article Title"
  content="Article description..."
  date="2024-01-15"
  category="News"
/>
```

### ListCard & QuickLinkCard
Specialized card components for different content types.

---

## 🔄 Accordion Components

### AccordionGroup
Collapsible content section.
```vue
<AccordionGroup text="Section Title" :isOpen="false">
  <template #content>
    <p>Hidden content here...</p>
  </template>
</AccordionGroup>
```

---

## 🏷️ Tag Components

### TagFilter
Removable filter tag with close icon.
```vue
<TagFilter text="Design" />
```

### TagMostra & TagScreening
Specialized tag variants for different contexts.

---

## 🎯 Icon System

### BaseIcon
Core icon component with gradient support.
```vue
<BaseIcon
  :width="24"
  :height="24"
  className="text-neutrals-900"
  :active="true"
>
  <!-- SVG content -->
</BaseIcon>
```

### Icon Categories

**Actions** (4 icons):
- IconClose, IconFilter, IconPlus, IconSearch

**Misc** (8 icons):
- IconChange, IconClock, IconDash, IconInfo, IconLink, IconNewUser, IconPin, IconProgram

**Navigation** (4 icons):
- IconCarretUp, IconChevronLeft, IconChevronRight, IconMenu

**Status** (1 icon):
- IconCheck

---

## 🔧 Usage Guidelines

### Component Props
- Always include type validation
- Use validator functions for restricted values
- Provide sensible defaults
- Mark required props clearly

### CSS Classes
- Use design system tokens consistently
- Prefer utility classes over custom CSS
- Follow spacing scale (100, 150, 200, 300, 400)

### Naming Conventions
- Components: PascalCase (BaseButton)
- Props: camelCase (textColor)
- CSS classes: kebab-case (text-neutrals-900)

---

## ✅ Missing Components (To Complete 100%)

1. **Modal/Dialog Components** - Only missing piece for full UI coverage
2. **Loading/Spinner Components** - For async states
3. **Toast/Notification Components** - For user feedback

---

## 🎯 Quick Start Examples

```vue
<!-- Typography -->
<BaseHeader fontSize="text-3xl">Welcome</BaseHeader>
<BodyRegular>This is body text</BodyRegular>

<!-- Buttons -->
<BaseButton variant="cta" size="md">Get Started</BaseButton>
<ButtonText variant="color" text="Learn More" />

<!-- Forms -->
<TextInput id="name" label="Full Name" v-model:value="name" />
<CheckboxInput label="Subscribe" v-model="subscribe" />

<!-- Cards -->
<ArticleCard
  :backgroundImage="img"
  title="Title"
  content="Content..."
  date="2024-01-15"
  category="News"
/>

<!-- Tags -->
<TagFilter text="JavaScript" />

<!-- Icons -->
<IconSearch :width="20" className="text-neutrals-700" />
```
