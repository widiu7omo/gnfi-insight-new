import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/upload-image')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const formData = await request.formData()
          const file = formData.get('image') as File | null
          const slug = formData.get('slug') as string;
          if (!file) {
            return json(
              { error: 'No image file provided' },
              { status: 400 }
            )
          }

          // Validate file type
          if (!file.type.startsWith('image/')) {
            return json(
              { error: 'File must be an image' },
              { status: 400 }
            )
          }

          // Generate unique filename
          const timestamp = Date.now()
          const extension = file.name.split('.').pop() || 'jpg'
          const imageName = `upload-${timestamp}.${extension}`

          // Check if we have filesystem access (Node/Bun) or if we're in a serverless environment
          const hasFilesystem = typeof process !== 'undefined' && process.cwd

          if (hasFilesystem) {
            // Node/Bun environment - save to filesystem
            const fs = await import('fs/promises')
            const path = await import('path')

            const uploadDir = path.join(process.cwd(), 'public', 'assets', slug)
            const filePath = path.join(uploadDir, imageName)

            // Ensure upload directory exists
            try {
              await fs.mkdir(uploadDir, { recursive: true })
            } catch (err) {
              // Directory might already exist, ignore error
            }

            // Convert file to buffer and save
            const arrayBuffer = await file.arrayBuffer()
            const buffer = Buffer.from(arrayBuffer)
            await fs.writeFile(filePath, buffer)

            // Return the path relative to public folder
            const imagePath = `/assets/${slug}/${imageName}`

            return json({
              data: {
                imagePath,
                imageName,
              },
            })
          } else {
            // Cloudflare Workers or other serverless environment
            // For now, return a placeholder or error
            // In production, you'd integrate with Cloudflare R2, S3, or similar
            return json(
              {
                error: 'File upload not supported in this environment',
                message: 'Please configure Cloudflare R2 or another storage solution'
              },
              { status: 501 }
            )
          }
        } catch (error) {
          console.error('Upload error:', error)
          return json(
            {
              error: 'Failed to upload image',
              details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
          )
        }
      },
    },
  },
})
