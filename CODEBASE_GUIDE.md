# GNFI Insight - Comprehensive Codebase Guide

## Project Overview

**GNFI Insight** is a modern, full-stack web application for creating, managing, and publishing interactive educational content articles. It's built with a sophisticated content management system that allows both static rendering and dynamic content generation. The platform is developed by GNFI Foundation, focusing on building awareness through data-driven narratives and interactive visual content.

**Key Characteristics:**
- Content-driven editorial platform with 31+ published insights
- Hybrid rendering: supports both static generation and dynamic content delivery
- Admin builder interface for creating and editing content
- Multiple deployment targets: Bun, Cloudflare Workers/Pages, static hosting
- SEO-optimized with metadata generation
- Dark mode support with theme persistence
- Infinite scroll pagination on homepage
- Analytics integration (Google Analytics)

---

## Technology Stack

### Frontend Framework & Build Tools
- **React 19.2**: UI framework with latest features
- **TypeScript 5.9**: Type-safe development
- **Vite 7.2**: Lightning-fast build tool with HMR
- **TailwindCSS 4.1**: Utility-first CSS framework with ViteCSS plugin
- **TailwindCSS Typography**: Prose styling for rich text content

### Routing & State Management
- **TanStack React Router (1.139.0)**: File-based routing with type-safe navigation
- **TanStack React Query (5.90.10)**: Server state management with caching, infinite queries
- **TanStack React Start (1.139.0)**: Full-stack meta-framework for server functions
- **Jotai (2.15.1)**: Lightweight atomic state management for UI stores

