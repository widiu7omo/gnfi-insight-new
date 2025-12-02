# CLAUDE.md - AI Assistant Guide for GNFI Insight

This guide is specifically written for AI assistants (like Claude) to understand and work effectively with the GNFI Insight codebase.

---

## Quick Project Context

**GNFI Insight** is a headless CMS for educational content articles built with:
- **Frontend**: React 19 + TanStack Router + TanStack Start
- **Styling**: TailwindCSS 4.1
- **State**: Jotai (builder), React Query (data fetching)
- **Content**: Build-time JSON imports (no database)
- **Deployment**: Bun, Cloudflare Workers/Pages, or static hosting

**Key Architecture Insight**: Content is loaded at build-time via `import.meta.glob()`, not from a database or file system at runtime. This enables serverless deployments.

---

## How to Approach Common User Requests

### 1. "Add a new article" or "Create content"

**What the user wants**: Create a new article with content

**Your approach**:
1. Check if they want to use the builder UI or create manually
2. If manual:
   - Create `/src/posts/{slug}/data/generated-meta.json` (SEO metadata)
   - Create `/src/posts/{slug}/data/generated-blocks.json` (content structure)
   - Create `/public/assets/{slug}/` directory for images
3. If using builder:
   - Guide them to `http://localhost:3000/builder`
   - Explain the builder interface

**Key files to modify**:
- `/src/posts/{slug}/data/generated-meta.json`
- `/src/posts/{slug}/data/generated-blocks.json`

**Example response structure**:
```json
// generated-meta.json
{
  "seo": {
    "title": "Article Title",
    "desc": "Short description for SEO (150-160 chars)",
    "image": "/assets/{slug}/cover.jpg",
    "publishedAt": "12/25/2024"
  },
  "title": "Full Article Title",
  "slug": "{slug}"
}

// generated-blocks.json
[
  {
    "index": 0,
    "component": 1,  // Hero component
    "componentProps": {
      "title": "Article Title",
      "coverUrl": "/assets/{slug}/cover.jpg",
      "className": "bg-gradient-to-b from-blue-900 to-blue-700"
    },
    "group": "section-1",
    "groupClassName": "",
    "order": 0,
    "groupTitle": "Introduction"
  },
  {
    "index": 1,
    "component": 3,  // Paragraph component
    "componentProps": {
      "children": "<p>Your HTML content here</p>"
    },
    "group": "section-1",
    "order": 1
  }
]
```

### 2. "Add a new component type" or "Create custom component"

**What the user wants**: Add a new reusable component for articles

**Your approach**:

