import fs, { existsSync, mkdirSync } from 'node:fs'
type RequestBody = {
  title?: string
  content?: Record<string, string>
  seo?: Record<string, string>
}
export async function POST(request: Request) {
  const body = (await request.json()) as RequestBody
  if (!body.title || !body.content) {
    return Response.json({ success: false, message: 'Content not valid' })
  }
  const title = body.title
  const slug = title.toLowerCase().replaceAll(' ', '-')
  const seo = body.seo;
  const content = body.content
  //Checking directory
  if (!existsSync("public/article/assets")) {
    mkdirSync("public/article/assets", { recursive: true })
  }
  fs.writeFile(
    "public/article/generated-blocks.json",
    JSON.stringify(content),
    (error) => console.log(error)
  )
  fs.writeFile(
    "public/article/generated-meta.json",
    JSON.stringify({ seo, title, slug }),
    (error) => console.log(error)
  )
  return Response.json({
    success: true,
    message: 'Generated successfully',
  })
}
