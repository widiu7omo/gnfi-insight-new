# GNFI Insight - Quick Reference Guide

## One-Minute Project Summary

GNFI Insight is a headless CMS for educational content articles. It features:
- **31+ published articles** with rich, interactive content
- **Admin builder** at `/builder` for creating/editing articles (dev-only)
- **No database** - uses build-time JSON imports (works serverless)
- **9 standard components** + custom post-specific components
- **Infinite scroll homepage** with React Query
- **Dark mode + Analytics** (GA4)

---

## Key URLs (Development)

| URL | Purpose |
|-----|---------|
| `http://localhost:3000` | Homepage (posts list) |
| `http://localhost:3000/air-sumber-kehidupan` | Article view |
| `http://localhost:3000/builder` | CMS editor (dev-only) |
| `http://localhost:3000/builder/air-sumber-kehidupan` | Edit article |

---

## Essential Files to Know

### Content & Data
- `/src/posts/{slug}/data/generated-meta.json` - SEO metadata
- `/src/posts/{slug}/data/generated-blocks.json` - Article content structure
- `/src/posts/{slug}/components/*.tsx` - Custom post-specific components (optional)
- `/public/assets/{slug}/` - Article images

### Core Logic
- `/src/server/post.ts` - Post fetching (build-time glob imports)
- `/src/lib/component.ts` - Component mapping (ID → Component)
- `/src/components/post/dynamic-component.tsx` - Custom component loader
- `/src/routes/$slug/index.tsx` - Article page renderer
- `/src/routes/index.tsx` - Homepage with infinite scroll
- `/src/routes/builder/$slug.tsx` - Article editor

### Builder UI
- `/src/components/builder/page-wrapper.tsx` - Editor container
- `/src/components/builder/blocks/*.tsx` - Block editor forms (paragraph, image, etc.)
- `/src/components/builder/preview.tsx` - Live preview pane

### Config
- `vite.config.ts` - Build setup (Vite, Tailwind, TanStack plugins)
- `package.json` - Dependencies
- `tsconfig.json` - TypeScript config
- `.env` - BASE_URL for SEO canonical links

---

## Standard Components (9 types)

| ID | Component | File | Purpose |
|----|-----------|------|---------|
| 0 | Navbar | `post/navbar.tsx` | Navigation header |
| 1 | Hero | `post/hero.tsx` | Cover image + title + gradient |
| 2 | Image | `post/image.tsx` | Full-width/contained image |
| 3 | Paragraph | `post/paragraph.tsx` | Rich text with ornaments |
| 4 | SectionHeader | `post/section-header.tsx` | Section title with image |
| 5 | Heading | `post/heading.tsx` | H1-H6 headings |
| 6 | Quote | `post/quote.tsx` | Quote box (3 variants) |
| 8 | SectionGroup | `post/section-group.tsx` | Container (auto-used) |
| 9 | DynamicComponent | `post/dynamic-component.tsx` | Custom post components |

---

## Block JSON Structure

```json
{
  "index": 0,                           // Order within group
  "component": 3,                       // Component ID (0-9)
  "componentCustomName": "CustomName",  // For component ID=9
  "componentProps": {
    "children": "<p>HTML content</p>",
    "className": "text-white",
    "ornamentTopRight": "/assets/slug/ornament.svg"
  },
  "group": "section-1",                 // Section grouping
  "groupClassName": "bg-blue-900",      // Tailwind for section
  "groupTitle": "Section Title",        // For TOC
  "order": 0,
  "groupWithBackground": false
}
```

---

## Common Tasks

### Start Development
```bash
bun install
bun run dev
# Opens http://localhost:3000
```

### Create New Article (Manual)

1. **Create directories**:
```bash
mkdir -p src/posts/my-article-slug/data
mkdir -p public/assets/my-article-slug
```

2. **Create `/src/posts/my-article-slug/data/generated-meta.json`**:
```json
{
  "seo": {
    "title": "Article Title",
    "desc": "Short description",
    "image": "/assets/my-article-slug/cover.jpg",
    "publishedAt": "2024-01-15"
  },
  "title": "Article Title",
  "slug": "my-article-slug"
}
```

