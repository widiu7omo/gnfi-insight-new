# GNFI Insight

> A modern, full-stack headless CMS for creating and publishing interactive educational content articles.

[![Built with React](https://img.shields.io/badge/React-19.2-61dafb?logo=react)](https://react.dev/)
[![Powered by TanStack](https://img.shields.io/badge/TanStack-Start-ff4154)](https://tanstack.com/start)
[![Styled with Tailwind](https://img.shields.io/badge/Tailwind-4.1-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Runtime: Bun](https://img.shields.io/badge/Bun-v4+-f9f1e1?logo=bun)](https://bun.sh/)

**GNFI Insight** is a sophisticated content management system built for GNFI Foundation to create awareness through data-driven narratives and interactive visual storytelling. The platform features a visual builder interface, supports 31+ published articles, and deploys seamlessly to serverless environments.

---

## ✨ Key Features

- 📝 **Visual Content Builder** - Drag-and-drop interface for creating articles
- 🎨 **Component-Based Architecture** - 9 standard components + custom post-specific components
- 🌙 **Dark Mode Support** - System preference detection with manual toggle
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ♾️ **Infinite Scroll** - Smooth pagination on homepage
- 🚀 **Serverless-Ready** - Deploy to Cloudflare Workers/Pages or static hosting
- 🔍 **SEO Optimized** - Automatic meta tags, Open Graph, and Twitter Cards
- 📊 **Analytics Integration** - Google Analytics 4 built-in
- 🎯 **Zero Database** - Build-time content loading via JSON
- ⚡ **Lightning Fast** - Vite 7 build system with HMR

---

## 🚀 Quick Start

### Prerequisites

- **Bun** v4+ (primary runtime) or Node.js v18+
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd gnfi-insight

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
# Edit .env and set BASE_URL

# Start development server
bun run dev
```

Visit `http://localhost:3000` to see the application.

### Access the Builder

Navigate to `http://localhost:3000/builder` to access the CMS editor interface (development only).

---

## 📦 Tech Stack

### Core Framework
- **React 19.2** - UI framework with latest features
- **TypeScript 5.9** - Type-safe development
- **Vite 7.2** - Build tool with HMR
- **TanStack Start** - Full-stack meta-framework

### Routing & State
- **TanStack Router 1.139** - File-based routing
- **TanStack React Query 5.90** - Server state & caching
- **Jotai 2.15** - Atomic state management

### Styling & UI
- **TailwindCSS 4.1** - Utility-first CSS
- **shadcn/ui** - High-quality component library
- **Radix UI** - Headless accessible components
- **Motion/React 12.23** - Framer Motion-like animations

### Content Editing
- **TipTap 3.11** - Rich text editor
- **react-dnd 16.0** - Drag-and-drop builder
- **react-dropzone** - File uploads

### Deployment
- **Nitro V2** - Server runtime
- **Cloudflare Workers/Pages** - Edge deployment
- **Bun** - Primary runtime

---

## 📁 Project Structure

```
gnfi-insight/
├── src/
│   ├── posts/                     # Article content (31+ posts)
│   │   └── {slug}/
│   │       ├── data/
│   │       │   ├── generated-meta.json      # SEO metadata
│   │       │   └── generated-blocks.json    # Content blocks
│   │       └── components/        # Custom post components (optional)
│   │
│   ├── routes/                    # File-based routing
│   │   ├── index.tsx              # Homepage with infinite scroll
│   │   ├── $slug/                 # Article pages
│   │   ├── builder/               # CMS builder (dev-only)
│   │   └── api/                   # API endpoints
│   │
│   ├── components/
│   │   ├── post/                  # Article display components
│   │   ├── builder/               # CMS builder interface
│   │   ├── home/                  # Homepage components
│   │   └── ui/                    # Reusable UI components
│   │
│   ├── server/                    # Server functions
│   │   └── post.ts                # Post data fetching
│   │
│   ├── store/                     # Jotai state atoms
│   ├── lib/                       # Utility functions
│   └── styles.css                 # Global styles
│
├── public/
│   ├── assets/                    # Article images by slug
│   └── fonts/                     # Custom fonts
│
└── [config files]
```

---

## 🛠️ Development

### Available Commands

```bash
# Development
bun run dev              # Start dev server (http://localhost:3000)
bun run lint             # Run ESLint
bun run lint:fix         # Auto-fix lint issues
bun run test             # Run tests with Vitest

# Build & Preview
bun run build            # Build for production
bun run serve            # Preview production build locally
bun run serve:bun        # Serve with Bun runtime

# Deployment
bun run deploy:cf:pages     # Deploy to Cloudflare Pages
bun run deploy:cf:workers   # Deploy to Cloudflare Workers

# UI Components
bun ui                   # Add shadcn/ui components
```

### Creating a New Article

#### Option 1: Using the Builder UI (Recommended)

1. Start dev server: `bun run dev`
2. Navigate to `http://localhost:3000/builder`
3. Click on existing article or create new
4. Add sections and blocks using the visual editor
5. Upload images via drag-and-drop
6. Configure SEO metadata
7. Click "Save" to generate JSON files

#### Option 2: Manual Creation

1. **Create directories:**
   ```bash
   mkdir -p src/posts/my-article-slug/data
   mkdir -p public/assets/my-article-slug
   ```

2. **Create metadata file:** `src/posts/my-article-slug/data/generated-meta.json`
   ```json
   {
     "seo": {
       "title": "Article Title",
       "desc": "Short description for SEO (150-160 chars)",
       "image": "/assets/my-article-slug/cover.jpg",
       "publishedAt": "12/25/2024"
     },
     "title": "Full Article Title",
     "slug": "my-article-slug"
   }
   ```

3. **Create content file:** `src/posts/my-article-slug/data/generated-blocks.json`
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
       "groupTitle": "Introduction",
       "order": 0
     }
   ]
   ```

4. **Build and test:**
   ```bash
   bun run build
   bun run serve
   ```

### Adding Custom Components

Create post-specific components in `src/posts/{slug}/components/`:

```tsx
// src/posts/my-article/components/CustomChart.tsx
export function CustomChart({ data }: { data: number[] }) {
  return (
    <div className="w-full h-96">
      {/* Your custom component */}
    </div>
  );
}
```

Reference in block JSON:
```json
{
  "component": 9,
  "componentCustomName": "CustomChart",
  "componentProps": { "data": [10, 20, 30] }
}
```

---

## 🚢 Deployment

### Cloudflare Pages (Recommended)

```bash
# Build and deploy
bun run build
bun run deploy:cf:pages
```

**Benefits:**
- Global CDN distribution
- Automatic HTTPS
- Preview deployments
- Edge functions support

### Cloudflare Workers

```bash
bun run deploy:cf:workers
```

**Benefits:**
- Full serverless deployment
- Server-side rendering
- API routes on the edge

### Static Hosting

Deploy the `dist/client` folder to any static hosting provider:
- Vercel
- Netlify
- GitHub Pages
- S3 + CloudFront

### Bun Server

```bash
bun run build
bun run serve:bun
```

Runs the Nitro server with Bun runtime.

---

## 📚 Documentation

Comprehensive documentation is available:

- **[CLAUDE.md](./CLAUDE.md)** - AI Assistant guide (for working with LLMs)
- **[CODEBASE_GUIDE.md](./CODEBASE_GUIDE.md)** - Detailed technical documentation (845 lines)
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick lookup guide (432 lines)
- **[MCP Server](./mcp-gnfi-insight/README.md)** - Create articles from markdown using Claude Desktop

### 🤖 MCP Server - AI-Powered Article Creation

We provide an MCP (Model Context Protocol) server that allows Claude Desktop to automatically create articles from markdown:

```bash
cd mcp-gnfi-insight
npm install
```

Configure in Claude Desktop and simply paste markdown content - Claude will automatically:
- Parse markdown to GNFI Insight blocks
- Generate all necessary files
- Create custom components if needed
- Validate article structure

See [MCP Quick Start Guide](./mcp-gnfi-insight/QUICKSTART.md) for setup instructions.

### Key Concepts

#### Component Mapping System

Articles are built from components mapped by numeric IDs:

| ID | Component | Purpose |
|----|-----------|---------|
| 0 | Navbar | Navigation header |
| 1 | Hero | Cover image + title + gradient |
| 2 | Image | Full-width or contained images |
| 3 | Paragraph | Rich text with optional ornaments |
| 4 | SectionHeader | Section title with image |
| 5 | Heading | H1-H6 headings |
| 6 | Quote | Quote boxes (3 variants) |
| 9 | DynamicComponent | Custom post-specific components |

#### Content Architecture

Content is loaded at **build-time** using `import.meta.glob()`:
- No database required
- All content bundled with the app
- Works in serverless environments
- Requires rebuild for content updates

#### Section Grouping

Blocks are organized into sections for visual separation and TOC generation:

```json
[
  { "group": "section-1", "groupTitle": "Introduction", ... },
  { "group": "section-1", ... },
  { "group": "section-2", "groupTitle": "Main Content", ... }
]
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
BASE_URL=http://localhost:3000
```

- **Development**: `http://localhost:3000`
- **Production**: Your actual domain URL

Used for canonical links and SEO metadata.

### Build Configuration

Key settings in `vite.config.ts`:
- **Preset**: `bun` (can change to `node`, `cloudflare`, etc.)
- **Plugins**: TanStack Start, Nitro V2, TailwindCSS
- **Code Splitting**: Separate chunks for vendor, editor, motion

---

## 🎨 Customization

### Global Styles

Edit `/src/styles.css` for:
- Typography defaults
- Color schemes
- Layout utilities
- Dark mode overrides

### Theme Configuration

Modify `/src/context/theme-provider.tsx` for theme behavior.

### Component Styling

Use Tailwind utility classes directly in components or block JSON:

```json
{
  "componentProps": {
    "className": "bg-blue-900 text-white p-8 rounded-lg dark:bg-blue-800"
  }
}
```

---

## 🧪 Testing

```bash
# Run tests
bun run test

# Run tests in watch mode
bun run test --watch

# Run tests with coverage
bun run test --coverage
```

Tests are written with Vitest and Testing Library.

---

## 🐛 Troubleshooting

### Content not showing after changes
- **Issue**: Content is loaded at build-time
- **Solution**: Run `bun run build` after modifying JSON files

### Component not rendering
- **Issue**: Invalid component ID or missing file
- **Solution**: Check `/src/lib/component.ts` for valid IDs (0-9, skip 7)

### Builder not accessible
- **Issue**: Builder redirects to home in production
- **Solution**: Only available in development mode (`bun run dev`)

### Dark mode styling issues
- **Issue**: Missing dark mode variants
- **Solution**: Add `dark:` prefix to Tailwind classes

For more troubleshooting, see [CODEBASE_GUIDE.md](./CODEBASE_GUIDE.md#troubleshooting--common-tasks).

---

## 📈 Performance

Current optimizations:
- ⚡ Code splitting (vendor, editor, motion)
- 🗄️ React Query caching (5 min stale, 10 min cache)
- 🔄 Lazy loading custom components
- 📦 Build-time content bundling
- 🎯 Route preloading

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

[Add your license here]

---

## 🙏 Acknowledgments

Built by **GNFI Foundation** for creating awareness through data-driven narratives.

### Key Technologies
- [React](https://react.dev/) - UI framework
- [TanStack](https://tanstack.com/) - Router, Query, Start
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Bun](https://bun.sh/) - Runtime
- [Cloudflare](https://cloudflare.com/) - Deployment

---

## 📞 Support

For issues and questions:
- 📖 Read the [documentation](./CODEBASE_GUIDE.md)
- 🐛 Report bugs via GitHub Issues
- 💬 Discuss in GitHub Discussions

---

**Made with ❤️ by GNFI Foundation**