import fs from 'fs';
export async function POST(request: Request) {
    const body = await request.json();
    fs.writeFile('public/generated-content.json', JSON.stringify(body), (error) => console.log(error))
    return Response.json({
        success: true,
        message: "Generated successfully"
    })
}