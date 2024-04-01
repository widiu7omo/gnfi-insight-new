import { existsSync, mkdirSync, writeFile } from 'node:fs'
import path from 'node:path'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const image = formData.get('image') as File
    if (!image) {
      return Response.json({ error: 'No files received.' }, { status: 400 })
    }
    const fileName = image.name.replaceAll(' ', '_')
    const folderPath = `public/assets/${fileName}`
    const imageBuffer = Buffer.from(await image.arrayBuffer())
    await writeFile(
      path.join(process.cwd(), folderPath),
      imageBuffer,
      { flag: 'w' },
      (error) => {
        throw error
      }
    )
    return Response.json({
      success: true,
      message: 'Uploaded successfully',
      data: {
        imagePath: folderPath.replaceAll('public/', ''),
        imageName: fileName,
      },
    })
  } catch (error) {
    return Response.json({
      sucess: false,
      message: 'Upload failed',
    })
  }
}
