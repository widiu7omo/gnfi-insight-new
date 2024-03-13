import fs, { existsSync, mkdirSync } from 'fs'
type RequestBody = {
  title?: string
  content?: Record<string, string>
}
export async function POST(request: Request) {
  const body = (await request.json()) as RequestBody
  if (!body.title || !body.content) {
    return Response.json({ success: false, message: 'Content not valid' })
  }
  const title = body.title.toLowerCase().replaceAll(' ', '-')
  const content = body.content
  //Checking directory
  if (!existsSync(`public/${title}/assets`)) {
    mkdirSync(`public/${title}/assets`, { recursive: true })
  }
  fs.writeFile(
    `public/${title}/generated-blocks.json`,
    JSON.stringify(content),
    (error) => console.log(error)
  )
  return Response.json({
    success: true,
    message: 'Generated successfully',
  })
}
