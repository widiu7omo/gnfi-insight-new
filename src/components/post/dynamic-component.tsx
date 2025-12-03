import React, { Suspense, useMemo } from 'react';

// 1) Eagerly load CustomHero components to prevent layout shift
const eagerModules = import.meta.glob(
    "/src/posts/**/components/CustomHero.{tsx,jsx}",
    { eager: true }
);

// 2) Lazy load all other components
const lazyModules = import.meta.glob(
    ["/src/posts/**/components/*.{tsx,jsx}", "!/src/posts/**/components/CustomHero.{tsx,jsx}"]
);

// Helper to extract slug and name from path
const extractSlugAndName = (path: string) => {
    const pathParts = path.split("/");
    const postsIndex = pathParts.indexOf("posts");
    const slug = pathParts[postsIndex + 1];
    const file = pathParts.pop() ?? "";
    const name = file.replace(/\.(tsx|jsx|ts|js)$/i, "");
    return { slug, name };
};

// Build eager map
const eagerMap: Record<string, any> = Object.fromEntries(
    Object.entries(eagerModules).map(([path, module]: [string, any]) => {
        const { slug, name } = extractSlugAndName(path);
        return [`${slug}/${name}`, module.default ?? module[name]];
    })
);

// Build lazy map
const lazyMap: Record<string, () => Promise<any>> = Object.fromEntries(
    Object.entries(lazyModules).map(([path, loader]) => {
        const { slug, name } = extractSlugAndName(path);
        return [`${slug}/${name}`, loader];
    })
);

function getComponentByName(slug: string, name: string) {
    const key = `${slug}/${name}`;

    // Check eager map first
    if (eagerMap[key]) {
        return { type: 'eager', Component: eagerMap[key] };
    }

    // Check lazy map
    const loader = lazyMap[key];
    if (loader) {
        const LazyComponent = React.lazy(async () => {
            const module = await loader();
            const Component = module[name] ?? module.default;
            if (!Component) {
                throw new Error(`Export "${name}" not found in its module for post "${slug}"`);
            }
            return { default: Component };
        });
        return { type: 'lazy', Component: LazyComponent };
    }

    // Not found
    return {
        type: 'not-found',
        Component: () => (
            <div className="max-w-4xl mx-auto">
                <div className="text-xl font-medium text-center text-neutral-600 bg-gray-50 my-8 p-8 rounded-lg shadow border border-gray-200">
                    <div className="text-sm">Dynamic Component Renderer</div>
                    <div>Component "{name}" not found for post "{slug}"</div>
                </div>
            </div>
        )
    };
}

export type DynamicComponentType = { name?: string; slug?: string }

export default function DynamicComponent({ name, slug }: DynamicComponentType) {
    const result = useMemo(() => {
        if (name && slug) {
            return getComponentByName(slug, name);
        }
        return null;
    }, [name, slug]);

    if (!result) {
        return (
            <div className="max-w-4xl mx-auto">
                <div className="text-xl font-medium text-center text-neutral-600 bg-gray-50 my-8 p-8 rounded-lg shadow border border-gray-200">
                    <div className="text-sm">Dynamic Component Renderer</div>
                    <div>Component: {String(name)} | Slug: {String(slug)}</div>
                </div>
            </div>
        );
    }

    const { type, Component } = result;

    if (type === 'eager' || type === 'not-found') {
        return <Component />;
    }

    // Lazy component needs Suspense
    return (
        <Suspense fallback={<div className="h-32 w-full animate-pulse bg-gray-100 rounded-lg" />}>
            <Component />
        </Suspense>
    );
}