**Option A: Standard component (appears in all articles)**
1. Create component in `/src/components/post/{component-name}.tsx`
2. Add to component mapping in `/src/lib/component.ts`
3. Assign unused ID (0-9, avoid 7 as it's unused)
4. Export from componentList

**Option B: Post-specific custom component**
1. Create in `/src/posts/{slug}/components/{ComponentName}.tsx`
2. Use component ID 9 in block JSON
3. Set `componentCustomName` to match filename

**Key files to modify**:
- Standard: `/src/lib/component.ts` + `/src/components/post/*.tsx`
- Custom: `/src/posts/{slug}/components/*.tsx`

**Example for standard component**:
```typescript
// src/components/post/video.tsx
export function Video({ src, title }: { src: string; title?: string }) {
  return (
    <div className="w-full aspect-video">
      <iframe src={src} title={title} className="w-full h-full" />
    </div>
  );
}

// src/lib/component.ts - Add:
export const COMPONENT_VIDEO: number = 7;
export const componentList = {
  // ... existing
  7: Video,
  // ...
};
```

### 3. "Fix styling" or "Change appearance"

**What the user wants**: Modify visual styling

**Your approach**:
1. **Identify scope**:
   - **Homepage**: Modify `/src/components/home/*.tsx` or `/src/routes/index.tsx`
   - **Article layout**: Modify `/src/components/post/*.tsx`
   - **Builder UI**: Modify `/src/components/builder/*.tsx`
   - **Specific article**: Modify `groupClassName` in `generated-blocks.json` or create custom component
   - **Global styles**: Modify `/src/styles.css`

2. **Use TailwindCSS classes**: This project uses Tailwind v4 with utility classes
3. **Check dark mode**: Ensure styles work with `dark:` variants

**Key files**:
- Global: `/src/styles.css`
- Homepage: `/src/routes/index.tsx`, `/src/components/home/*.tsx`
- Articles: `/src/components/post/*.tsx`
- Specific article: `/src/posts/{slug}/data/generated-blocks.json` (groupClassName, componentProps.className)

### 4. "Add feature to builder" or "Improve editor"

**What the user wants**: Enhance the CMS builder interface

**Your approach**:
1. **Identify the feature location**:
   - **Block editor forms**: `/src/components/builder/blocks/block-{type}.tsx`
   - **Main editor layout**: `/src/components/builder/page-wrapper.tsx`
   - **Preview pane**: `/src/components/builder/preview.tsx`
   - **Metadata form**: `/src/components/builder/form-metadata.tsx`
   - **Section management**: `/src/components/builder/sections.tsx`

2. **State management**: Use Jotai atoms from `/src/store/`
   - `useBlocks()`: Content blocks
   - `useTitle()`: Title and metadata
   - `useSections()`: Section list

3. **Update both editor and preview**: Changes should reflect in real-time

**Key pattern**:
```tsx
// In block editor
import { useBlocks } from '@/store/useBlocks';

function BlockParagraphEditor({ group }: { group: string }) {
  const [blocks, setBlocks] = useBlocks();
  const block = blocks[group]?.find(b => b.component === 3);

  const updateBlock = (newProps: any) => {
    setBlocks({
      ...blocks,
      [group]: blocks[group].map(b =>
        b.component === 3 ? { ...b, componentProps: newProps } : b
      )
    });
  };

  return <textarea onChange={e => updateBlock({ children: e.target.value })} />;
}
```

### 5. "Deploy" or "Build for production"

**What the user wants**: Build and deploy the application

**Your approach**:
1. **Build first**: `bun run build`
2. **Choose deployment target**:
   - **Cloudflare Pages**: `bun run deploy:cf:pages` (static + edge functions)
   - **Cloudflare Workers**: `bun run deploy:cf:workers` (full serverless)
   - **Static hosting**: Serve `/dist/client` after build
   - **Bun server**: `bun run serve:bun` (uses `.output/server/index.mjs`)

3. **Check environment variables**: Ensure `BASE_URL` is set correctly

**Important notes**:
- Builder routes (`/builder/*`) redirect to home in production
- Analytics (GA4) only loads in production
- Ensure all assets are in `/public/assets/`

### 6. "Fix TypeScript errors" or "Type issues"

**What the user wants**: Resolve type errors

**Your approach**:
1. **Check types in** `/src/types.ts`
2. **Common issues**:
   - Missing `componentProps` properties
   - Incorrect component ID types
   - Block array structure mismatch
   - Server function input/output types

3. **Key types to know**:
```typescript
type BlockType = {
  group?: string;
  groupClassName?: string;
  groupTitle?: string;
  component: number;  // 0-9
  componentCustomName?: string;  // For component 9
  componentProps: Record<string, any>;
  order?: number;
  index?: number;
}

type PostMeta = {
  seo: {
    title: string;
    desc: string;
    image: string;
    publishedAt: string;
  };
  title: string;
  slug: string;
}
```

### 7. "Optimize performance" or "Make it faster"

**What the user wants**: Improve performance

**Your approach**:
1. **Check these areas**:
   - **Images**: Ensure proper sizing, consider lazy loading
   - **Bundle size**: Check if large dependencies can be code-split
   - **React Query**: Verify stale time and cache settings
   - **Animations**: Use CSS transforms instead of layout changes
   - **Build output**: Check `/dist/client` bundle sizes

2. **Current optimizations in place**:
   - Code splitting (vendor, editor, motion chunks)
   - React Query caching (5 min stale, 10 min cache)
   - Lazy loading custom components
   - Build-time content loading

3. **Quick wins**:
   - Optimize large images
   - Add `loading="lazy"` to images
   - Reduce animation complexity
   - Preload critical routes

---

## File Organization Mental Model

Think of the project structure as three main areas:

### 1. **Content Layer** (`/src/posts/`, `/public/assets/`)
- **Purpose**: Store article content as JSON + images
- **Generated at**: Build time via builder or API
- **Accessed via**: `import.meta.glob()` in `/src/server/post.ts`
- **Modify when**: Creating/editing articles

### 2. **Display Layer** (`/src/components/post/`, `/src/routes/$slug/`)
- **Purpose**: Render articles on the frontend
- **Key pattern**: Component mapping (ID → React component)
- **Modify when**: Changing how articles look or adding new component types

### 3. **Editor Layer** (`/src/components/builder/`, `/src/routes/builder/`)
- **Purpose**: CMS interface for creating/editing content
- **Key pattern**: Jotai atoms for state, TipTap for rich text
- **Modify when**: Enhancing editor capabilities

---

## Decision Making Guide

### When should I create a standard component vs. custom component?

**Standard component** (ID 0-8):
- Will be reused across multiple articles
- Has general-purpose functionality
- Examples: Quote, Image, Heading

**Custom component** (ID 9):
- Specific to one article or a few related articles
- Has unique styling or behavior
- Examples: Custom infographic, interactive visualization

### When should I modify global styles vs. component styles?

**Global styles** (`/src/styles.css`):
- Typography defaults
- Color schemes
- Layout utilities
- Dark mode overrides

**Component styles** (Tailwind classes in components):
- Component-specific appearance
- One-off styling
- Responsive layouts

### When should I use Jotai vs. React Query?

**Jotai** (`/src/store/`):
- Builder UI state (form inputs, section list, etc.)
- Ephemeral state that doesn't persist
- State that needs to be shared across builder components

**React Query** (in route files):
- Fetching post data
- Server state that should be cached
- Infinite scroll pagination

---

## Common Patterns in This Codebase

### Pattern 1: Component Mapping

```typescript
// Block JSON contains numeric ID
{ component: 3, componentProps: { children: "<p>Text</p>" } }

// ID maps to component
componentList[3] === Paragraph

// Rendered dynamically
const Component = componentList[block.component];
return <Component {...block.componentProps} />;
```

### Pattern 2: Server Functions

```typescript
// Server function (runs on server/build-time)
export const $getPostBySlug = createServerFn()
  .inputValidator(data => data)
  .handler(async ({ data }) => {
    // Has access to import.meta.glob data
    return { meta, blocks };
  });

// Used in route loader
route.loader = async ({ params }) => {
  const post = await $getPostBySlug({ data: params.slug });
  return post;
};
```

### Pattern 3: Section Grouping

```typescript
// Blocks have group property
[
  { group: "section-1", component: 1, ... },
  { group: "section-1", component: 3, ... },
  { group: "section-2", component: 3, ... }
]

// Grouped for rendering
const grouped = groupByToMap(blocks, item => item.group);
// → Map { "section-1" => [block1, block2], "section-2" => [block3] }

// Rendered with section wrapper
{Object.entries(grouped).map(([groupName, blocks]) => (
  <SectionGroup key={groupName} className={blocks[0].groupClassName}>
    {blocks.map(block => <Component {...block} />)}
  </SectionGroup>
))}
```

### Pattern 4: Dynamic Component Loading

```typescript
// Custom component in post directory
// /src/posts/my-article/components/CustomChart.tsx
export function CustomChart() { return <div>Chart</div>; }

// Block JSON references it
{
  component: 9,  // DynamicComponent ID
  componentCustomName: "CustomChart",
  componentProps: {}
}

// Loaded dynamically at render time
const modules = import.meta.glob("/src/posts/**/components/*.{tsx,jsx}");
const Component = lazy(() => modules[`/src/posts/${slug}/components/${name}.tsx`]());
```

---

## Common Pitfalls and How to Avoid Them

### Pitfall 1: Forgetting to rebuild after content changes
**Issue**: Content is loaded at build-time, not runtime
**Solution**: Run `bun run build` after modifying JSON files

### Pitfall 2: Using component ID that doesn't exist
**Issue**: Block renders as blank or errors
**Solution**: Check `/src/lib/component.ts` for valid IDs (0-9, skip 7)

### Pitfall 3: Modifying `routeTree.gen.ts`
**Issue**: File is auto-generated and will be overwritten
**Solution**: Never edit this file; it regenerates on build

### Pitfall 4: Hardcoding asset paths
**Issue**: Assets might not load in production
**Solution**: Always use `/assets/{slug}/filename.ext` format

### Pitfall 5: Breaking dark mode
**Issue**: Styles look good in light but break in dark
**Solution**: Test with dark mode, use `dark:` variants

### Pitfall 6: Incorrect slug format
**Issue**: Routes don't match or break
**Solution**: Slugs must be kebab-case (lowercase, dashes), match folder name

### Pitfall 7: Large bundle sizes
**Issue**: Importing heavy libraries in components
**Solution**: Use dynamic imports for large dependencies

### Pitfall 8: Not handling loading states
**Issue**: Custom components cause suspense boundaries
**Solution**: Wrap dynamic components in `<Suspense>` with fallback

---

## Debugging Checklist

When something doesn't work, check:

### Content not showing:
- [ ] Does `/src/posts/{slug}/data/` exist?
- [ ] Are both `generated-meta.json` and `generated-blocks.json` present?
- [ ] Is the slug in the URL correct (matches folder name)?
- [ ] Did you rebuild? (`bun run build`)

### Component not rendering:
- [ ] Is the component ID valid (0-9, not 7)?
- [ ] For custom components (ID 9): Does `componentCustomName` match filename?
- [ ] Does the component file exist in `/src/posts/{slug}/components/`?
- [ ] Are `componentProps` correctly structured?

### Styling issues:
- [ ] Are Tailwind classes spelled correctly?
- [ ] Is `groupClassName` in the right block (first in group)?
- [ ] Did you test in dark mode?
- [ ] Are there conflicting classes?

### Builder issues:
- [ ] Is the store atom updating correctly?
- [ ] Does the preview component have access to the state?
- [ ] Are you in development mode? (builder disabled in prod)

### Build/deploy issues:
- [ ] Did the build complete without errors?
- [ ] Is `BASE_URL` set correctly in `.env`?
- [ ] Are all assets in `/public/assets/`?
- [ ] For Cloudflare: Is the preset correct in `vite.config.ts`?

---

## Code Examples for Common Tasks

### Task: Add a new paragraph to an article

```json
// In /src/posts/{slug}/data/generated-blocks.json
// Add to the array:
{
  "index": 2,  // Next index in this section
  "component": 3,  // Paragraph component
  "componentProps": {
    "children": "<p>Your paragraph text here with <strong>HTML tags</strong>.</p>",
    "className": "text-lg leading-relaxed"
  },
  "group": "section-1",
  "order": 2  // Overall order in article
}
```

### Task: Add a quote with background color

```json
{
  "index": 0,
  "component": 6,  // Quote component
  "componentProps": {
    "children": "This is an inspiring quote that deserves highlighting.",
    "className": "bg-blue-100 dark:bg-blue-900 p-8 rounded-lg"
  },
  "group": "section-2",
  "groupClassName": "py-16",
  "order": 3
}
```

### Task: Create a new section

```json
// Add blocks with a new group name
[
  {
    "index": 0,
    "component": 4,  // Section header
    "componentProps": {
      "title": "New Section Title",
      "image": "/assets/{slug}/section-icon.svg"
    },
    "group": "section-3",  // New group
    "groupClassName": "bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-24",
    "groupTitle": "New Section",  // For TOC
    "order": 10
  },
  {
    "index": 1,
    "component": 3,
    "componentProps": {
      "children": "<p>Section content...</p>"
    },
    "group": "section-3",
    "order": 11
  }
]
```

### Task: Add custom component to specific article

```tsx
// 1. Create /src/posts/my-article/components/CustomDataViz.tsx
export function CustomDataViz({ data }: { data: number[] }) {
  return (
    <div className="w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
      <div className="flex items-end justify-around h-full">
        {data.map((value, i) => (
          <div
            key={i}
            className="bg-blue-500 w-12"
            style={{ height: `${value}%` }}
          />
        ))}
      </div>
    </div>
  );
}

// 2. Add to generated-blocks.json
{
  "index": 0,
  "component": 9,  // Dynamic component
  "componentCustomName": "CustomDataViz",
  "componentProps": {
    "data": [20, 45, 60, 35, 80]
  },
  "group": "section-4",
  "order": 15
}
```

### Task: Update SEO metadata

```json
// In /src/posts/{slug}/data/generated-meta.json
{
  "seo": {
    "title": "Updated Article Title for SEO",
    "desc": "Updated description that appears in search results and social media shares. Keep it under 160 characters.",
    "image": "/assets/{slug}/new-social-image.jpg",
    "publishedAt": "12/25/2024"
  },
  "title": "Updated Article Title (can be longer)",
  "slug": "article-slug"  // Should match folder name
}
```

---

## API Usage Examples

### Upload an image

```typescript
const formData = new FormData();
formData.append('image', file);
formData.append('slug', 'article-slug');

const response = await fetch('/api/upload-image', {
  method: 'POST',
  body: formData
});

const { data } = await response.json();
// data.imagePath = "/assets/article-slug/upload-1234567890.jpg"
// Use this path in componentProps
```

### Generate content files

```typescript
const articleData = {
  title: "My New Article",
  content: [/* array of blocks */],
  seo: {
    title: "SEO Title",
    desc: "SEO description",
    image: "/assets/my-new-article/cover.jpg",
    publishedAt: "12/25/2024"
  }
};

const response = await fetch('/api/generate-content', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(articleData)
});

const { success, slug, message } = await response.json();
// Creates /src/posts/{slug}/data/ with JSON files
```

---

## Testing Your Changes

### Manual testing checklist:

1. **Development mode**:
   ```bash
   bun run dev
   # Test at http://localhost:3000
   ```

2. **Check the article page**: `/your-slug`
   - Does content render correctly?
   - Do images load?
   - Is styling correct in both light and dark mode?
   - Does TOC appear and work?

3. **Check the builder**: `/builder/your-slug`
   - Can you edit content?
   - Does preview update?
   - Can you save changes?

4. **Build and preview**:
   ```bash
   bun run build
   bun run serve
   # Test at http://localhost:4173
   ```

5. **Check console**: No errors in browser console

6. **Test responsive**: Mobile, tablet, desktop views

---

## Environment-Specific Behavior

### Development (`bun run dev`)
- Builder accessible at `/builder`
- Hot module replacement enabled
- Analytics disabled
- Verbose error messages

### Production (`bun run build` + deploy)
- Builder redirects to home
- Analytics enabled (GA4)
- Optimized bundles
- Minified code

---

## Key Takeaways for AI Assistants

1. **Always rebuild** after modifying content JSON files
2. **Check component IDs** before using them (0-9, skip 7)
3. **Use Tailwind classes** for styling, not custom CSS
4. **Test dark mode** for any styling changes
5. **Slugs must match** folder names exactly
6. **Custom components** go in `/src/posts/{slug}/components/`
7. **Standard components** go in `/src/components/post/`
8. **Never edit** `routeTree.gen.ts` (auto-generated)
9. **State management**: Jotai for builder, React Query for data
10. **Content loads** at build-time, not runtime

---

## Quick Reference: File → Purpose

| When the user wants to... | Modify these files... |
|---------------------------|-----------------------|
| Add new article content | `/src/posts/{slug}/data/*.json` |
| Change article appearance | `/src/components/post/*.tsx` |
| Add new component type | `/src/lib/component.ts` + `/src/components/post/*.tsx` |
| Customize specific article | `/src/posts/{slug}/components/*.tsx` |
| Change homepage | `/src/routes/index.tsx`, `/src/components/home/*.tsx` |
| Enhance builder | `/src/components/builder/*.tsx`, `/src/store/*.ts` |
| Modify global styles | `/src/styles.css` |
| Change routing | `/src/routes/**/*.tsx` (TanStack Router file-based) |
| Add API endpoint | `/src/routes/api/*.ts` |
| Change build config | `vite.config.ts` |
| Modify deployment | `.wrangler/`, `vite.config.ts` (preset) |

---

## Additional Resources

- **Full Documentation**: `CODEBASE_GUIDE.md` (detailed technical guide)
- **Quick Reference**: `QUICK_REFERENCE.md` (common tasks)
- **TanStack Router Docs**: https://tanstack.com/router
- **TanStack Start Docs**: https://tanstack.com/start
- **TailwindCSS Docs**: https://tailwindcss.com
- **Jotai Docs**: https://jotai.org

---

## Final Notes

This codebase follows modern React patterns with a focus on:
- **Type safety** (TypeScript)
- **Performance** (build-time loading, code splitting)
- **Developer experience** (hot reload, visual builder)
- **Deployment flexibility** (serverless, static, or server)

When in doubt:
1. Check existing articles for examples (`/src/posts/`)
2. Look at component implementations (`/src/components/post/`)
3. Review the comprehensive guide (`CODEBASE_GUIDE.md`)
4. Test your changes in both dev and build mode

Good luck coding!