3. **Create `/src/posts/my-article-slug/data/generated-blocks.json`**:
```json
[
  {
    "index": 0,
    "component": 1,
    "componentProps": {
      "title": "Article Title",
      "coverUrl": "/assets/my-article-slug/cover.jpg"
    },
    "group": "section-1",
    "groupClassName": "",
    "order": 0,
    "groupTitle": "Section One"
  }
]
```

4. **Build & test**:
```bash
bun run build
bun run serve
# Visit http://localhost:4173/my-article-slug
```

### Using the Builder UI

1. Go to `http://localhost:3000/builder`
2. Click on article in sidebar
3. Edit sections, blocks, metadata
4. Upload images via dropzone
5. Preview on right side
6. Click "Save" to create JSON files

### Add Custom Component to Article

1. Create `/src/posts/{slug}/components/MyComponent.tsx`:
```tsx
export function MyComponent() {
  return <div>Custom content</div>;
}
```

2. In block JSON, use:
```json
{
  "component": 9,
  "componentCustomName": "MyComponent",
  "componentProps": {}
}
```

3. Component auto-loads at render time

### Deploy to Production

```bash
# Build
bun run build

# Deploy to Cloudflare Pages
bun run deploy:cf:pages

# Or Cloudflare Workers
bun run deploy:cf:workers
```

---

## Data Flow: How Articles Render

```
1. User visits /air-sumber-kehidupan
2. Router loads /$slug/index.tsx
3. Server function $getPostBySlug('air-sumber-kehidupan')
4. Returns: generated-meta.json + generated-blocks.json
5. Group blocks by 'group' field
6. For each group:
   - Render SectionGroup with groupClassName
   - For each block:
     - Get component by ID from componentList
     - If ID=9: load custom component dynamically
     - Render with componentProps
7. Add TOC sidebar + Footer
```

---

## State Management (Jotai)

Used in builder to manage:

| Store | Purpose | File |
|-------|---------|------|
| `useBlocks()` | Block content by section | `store/useBlocks.ts` |
| `useTitle()` | Article title & metadata | `store/useTitle.ts` |
| `useSections()` | Section list | `store/useSections.ts` |
| `useNavigation()` | TOC open/close state | `store/useNavigation.ts` |
| `useSeoTitle()` | SEO title | `store/useTitle.ts` |
| `useSeoDesc()` | SEO description | `store/useTitle.ts` |
| `useSeoImage()` | SEO cover image | `store/useTitle.ts` |

Access in components:
```tsx
const [blocks, setBlocks] = useBlocks();
const [title, setTitle] = useTitle();
```

---

## API Endpoints

### POST `/api/upload-image`
Upload article images
```
FormData {
  image: File,
  slug: string
}
→ { data: { imagePath, imageName } }
```

### POST `/api/generate-content`
Create article JSON files
```
{
  title: string,
  content: BlockType[],
  seo: { title, desc, image, publishedAt }
}
→ { success, slug, message }
```

---

## Environment Variables

`.env`:
```
BASE_URL=http://localhost:3000
```

Used for canonical links in SEO metadata.

---

## Theme System

Dark mode with system preference detection:

```tsx
import { useTheme } from '@/context/theme-provider';

function MyComponent() {
  const { theme, setTheme } = useTheme();
  // theme: 'dark' | 'light' | 'system'
}
```

HTML class applied: `<html class="dark">` or `<html class="light">`

---

## TypeScript Types

Main types in `/src/types.ts`:

```typescript
type BlockType = {
  group?: string;
  groupClassName?: string;
  groupTitle?: string;
  component: number;                    // 0-9
  componentCustomName?: string;         // For ID=9
  componentProps: Record<string, any>;
  order?: number;
  index?: number;
}

type DraggableItem = {
  name: string;
  component: string;
  order: number;
  group: string;
  index: number;
}
```

---

## Dependencies Highlight