### UI Components & Styling
- **shadcn/ui**: High-quality, accessible component library (Radix UI primitives)
- **Radix UI**: Headless component library (@radix-ui/* packages)
- **Lucide React (0.552)**: Icon library with 500+ icons
- **CVA (Class Variance Authority)**: Type-safe CSS-in-JS variant management
- **clsx & tailwind-merge**: CSS class utilities

### Animation & Interaction
- **Motion/React (12.23)**: Framer Motion-like animation library
- **react-dnd (16.0.1)**: Drag-and-drop functionality for builder interface
- **react-dropzone (14.3.8)**: File upload handling
- **embla-carousel (8.6.0)**: Carousel/slider component
- **react-slick (0.31.0)**: Additional carousel functionality
- **react-collapsed (4.2.0)**: Collapse animation utility

### Content Editing
- **TipTap (3.11)**: Headless editor framework with rich text capabilities
- **TipTap Extensions**: Bold, Italic, Link, Code, Lists, Quotes, History, etc.
- **html-react-parser (5.2.10)**: Parse HTML to React components

### Server & Deployment
- **TanStack Nitro V2**: Server runtime for API routes and server functions
- **Bun (v4+)**: Package manager and runtime (primary)
- **Node.js compatible** (fallback option)
- **Wrangler (Cloudflare)**: Deployment tool for Cloudflare Workers

### Development Tools
- **Vitest (3.2.4)**: Unit testing framework
- **ESLint (9.39)**: Code linting
- **Biome.json**: Project configuration format

### Analytics & External Services
- **react-ga4 (2.1.0)**: Google Analytics 4 integration
- **react-share (5.2.2)**: Social media sharing buttons
- **GNFI Foundation Widget**: External donation widget integration

---

## Project Structure

```
gnfi-insight/
├── src/
│   ├── routes/                    # File-based routing (TanStack Router)
│   │   ├── __root.tsx            # Root layout with theme, query client setup
│   │   ├── index.tsx             # Homepage with infinite scroll
│   │   ├── $slug/
│   │   │   └── index.tsx         # Dynamic post page renderer
│   │   ├── builder/
│   │   │   ├── route.tsx         # Builder layout (dev-only)
│   │   │   ├── index.tsx         # Builder home (no insight selected)
│   │   │   └── $slug.tsx         # Insight editor
│   │   └── api/
│   │       ├── generate-content.ts   # Content JSON generation API
│   │       └── upload-image.ts       # Image upload handler
│   │
│   ├── posts/                     # Content directory (31+ posts)
│   │   ├── air-sumber-kehidupan/
│   │   │   ├── data/
│   │   │   │   ├── generated-meta.json      # SEO metadata
│   │   │   │   └── generated-blocks.json    # Content structure
│   │   │   └── components/                   # Optional custom components
│   │   ├── berdamai-dengan-gempa/
│   │   │   ├── data/
│   │   │   └── components/        # Custom components for this post
│   │   └── [30+ more posts...]
│   │
│   ├── components/
│   │   ├── home/                 # Homepage components
│   │   │   ├── hero-section.tsx
│   │   │   ├── trending-section.tsx
│   │   │   ├── navbar.tsx
│   │   │   └── footer.tsx
│   │   │
│   │   ├── post/                 # Article display components
│   │   │   ├── dynamic-component.tsx  # Dynamic component loader
│   │   │   ├── hero.tsx              # Hero section (title, cover, gradient)
│   │   │   ├── paragraph.tsx         # Rich text with ornaments
│   │   │   ├── image.tsx             # Image display
│   │   │   ├── heading.tsx           # Heading component
│   │   │   ├── quote.tsx             # Quote variants (quote.tsx, quote1-3.tsx)
│   │   │   ├── navbar.tsx            # Article navbar
│   │   │   ├── toc.tsx               # Table of contents sidebar
│   │   │   ├── footer.tsx            # Article footer
│   │   │   ├── section-header.tsx    # Section title component
│   │   │   ├── carousel.tsx          # Carousel/slider
│   │   │   └── section-group.tsx     # Section wrapper
│   │   │
│   │   ├── builder/              # CMS builder components
│   │   │   ├── page-wrapper.tsx  # Main editor container (250 lines)
│   │   │   ├── preview.tsx        # Live preview pane
│   │   │   ├── form-metadata.tsx  # SEO metadata form
│   │   │   ├── blocks/            # Block editor components
│   │   │   │   ├── block-hero.tsx
│   │   │   │   ├── block-paragraph.tsx
│   │   │   │   ├── block-image.tsx
│   │   │   │   ├── block-heading.tsx
│   │   │   │   ├── block-quote.tsx
│   │   │   │   ├── block-section-header.tsx
│   │   │   │   ├── block-navbar.tsx
│   │   │   │   └── [more block editors...]
│   │   │   ├── list-blocks.tsx    # Block list UI
│   │   │   ├── sections.tsx       # Section manager
│   │   │   └── draggable-wrapper.tsx
│   │   │
│   │   ├── ui/                   # Reusable UI components (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── date-picker.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── empty.tsx          # Empty state component
│   │   │   ├── field.tsx          # Form field wrapper
│   │   │   ├── image-dropzone.tsx # Image upload area
│   │   │   ├── pending.tsx        # Loading state
│   │   │   ├── sonner.tsx         # Toast notifications
│   │   │   └── shadcn-io/
│   │   │       └── minimal-tiptap/ # Minimal rich text editor
│   │   │
│   │   ├── error/                # Error components
│   │   │   ├── not-found.tsx
│   │   │   └── default-catch-boundary.tsx
│   │   │
│   │   ├── app-sidebar.tsx        # Builder sidebar navigation
│   │   ├── nav-*.tsx              # Navigation components
│   │   └── theme-toggle-*.tsx     # Theme switcher
│   │
│   ├── server/                   # Server functions (Nitro)
│   │   ├── post.ts               # Post data fetching (build-time imports)
│   │   │   ├── $getAllPosts()    # Fetch paginated posts
│   │   │   ├── $getPostBySlug()  # Fetch single post with metadata
│   │   │   └── $getTOCBySlug()   # Generate TOC from blocks
│   │   └── theme.ts              # Theme persistence
│   │
│   ├── store/                    # State management (Jotai atoms)
│   │   ├── useBlocks.ts          # Content blocks state
│   │   ├── useTitle.ts           # Article title & SEO state
│   │   ├── useSections.ts        # Section state
│   │   ├── useNavigation.ts      # TOC/nav state
│   │   ├── useCards.ts           # Card data state
│   │   ├── useFiles.ts           # File upload state
│   │   ├── useParagraphModal.ts  # Modal state
│   │   └── useSlider.tsx         # Carousel state
│   │
│   ├── lib/                      # Utility functions
│   │   ├── component.ts          # Component mapping (9 standard components)
│   │   ├── utils.ts              # cn(), groupByToMap(), uniqueKey()
│   │   ├── seo.ts                # OG/Twitter metadata generation
│   │   └── persistence.ts        # Data persistence helpers
│   │
│   ├── context/
│   │   └── theme-provider.tsx    # Dark/Light/System theme context
│   │
│   ├── hooks/                    # Custom React hooks
│   │
│   ├── data/                     # Static data
│   │
│   ├── assets/                   # Static images/SVGs
│   │
│   ├── styles.css                # Global Tailwind styles (53KB)
│   ├── types.ts                  # TypeScript type definitions
│   ├── router.tsx                # Router configuration with GA4
│   ├── routeTree.gen.ts          # Auto-generated route tree
│   └── logo.svg                  # GNFI logo
│
├── public/
│   ├── assets/                   # Article images (31+ post directories)
│   │   ├── air-sumber-kehidupan/
│   │   ├── berdamai-dengan-gempa/
│   │   └── [29+ more...]
│   ├── fonts/                    # Custom fonts
│   └── [static files]
│
├── Configuration Files
│   ├── package.json              # Dependencies (95 deps, 17 devDeps)
│   ├── tsconfig.json             # TypeScript config
│   ├── vite.config.ts            # Vite build config with plugins
│   ├── components.json           # shadcn/ui config
│   ├── eslint.config.mjs         # ESLint rules
│   ├── .cta.json                 # Create-tanstack-app config
│   └── .env / .env.example       # Environment variables (BASE_URL)
│
├── .wrangler/                    # Cloudflare deployment config
└── dist/                         # Build output directory
```

### Data Structure: Generated Article Format

Each post contains:

**`generated-meta.json`** (SEO metadata):
```json
{
  "seo": {
    "title": "Article Title",
    "desc": "Short description for SEO",
    "image": "/assets/slug/cover-image.jpg",
    "publishedAt": "05/07/2024"
  },
  "title": "Full Title",
  "slug": "url-slug"
}
```

**`generated-blocks.json`** (Content structure - array):
```json
[
  {
    "index": 0,
    "component": 1,              // Component ID (0-9)
    "componentProps": {...},     // Component-specific props
    "group": "section-1",        // Section grouping
    "groupClassName": "...",     // Tailwind classes for section
    "groupTitle": "Section Title",
    "order": 0,
    "groupWithBackground": false
  }
  // ... more blocks
]
```

---

## Key Architectural Patterns

### 1. **Build-Time Static Content Loading**

The application uses `import.meta.glob()` to load all posts at build time:

```typescript
// src/server/post.ts
const metaModules = import.meta.glob('../posts/**/data/generated-meta.json', { eager: true });
const blocksModules = import.meta.glob('../posts/**/data/generated-blocks.json', { eager: true });
```

**Benefits:**
- No database required
- Works in serverless environments (Cloudflare Workers)
- All content is bundled with the app
- Fast static generation during build
- Enables static site hosting

### 2. **Component Mapping System**

Standard components are mapped by numeric IDs:

```typescript
// src/lib/component.ts
export const COMPONENT_HERO: number = 1;
export const COMPONENT_IMAGE: number = 2;
export const COMPONENT_PARAGRAPH: number = 3;
export const COMPONENT_SECTION_HEADER: number = 4;
export const COMPONENT_HEADING: number = 5;
export const COMPONENT_QUOTE: number = 6;
export const COMPONENT_CUSTOM: number = 9;

export const componentList = {
  0: Navbar,
  1: Hero,
  2: Image,
  3: Paragraph,
  4: SectionHeader,
  5: Heading,
  6: Quote,
  9: DynamicComponent  // Loads custom post-specific components
};
```

**Rendering Flow:**
```
Block JSON → Component ID → Get Component → Render with Props
```

### 3. **Dynamic Post-Specific Components**

Each post can have custom components in `src/posts/{slug}/components/`:

```typescript
// src/components/post/dynamic-component.tsx
const modules = import.meta.glob("/src/posts/**/components/*.{tsx,jsx}");
// Maps: slug/ComponentName → lazy-loaded component
```

Examples:
- `berdamai-dengan-gempa/components/SectionOneComponent.tsx`
- `cerita-dari-megahnya-masjid-istiqlal/components/GradientParagraphS3.tsx`

### 4. **State Management with Jotai**

Lightweight atomic state for builder:

```typescript
// src/store/useBlocks.ts
const blocksAtom = atom<Record<string, BlockType[]>>({});
export const useBlocks = () => useAtom(blocksAtom);
```

Used extensively in:
- Block editor forms
- Section management
- Metadata forms
- Live preview

### 5. **Server Functions Pattern**

TanStack Start server functions for build-time content access:

```typescript
export const $getPostBySlug = createServerFn()
  .inputValidator(data => data)
  .handler(({ data }) => {
    // Runs at request time, has access to imported glob data
  });
```

Three main server functions:
- `$getAllPosts()` - Paginated list
- `$getPostBySlug()` - Single post with SEO
- `$getTOCBySlug()` - Generate table of contents

### 6. **Grouped Content Structure**

Posts organize blocks into sections (groups):

```typescript
// Rendering in src/routes/$slug/index.tsx
const grouped = groupByToMap(post.postData, item => item.group);

Object.keys(grouped).map(groupName => (
  <SectionGroup className={blocks.groupClassName}>
    {blocks.map(block => renderComponent(block))}
  </SectionGroup>
))
```

Enables:
- Visual section separation
- Grouped styling
- Table of contents generation

### 7. **Infinite Scroll Homepage**

Homepage uses React Query for pagination:

```typescript
const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ['posts'],
  queryFn: async ({ pageParam }) => 
    await $getAllPosts({ data: { offset: pageParam, limit: 10 } }),
  getNextPageParam: (lastPage) => 
    lastPage.meta.hasMore ? newOffset : undefined,
});
```

Offset-based pagination with scroll detection.

### 8. **Theme Management**

Dark mode with system preference support:

```typescript
// src/context/theme-provider.tsx
- Detects system preference with matchMedia
- Persists to server via setThemeServerFn()
- Updates HTML class: <html class="dark|light">
- Watches for system preference changes
```

---

## Component Architecture

### Standard Page Components (9 types)

1. **Navbar (ID: 0)** - Navigation with logo
2. **Hero (ID: 1)** - Cover with title, image, gradient overlay
3. **Image (ID: 2)** - Responsive image with alt text
4. **Paragraph (ID: 3)** - Rich HTML text with optional ornaments
5. **SectionHeader (ID: 4)** - Section title with image
6. **Heading (ID: 5)** - Article headings
7. **Quote (ID: 6)** - Quote display (3 variants: quote1-3.tsx)
8. **SectionGroup (ID: 8)** - Container for grouping
9. **DynamicComponent (ID: 9)** - Loads custom post components

### Ornament System

Paragraphs support decorative SVG ornaments:
```typescript
interface ParagraphType {
  children: string;
  ornamentTopLeft?: string;
  ornamentTopRight?: string;
  ornamentBottomLeft?: string;
  ornamentBottomRight?: string;
  classOrnament*?: string;  // Positioning classes
}
```

### Animation Patterns

Uses Framer Motion-like animations:
- Stagger animations for paragraph text
- InView animations on scroll
- Spring animations for carousels
- Smooth transitions with CSS

---

## API Routes

### POST `/api/generate-content`

**Purpose:** Create new article content files

**Request:**
```typescript
{
  title: string;
  content: Record<string, unknown>;  // generated-blocks.json
  seo: Record<string, unknown>;      // SEO metadata
}
```

**Response:**
```typescript
{
  success: boolean;
  slug: string;  // Generated from title
  message: string;
}
```

**Behavior:**
- Generates slug from title (dashify + lowercase)
- Creates `/src/posts/{slug}/data/` directory
- Writes `generated-blocks.json` and `generated-meta.json`
- Creates `/public/assets/{slug}/` directory
- Only works in Node/Bun environments (not Cloudflare Workers)

### POST `/api/upload-image`

**Purpose:** Upload article images

**Request:** FormData with:
- `image`: File
- `slug`: string (post identifier)

**Response:**
```typescript
{
  data: {
    imagePath: string;  // /assets/{slug}/upload-{timestamp}.{ext}
    imageName: string;
  }
}
```

**Behavior:**
- Validates image type
- Generates unique filename with timestamp
- Saves to `/public/assets/{slug}/`
- Returns relative path for content references

---

## Build System & Deployment

### Vite Configuration

```typescript
// vite.config.ts
plugins: [
  nitroV2Plugin({
    preset: "bun",  // Use Bun runtime
    serverAssets: [{ baseName: 'posts', dir: './src/posts' }]
  }),
  tanstackStart(),  // Full-stack framework plugin
  tailwindcss(),    // Tailwind CSS as plugin
  viteReact(),      // React plugin
]
```

### Build Scripts

```json
{
  "dev": "vite dev --port 3000",
  "build": "vite build",
  "serve": "vite preview",
  "deploy:cf:pages": "wrangler pages deploy --branch main",
  "deploy:cf:workers": "wrangler deploy",
  "lint": "eslint ./src",
  "test": "vitest run"
}
```

### Deployment Options

1. **Bun + Local Server**
   ```bash
   bun run dev
   bun run serve:bun  # Using .output/server/index.mjs
   ```

2. **Cloudflare Pages**
   ```bash
   bun run deploy:cf:pages
   # Deploys to Cloudflare Pages with /dist/client as output
   ```

3. **Cloudflare Workers**
   ```bash
   bun run deploy:cf:workers
   # Full-stack deployment on Workers
   ```

4. **Static Hosting** (with prerender enabled)
   - Can prerender all pages to static HTML
   - Configuration commented out in vite.config.ts

### Environment Variables

- `BASE_URL` - Application base URL (for canonical links)
  - Dev: `http://localhost:3000`
  - Prod: Client-specific URL

