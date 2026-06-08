# UI Components & Styling

## Rules

- **All UI elements use shadcn/ui exclusively.** Do **not** create custom components from scratch.
- If a shadcn/ui component exists for a use case, use it. If it doesn't exist yet, scaffold it with the CLI — do not hand-roll a replacement.
- Do **not** install other component libraries (MUI, Chakra, Headless UI, etc.).

---

## shadcn/ui

Components are scaffolded by the shadcn CLI and live in `components/ui/`. Import them via the `@/components/ui` alias.

```bash
# Add a component
npx shadcn add <component-name>

# Examples
npx shadcn add button
npx shadcn add dialog
npx shadcn add input
npx shadcn add card
```

**Rules:**
- Do **not** manually edit files inside `components/ui/` unless absolutely necessary — re-run the CLI to update them.
- Compose shadcn components together rather than building new primitives.

```tsx
// Correct — compose shadcn components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Wrong — do not hand-roll UI elements
const MyButton = ({ children }) => <button className="...">{children}</button>
```

---

## Tailwind CSS v4

This project uses **Tailwind CSS v4**. Do **not** create `tailwind.config.js` or `tailwind.config.ts` — these are ignored in v4.

Add custom theme tokens in `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-brand: oklch(0.6 0.2 250);
}
```

### Radix UI Imports

Radix primitives (used internally by shadcn) are available through the unified `radix-ui` package:

```ts
// Correct
import { Slot, Dialog } from "radix-ui"

// Wrong — do not use scoped packages
import { Slot } from "@radix-ui/react-slot"
```

---

## The `cn` Utility

Always use `cn` from `@/lib/utils` to compose class names:

```tsx
import { cn } from "@/lib/utils"

<div className={cn("rounded-lg border p-4", isActive && "border-brand", className)} />
```

---

## Icons

Use `lucide-react` for all icons. Import as named exports.

```tsx
import { Link2, Copy, Trash2, ExternalLink } from "lucide-react"

<Copy className="size-4" />
```

- Size icons with Tailwind's `size-*` utility class (sets both `width` and `height`).
- Do not install other icon libraries.

---

## Component Conventions

- Accept a `className` prop on all reusable components and merge it via `cn()`.
- Keep `'use client'` components as leaves — Server Components handle data and pass props down.
- Use the `Slot` primitive (from `radix-ui`) for polymorphic/render-as-child components.

```tsx
import { Slot } from "radix-ui"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  className?: string
}

export function Button({ asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn("...", className)} {...props} />
}
```

---

## Dark Mode

Dark mode is handled via Tailwind's `dark:` variant. Use `dark:` prefixed utilities for overrides.

```tsx
<div className="bg-white text-black dark:bg-zinc-900 dark:text-zinc-50" />
```

Do not create separate dark-mode stylesheets.

---

## Fonts

Two variable fonts are set up in `app/layout.tsx` via `next/font/google`:

- `--font-geist-sans` → mapped to `font-sans`
- `--font-geist-mono` → mapped to `font-mono`

Reference them with `font-sans` and `font-mono` utility classes. Do not add `<link>` tags for fonts.
