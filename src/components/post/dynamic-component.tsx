import React, { Suspense, useMemo } from 'react';

// 1) Grab all components under ../custom-components
//    Adjust the glob/glob options to your folder/file patterns as needed.
//    Using default (lazy) loading instead of eager: true
const modules = import.meta.glob(
    "/src/posts/**/components/*.{tsx,jsx}"
);

// 2) Build a component map by slug and component name (slug/filename)
//    This ensures components with the same name in different posts don't conflict
const bySlugAndName: Record<string, () => Promise<any>> = Object.fromEntries(
    Object.entries(modules).map(([path, loader]) => {
        // Extract slug from path: /src/posts/{slug}/components/{ComponentName}.tsx
        const pathParts = path.split("/");
        const postsIndex = pathParts.indexOf("posts");
        const slug = pathParts[postsIndex + 1]; // Get the folder name after "posts"
        const file = pathParts.pop() ?? "";
        const name = file.replace(/\.(tsx|jsx|ts|js)$/i, "");
        // Key format: "slug/ComponentName"
        return [`${slug}/${name}`, loader];
    }),
);

function getComponentByName(slug: string, name: string) {
    const key = `${slug}/${name}`;
    const loader = bySlugAndName[key];

    if (!loader) {
        // Not found: render a tiny component explaining the miss
        return () => (
            <div className="max-w-4xl mx-auto">
                <div className="text-xl font-medium text-center text-neutral-600 bg-gray-50 my-8 p-8 rounded-lg shadow border border-gray-200">
                    <div className="text-sm">Dynamic Component Renderer</div>
                    <div>Component "{name}" not found for post "{slug}"</div>
                </div>
            </div>
        );
    }

    // Use React.lazy with the loader
    // We need to handle named exports vs default export
    return React.lazy(async () => {
        const module = await loader();
        // If the module has a named export matching the component name, use it.
        // Otherwise, fall back to default export.
        const Component = module[name] ?? module.default;
        if (!Component) {
            throw new Error(`Export "${name}" not found in its module for post "${slug}"`);
        }
        return { default: Component };
    });
}

export type DynamicComponentType = { name?: string; slug?: string }

export default function DynamicComponent({ name, slug }: DynamicComponentType) {
    const Component = useMemo(() => {
        if (name && slug) {
            return getComponentByName(slug, name);
        }
        return null;
    }, [name, slug]);

    if (Component) {
        return (
            <Suspense fallback={<div className="h-32 w-full animate-pulse bg-gray-100 rounded-lg" />}>
                <Component />
            </Suspense>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-xl font-medium text-center text-neutral-600 bg-gray-50 my-8 p-8 rounded-lg shadow border border-gray-200">
                <div className="text-sm">Dynamic Component Renderer</div>
                <div>Component: {String(name)} | Slug: {String(slug)}</div>
            </div>
        </div>
    );
}