### Build Optimization

Chunk splitting strategy:
```typescript
// Separate bundles for large dependencies
'vendor': React + React-DOM
'editor': TipTap editor
'motion': Framer Motion
```

---

## Development Workflow

### Creating a New Article

1. **In Builder** (`/builder/{slug}`):
   - Add sections and blocks
   - Edit text with rich editor
   - Upload images
   - Configure SEO metadata
   - Preview in real-time

2. **API Calls**:
   - `POST /api/upload-image` for each image
   - Images saved to `/public/assets/{slug}/`
   - References stored in component props

3. **Content Generation**:
   - `POST /api/generate-content` with full article data
   - Creates `/src/posts/{slug}/data/generated-*.json`
   - New slug appears in post list

4. **Optional Custom Components**:
   - Create `/src/posts/{slug}/components/*.tsx`
   - Use component ID 9 + `componentCustomName` property
   - Dynamically loaded at render time

5. **Build & Deploy**:
   ```bash
   bun run build
   bun run deploy:cf:pages
   ```

### File Tree Example (New Article)

```
src/posts/my-article-slug/
├── data/
│   ├── generated-meta.json
│   └── generated-blocks.json
└── components/  (optional)
    ├── CustomImage1.tsx
    └── CustomImage2.tsx

public/assets/my-article-slug/
├── upload-1234567890.jpg
├── upload-1234567891.png
└── upload-1234567892.jpg
```

