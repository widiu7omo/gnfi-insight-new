import { readdirSync, statSync, readFileSync, renameSync, copySync, mkdirSync, existsSync } from 'fs-extra';
import * as path from 'path';

const ROOT = process.cwd();
const insightHtmlDir = path.join(ROOT, '.insight-html');

// 1. Get all folders in root except those starting with a dot
const folders = readdirSync(ROOT)
    .filter(f => statSync(path.join(ROOT, f)).isDirectory() && !f.startsWith('.') && f !== 'node_modules' && f !== 'contoh-artikel')
    .sort();

console.log(`Found folders: ${folders.join(', ')}`);

// 2. Run 'bun run build-prod' synchronously in all folders
function buildAllSync() {
    // 1. Make 'insight-html' dir if not exists
    if (!existsSync(insightHtmlDir)) {
        mkdirSync(insightHtmlDir);
        console.log(`Created directory: ${insightHtmlDir}`);
    } else {
        console.log(`Directory already exists: ${insightHtmlDir}`);
    }
    const { execSync } = require('child_process');
    for (const folder of folders) {
        console.log(`\n=== Building folder: ${folder} ===`);
        try {
            execSync(`cd ${folder} && bun run build-prod`, { stdio: 'inherit' });
            console.log(`Build succeeded for ${folder}`);

            // Remove unwanted files after successful build
            const outDir = path.join(ROOT, folder, 'out');
            const filesToDelete = ['generator.html', 'generator.txt', 'preview.html', 'preview.txt'];
            for (const file of filesToDelete) {
                const filePath = path.join(outDir, file);
                if (existsSync(filePath)) {
                    require('fs-extra').removeSync(filePath);
                    console.log(`Deleted: ${filePath}`);
                }
            }
            // Copy the 'out' directory to '.insight-html'
            const metaPath = path.join(ROOT, folder, 'public/article/generated-meta.json');
            if (!existsSync(metaPath)) {
                console.log(`Meta file not found for ${folder}, skipping.`);
                continue;
            }
            const meta = JSON.parse(readFileSync(metaPath, 'utf-8'));
            const slug = meta.slug;
            if (!slug) {
                console.log(`No slug found in meta for ${folder}, skipping.`);
                continue;
            }
            const slugDir = path.join(ROOT, folder, slug);
            if (!existsSync(outDir)) {
                console.log(`Out directory not found for ${folder}, skipping.`);
                continue;
            }
            // 2. Rename 'out' to slug
            renameSync(outDir, slugDir);
            console.log(`Renamed ${outDir} to ${slugDir}`);
            // 3. Copy to 'insight-html'
            copySync(slugDir, path.join(insightHtmlDir, slug));
            console.log(`Copied ${slugDir} to ${path.join(insightHtmlDir, slug)}`);
            // 4. Delete slugDir after copy
            import('fs-extra').then(fs => {
                fs.removeSync(slugDir);
                console.log(`Deleted temporary directory: ${slugDir}`);
            });
        } catch (e) {
            console.error(`Build failed in ${folder}:`, e);
        }
    }
}

(async () => {
    console.log('Starting build process...');
    buildAllSync();
    console.log('All builds done and copied to insight-html.');
})();