| Package | Why | Version |
|---------|-----|---------|
| React 19 | UI framework | 19.2.0 |
| Vite | Build tool | 7.2.4 |
| TanStack Router | File-based routing | 1.139.0 |
| TanStack React Query | Server state + pagination | 5.90.10 |
| TanStack Start | Full-stack framework | 1.139.0 |
| Jotai | Builder state | 2.15.1 |
| TipTap | Rich text editor | 3.11.0 |
| TailwindCSS | Styling | 4.1.17 |
| Motion/React | Animations | 12.23.24 |
| react-dnd | Drag-drop builder | 16.0.1 |

---

## Useful Commands

```bash
# Development
bun run dev              # Start dev server (http://localhost:3000)
bun run lint             # Run ESLint
bun run lint:fix         # Fix lint issues
bun run test             # Run tests with Vitest

# Build & Deploy
bun run build            # Build for production
bun run serve            # Preview build locally
bun run deploy:cf:pages  # Deploy to Cloudflare Pages
bun run deploy:cf:workers # Deploy to Cloudflare Workers

# UI Components
bun ui                   # Add shadcn/ui components
```

---

## Debugging Tips

1. **Check post loads**: Browser DevTools → Network → Look for `/assets/{slug}/`
2. **Check block IDs**: Open `generated-blocks.json` → find "component": values
3. **Check custom component**: Look for `componentCustomName` and ensure file exists
4. **Check styles**: Search for `groupClassName` in JSON
5. **Check TOC**: Run `$getTOCBySlug(slug)` in console (dev)

---

## Architecture Decision Highlights

1. **No Database**: Uses `import.meta.glob()` to load JSON at build-time
   - Benefit: Works in Cloudflare Workers (no file system)
   - Trade-off: Rebuild needed for new content

2. **Component Mapping by ID**: Numeric IDs instead of string names
   - Benefit: Smaller JSON files, faster lookup
   - Trade-off: Less readable JSON

3. **Server Functions**: TanStack Start + Nitro V2
   - Benefit: Type-safe client-server communication
   - Trade-off: Build-time data only (no runtime queries)

4. **Jotai Atoms**: Lightweight state for builder
   - Benefit: No boilerplate, works with Next.js-like FSR
   - Trade-off: No Redux DevTools

5. **Monolithic JSON**: Single block array vs. separate components
   - Benefit: Easy to parse and manipulate
   - Trade-off: Large files for long articles

---

## What NOT to Do

❌ Don't edit `routeTree.gen.ts` - auto-generated  
❌ Don't deploy builder to production - it redirects  
❌ Don't manually create post files - use API or builder  
❌ Don't import from `@/posts` - use server functions  
❌ Don't change component IDs - breaks existing articles  

---

## When to Modify What

| Need | File(s) |
|------|---------|
| Add new post component type | `src/components/post/*.tsx` + `src/lib/component.ts` |
| Change homepage layout | `src/routes/index.tsx` + `src/components/home/*.tsx` |
| Modify block editor UI | `src/components/builder/blocks/*.tsx` |
| Change builder layout | `src/components/builder/page-wrapper.tsx` |
| Add new post | `/src/posts/{slug}/data/generated-*.json` |
| Customize post visuals | `/src/posts/{slug}/components/*.tsx` |
| Change deployment | `vite.config.ts` + `.wrangler/` |

---

## Cloudflare Deployment Details

Wrangler config: `.wrangler/deploy/wrangler.json`
- Preset: `bun` (uses Bun runtime)
- Output: `/dist/client`
- Node.js compat: Enabled for file operations

When deploying, Cloudflare:
1. Builds with Vite
2. Creates server bundle with Nitro
3. Deploys to Workers runtime
4. Serves from Pages CDN

---

## Related Documentation

- Main Guide: `CODEBASE_GUIDE.md` (detailed, 845 lines)
- This file: Quick reference for common tasks
- TypeScript: `/tsconfig.json` (ES2022, bundler mode)
- Styling: `/src/styles.css` (Tailwind + prose)
- Router: `/src/router.tsx` (GA4 setup)