---

## Advanced Features

### Table of Contents Generation

Automatically generated from section groups:

```typescript
// src/server/post.ts
$getTOCBySlug() generates:
[
  { id: "#section-1", label: "First Section Title" },
  { id: "#section-2", label: "Second Section Title" }
]
```

Rendered as sticky TOC sidebar (mobile drawer on small screens).

### SEO Optimization

- **Metadata**: Title, description, image in every post
- **Open Graph Tags**: Title, description, image
- **Twitter Card Tags**: All Twitter-specific metadata
- **Canonical Links**: Post URL with BASE_URL
- **Scripts**: Loads GNFI Foundation donation widget

### Analytics

Google Analytics 4 integration (production only):
```typescript
// src/router.tsx
ReactGA.initialize('G-1CY08P02JH');
router.history?.subscribe(location => 
  ReactGA.send({ hitType: 'pageview', page: pathname })
);
```

### Donations Widget

External script loaded per-post:
```typescript
<script 
  src="https://gnfifoundation.org/assets/widget/widget.js"
  type="module"
  widget-container="donation-container"
/>
```

---

## Data Flow Diagrams

### Homepage Flow
```
1. Homepage Route Load
   ↓
2. $getAllPosts(0, 10)
   ↓
3. Metadata glob import → Build-time loaded
   ↓
4. Featured + Trending + Grid Layout
   ↓
5. Infinite Query Setup
   ↓
6. Scroll → fetchNextPage() → $getAllPosts(offset, 10)
```

