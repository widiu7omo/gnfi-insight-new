import { promises as fs } from "node:fs"
export async function GET(request: Request) {
    const generatedBlocks = await fs.readFile(`${process.cwd()}/public/article/generated-blocks.json`, 'utf8')
    return Response.json(generatedBlocks);
}