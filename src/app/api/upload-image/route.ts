import { existsSync, mkdirSync, writeFile } from "fs";
import path from "path";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const image = formData.get('image') as File;
        const articleTitle = formData.get('title') as string;
        if (!image || !articleTitle) {
            return Response.json({ error: "No files received." }, { status: 400 });
        }
        const fileName = image.name.replaceAll(' ', '_')
        //Checking directory
        const articleName = articleTitle.toLowerCase().replaceAll(' ', '-');
        if (!existsSync(`public/${articleName}/assets`)) {
            mkdirSync(`public/${articleName}/assets`, { recursive: true });
        }
        const folderPath = `public/${articleName}/assets/${fileName}`
        const imageBuffer = Buffer.from(await image.arrayBuffer())
        await writeFile(
            path.join(process.cwd(), folderPath), imageBuffer, { flag: 'wx' }, (error) => {
                throw error
            }
        )
        return Response.json({
            success: true,
            message: 'Uploaded successfully'
        })
    } catch (error) {
        return Response.json({
            sucess: false,
            message: 'Upload failed'
        })
    }

}