### Article Page Flow
```
1. Route: /$slug/
   ↓
2. $getPostBySlug(slug)
   ↓
3. Load: generated-meta.json + generated-blocks.json
   ↓
4. $getTOCBySlug(slug)
   ↓
5. Group blocks by section
   ↓
6. For each block:
   - Get component by ID
   - Load custom component if ID=9
   - Render with props
   ↓
7. Add TOC sidebar + Footer
```

### Builder Flow
```
1. /builder (redirect to / in prod)
   ↓
2. /builder/$slug
   ↓
3. Load initial data from $getPostBySlug
   ↓
4. Initialize Jotai stores:
   - useBlocks (blocks by section)
   - useTitle (article metadata)
   - useSections (section list)
   ↓
5. Split screen: Editor | Preview
   ↓
6. Save: POST /api/generate-content
   ↓
7. Upload Images: POST /api/upload-image
```

---

## Key Files Reference

| File | Purpose | Size |
|------|---------|------|
| `src/routes/$slug/index.tsx` | Article renderer | ~115 lines |
| `src/routes/index.tsx` | Homepage with infinite scroll | ~200 lines |
| `src/server/post.ts` | Post data fetching | ~130 lines |
| `src/components/post/dynamic-component.tsx` | Custom component loader | ~80 lines |
| `src/components/builder/page-wrapper.tsx` | Editor container | ~250 lines |
| `src/lib/component.ts` | Component mapping | ~50 lines |
| `src/styles.css` | Global Tailwind styles | ~53KB |
| `vite.config.ts` | Build configuration | ~105 lines |
| `package.json` | Dependencies | 95 prod + 17 dev deps |

