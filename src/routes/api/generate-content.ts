import { Credits } from '@/store/useTitle'
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/generate-content')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json() as {
            title?: string
            content?: Record<string, unknown>
            seo?: Record<string, unknown>,
            credits?: Record<string, unknown>,
            finished?: boolean,
            featured?: boolean
          }
          if (!body.title || !body.content) {
            return json(
              { success: false, message: 'Content not valid' },
              { status: 400 }
            )
          }

          const title = body.title
          const slug = cleanAndDashifyString(title)
          const seo = body.seo
          const credits = body.credits as Credits
          const content = body.content
          const finished = body.finished
          const featured = body.featured

          // Check if we have filesystem access (Node/Bun)
          const hasFilesystem = typeof process !== 'undefined' && process.cwd

          if (!hasFilesystem) {
            return json(
              {
                success: false,
                message: 'File generation not supported in this environment'
              },
              { status: 501 }
            )
          }

          // Import Node.js modules
          const fs = await import('fs/promises')
          const path = await import('path')

          // Create directories
          const postsDir = path.join(process.cwd(), 'src', 'posts', slug)
          const dataDir = path.join(postsDir, 'data')
          const assetsDir = path.join(process.cwd(), 'public', 'assets', slug)

          // Ensure directories exist
          await fs.mkdir(dataDir, { recursive: true })
          await fs.mkdir(assetsDir, { recursive: true })

          // Write generated blocks
          const blocksPath = path.join(dataDir, 'generated-blocks.json')
          await fs.writeFile(blocksPath, JSON.stringify(content, null, 2))

          // Write generated meta
          const metaPath = path.join(dataDir, 'generated-meta.json')
          await fs.writeFile(
            metaPath,
            JSON.stringify({ seo, title, slug, credits, finished, featured }, null, 2)
          )
          // Comment this below, since image directly used from meta.json
          
          // Generate OG & Twitter Image
          // if (seo?.image && typeof seo.image === 'string') {
          //   const publicImagePath = path.join(process.cwd(), 'public', seo.image)

          //   try {
          //     await fs.access(publicImagePath)

          //     const imageUrlSplit = seo.image.split('.')
          //     const imageExtension = imageUrlSplit[imageUrlSplit.length - 1]

          //     if (!['jpg', 'jpeg', 'png', 'gif'].includes(imageExtension)) {
          //       return json({
          //         success: false,
          //         message: 'Generate failed. Cover format is not supported'
          //       }, { status: 400 })
          //     }
              
              // const coverImageContent = await fs.readFile(publicImagePath)

              // // Copy to app directory for OG/Twitter images
              // const publicAssetsDir = path.join(process.cwd(), 'public', 'assets', slug)
              // await fs.mkdir(publicAssetsDir, { recursive: true })

              // await fs.writeFile(
              //   path.join(publicAssetsDir, `opengraph-image.${imageExtension}`),
              //   coverImageContent
              // )
              // await fs.writeFile(
              //   path.join(publicAssetsDir, `twitter-image.${imageExtension}`),
              //   coverImageContent
              // )
          //   } catch (err) {
          //     console.error('Error processing SEO image:', err)
          //     // Continue even if image processing fails
          //   }
          // }

          return json({
            success: true,
            message: 'Generated successfully',
            slug,
          })
        } catch (error) {
          console.error('Generate content error:', error)
          return json(
            {
              success: false,
              message: 'Failed to generate content',
              details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
          )
        }
      },
    },
  },
})

function cleanAndDashifyString(str: string) {
  // Replace white spaces with dashes
  let result = str.replace(/\s+/g, '-')

  // Replace all characters that are not letters, numbers, or dashes
  result = result.replace(/[^a-zA-Z0-9-]/g, '')

  // Replace double dashes with a single dash
  result = result.replace(/-+/g, '-')

  return result.toLocaleLowerCase()
}
