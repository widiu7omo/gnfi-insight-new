import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin'
import { analyzer } from 'vite-bundle-analyzer'
import fs from 'node:fs'
const config = defineConfig({
  plugins: [
    // Enable this if you want run on cloudflare module
    nitroV2Plugin({
      compatibilityDate: '2025-11-03',
      preset: "bun",
      compressPublicAssets: true,
      plugins: ['./src/server/plugins/compression.ts'],
      serverAssets: [
        {
          baseName: 'posts',
          dir: './src/posts'
        }
      ]
    }),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart({
      // Enable this if you want run on static site
      // prerender: {
      //   // Enable prerendering
      //   enabled: true,

      //   // Enable if you need pages to be at `/page/index.html` instead of `/page.html`
      //   autoSubfolderIndex: true,

      //   // If disabled, only the root path or the paths defined in the pages config will be prerendered
      //   autoStaticPathsDiscovery: true,

      //   // How many prerender jobs to run at once
      //   concurrency: 14,

      //   // Whether to extract links from the HTML and prerender them also
      //   crawlLinks: true,

      //   // Filter function takes the page object and returns whether it should prerender
      //   filter: ({ path }) => !path.startsWith('/do-not-render-me'),

      //   // Number of times to retry a failed prerender job
      //   retryCount: 2,

      //   // Delay between retries in milliseconds
      //   retryDelay: 1000,

      //   // Maximum number of redirects to follow during prerendering
      //   maxRedirects: 5,

      //   // Fail if an error occurs during prerendering
      //   failOnError: true,

      //   // Callback when page is successfully rendered
      //   onSuccess: ({ page }) => {
      //     console.log(`Rendered ${page.path}!`)
      //   },
      // },
      // // Optional configuration for specific pages
      // // Note: When autoStaticPathsDiscovery is enabled (default), discovered static
      // // routes will be merged with the pages specified below
      // pages: [
      //   {
      //     path: '/example',
      //     prerender: { enabled: true },
      //   },
      // ],
    }),
    tailwindcss(),
    viteReact(),
    analyzer({
      analyzerMode: 'server',
      openAnalyzer: false
    })
  ],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          fs.appendFileSync('chunks-log.txt', `${id}\n`);

          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler') || id.includes('motion') || id.includes('@tanstack')) {
              return 'vendor';
            }
            if (id.includes('lucide')) {
              return 'ui';
            }
            if (id.includes('@tiptap') || id.includes('prosemirror')) {
              return 'editor';
            }
          }
        },
      },
    },
  },
})

export default config