---

## Performance Optimizations

1. **Code Splitting**: Separate chunks for vendor, editor, motion
2. **Lazy Loading**: Dynamic components with React.lazy + Suspense
3. **React Query Caching**: 5 min stale time, 10 min cache
4. **Image Optimization**: Responsive images with <img> (can upgrade to next/image equivalent)
5. **Route Preloading**: `defaultPreload: "intent"` for next route preloading
6. **Static Asset Caching**: All posts loaded at build time

---

## Security Considerations

1. **Build-Time Loading**: No runtime file system access risk
2. **Serverless Compatible**: Works without Node.js APIs
3. **API Validation**: Input validation on content generation
4. **File Type Checking**: Image uploads validated by MIME type
5. **Admin-Only Features**: Builder redirects to home in production
6. **XSS Protection**: html-react-parser for safe HTML parsing

---

## Future Enhancement Opportunities

1. **Database Integration**: Replace glob imports with database queries
2. **Image Optimization**: Implement image resizing/format conversion
3. **Comment System**: Add reader engagement via comments
4. **Scheduled Publishing**: Publish articles at specific times
5. **Version Control**: Track article revision history
6. **Multi-language Support**: Internationalization (i18n)
7. **Performance Monitoring**: Detailed analytics per article
8. **Content Search**: Full-text search across articles

---

## Troubleshooting & Common Tasks

### Add a New Post Type
1. Create new component in `src/components/post/`
2. Add to `componentList` in `src/lib/component.ts`
3. Assign numeric ID
4. Use in block JSON with that ID

### Deploy to Production
```bash
# Build
bun run build

# Deploy to Cloudflare Pages
bun run deploy:cf:pages

# Or deploy to Cloudflare Workers
bun run deploy:cf:workers
```

### Enable Static Prerendering
Uncomment `prerender` section in `vite.config.ts`:
```typescript
tanstackStart({
  prerender: {
    enabled: true,
    autoStaticPathsDiscovery: true,
    crawlLinks: true,
  }
})
```

### Access Post Data at Runtime
```typescript
// In any server function
import { metaBySlug, blocksBySlug } from '@/server/post'

const meta = metaBySlug.get(slug);
const blocks = blocksBySlug.get(slug);
```

---

## Glossary

- **Block**: Individual content component (hero, paragraph, image, etc.)
- **Section**: Grouped collection of blocks with shared styling
- **TOC**: Table of Contents - automatically generated sidebar
- **Ornament**: Decorative SVG element in paragraph
- **Glob**: Pattern for dynamically importing multiple files
- **Server Function**: TanStack Start function that runs server-side
- **Component ID**: Numeric identifier for standard components
- **Slug**: URL-friendly article identifier (kebab-case)

