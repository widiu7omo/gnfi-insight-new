import { promises as fs } from "node:fs"
export async function GET(request: Request) {
    const folderName = "contoh-artikel"
    const generatedBlocks = await fs.readFile(`${process.cwd()}/public/${folderName}/generated-blocks.json`, 'utf8')
    return Response.json(generatedBlocks);
}