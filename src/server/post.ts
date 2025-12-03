import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { PostData, PostMeta } from "@/routes/$slug";

// Import all posts metadata and blocks at build time
// This works with Cloudflare Workers which don't have a filesystem
const metaModules = import.meta.glob(
    '../posts/**/data/generated-meta.json',
    { eager: true, import: 'default' }
);

const blocksModules = import.meta.glob(
    '../posts/**/data/generated-blocks.json',
    { eager: true, import: 'default' }
);

// Extract slug from path like '../posts/example/data/generated-meta.json'
function extractSlugFromPath(path: string): string {
    const match = path.match(/\.\.\/posts\/([^/]+)\//);
    return match ? match[1] : '';
}

// Create lookup maps
const metaBySlug = new Map<string, PostMeta>();
const blocksBySlug = new Map<string, PostData>();

for (const [path, meta] of Object.entries(metaModules)) {
    const slug = extractSlugFromPath(path);
    if (slug && meta) {
        metaBySlug.set(slug, meta as PostMeta);
    }
}

for (const [path, blocks] of Object.entries(blocksModules)) {
    const slug = extractSlugFromPath(path);
    if (slug && blocks) {
        blocksBySlug.set(slug, blocks as PostData);
    }
}
export const $getTOCBySlug = createServerFn()
    .inputValidator((data: { slug: string }) => data)
    .handler(({ data }) => {
        const slug = data.slug;
        const postData = blocksBySlug.get(slug);
        if (!postData) {
            throw notFound();
        }
        function uniqueByProperty<T, K extends keyof T>(array: T[], property: K): T[] {
            const seen = new Set();
            return array.filter(item => {
                const value = item[property];
                if (seen.has(value)) {
                    return false;
                }
                seen.add(value);
                return true;
            });
        }
        return {
            toc: uniqueByProperty(postData, 'group').map(item => ({ id: `#${item.group}`, label: item.groupTitle ?? item.group })) as { id: string, label: string }[]
        }
    })
export const $getPostBySlug = createServerFn()
    .inputValidator((data: { slug: string, baseTitle: string, baseUrl?: string }) => data)
    .handler(({ data }) => {
        const slug = data.slug;

        if (!slug || !/^[a-z0-9-]+$/i.test(slug)) {
            throw notFound();
        }

        const meta = metaBySlug.get(slug);
        const postData = blocksBySlug.get(slug);

        // If neither meta nor postData exists, throw not found
        if (!meta && !postData) {
            throw notFound();
        }

        const siteTitle = (data.baseTitle.split('|').pop() ?? data.baseTitle).trim();
        const fallbackTitle = slug
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());
        const postTitle = meta?.seo?.title ?? meta?.title ?? fallbackTitle;

        return {
            metadata: {
                title: `${postTitle} | ${siteTitle}`,
                desc: meta?.seo?.desc,
                image: meta?.seo?.image
            },
            post: {
                slug,
                postData,
                meta,
            },
            baseUrl: data?.baseUrl
        }
    })

export const getAllPostsHandler = async ({ data }: { data: { offset?: number, limit?: number, finished?: boolean } }) => {
    const offset = data.offset ?? 0;
    const limit = data.limit ?? 10;
    const finished = data.finished ?? true;

    const allPosts = Array.from(metaBySlug.entries()).map(([slug, meta]) => ({
        slug,
        title: meta?.seo?.title || meta?.title || slug,
        description: meta?.seo?.desc || '',
        image: meta?.seo?.image || '',
        finished: meta?.finished,
        featured: meta?.featured,
        publishedAt: meta?.seo?.publishedAt
    }))
        .filter(post => post.title)
        .filter(post => post.finished === finished)
        .sort((a, b) => {
            // Sort by featured first (true comes before false)
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;

            // Then sort by publishedAt
            const dateA = new Date(a.publishedAt || 0).getTime();
            const dateB = new Date(b.publishedAt || 0).getTime();
            return dateB - dateA;
        });

    const totalPosts = allPosts.length;
    const endIndex = offset + limit;
    const posts = allPosts.slice(offset, endIndex);
    const hasMore = endIndex < totalPosts;

    return {
        posts,
        meta: {
            offset,
            limit,
            totalPosts,
            hasMore,
        }
    };
};

export const $getAllPosts = createServerFn()
    .inputValidator((data: { offset?: number, limit?: number, finished?: boolean }) => data)
    .handler(getAllPostsHandler)
