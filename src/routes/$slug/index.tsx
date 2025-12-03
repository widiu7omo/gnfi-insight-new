import { getComponent } from '@/lib/component';
import Footer from '@/components/post/footer';
import SectionGroup from '@/components/post/section-group';
import { Toc } from '@/components/post/toc';
import { Navbar } from '@/components/post/navbar';
import { generateOgMetaData, generateTwitterMetadata } from '@/lib/seo';
import { groupByToMap } from '@/lib/utils';
import { $getPostBySlug, $getTOCBySlug } from '@/server/post';
import { createFileRoute } from '@tanstack/react-router'
import { BlockType } from '@/types';
import { Credits } from '@/store/useTitle';

export type PostMeta = {
    seo?: {
        title?: string;
        desc?: string;
        image?: string;
        publishedAt?: string;
    };
    credits: Credits;
    title?: string;
    slug?: string;
    finished?: boolean;
    featured?: boolean;
};
export type PostData = BlockType[];


export const Route = createFileRoute('/$slug/')({
    component: RouteComponent,
    loader: async ({ params, context }) => {
        const post = await $getPostBySlug({
            data: {
                slug: params.slug,
                baseTitle: context.metadata.title,
                baseUrl: context.baseUrl
            }
        })
        const tocData = await $getTOCBySlug({
            data: {
                slug: params.slug
            }
        })
        return { ...post, ...tocData };
    },
    head(props) {
        return {
            meta: [
                {
                    title: props.loaderData?.metadata.title,
                },
                {
                    name: "description",
                    content: props.loaderData?.metadata.desc
                },
                ...generateOgMetaData({
                    title: props.loaderData?.metadata.title,
                    description: props.loaderData?.metadata.desc,
                    imgSrc: import.meta.env.VITE_BASE_URL + props.loaderData?.metadata.image
                }),
                ...generateTwitterMetadata({
                    title: props.loaderData?.metadata.title,
                    description: props.loaderData?.metadata.desc,
                    imgSrc: import.meta.env.VITE_BASE_URL + props.loaderData?.metadata.image
                })
            ],
            links: [
                { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon', sizes: '16x16' },
                { rel: 'canonical', href: `${import.meta.env.VITE_BASE_URL}/${props.loaderData?.post.slug}/` },
            ],
        }
    },
    scripts() {
        return [
            {
                src: "https://gnfifoundation.org/assets/widget/widget.js?v=10",
                defer: true,
                id: "foundation-widget",
                type: "module",
                "widget-container": "donation-container",
                crossOrigin: "anonymous"
            }
        ]
    }
})

function RouteComponent() {
    const { post, toc } = Route.useLoaderData();

    const { slug } = Route.useParams();
    const grouped = groupByToMap(post.postData ?? [], (item) => item.group);
    return <main className="bg-neutral-50 w-full relative">
        <Toc tocItems={toc} />
        <article className="w-full">
            <Navbar />
            {Object.keys(Object.fromEntries(grouped)).map((groupName) => {
                const blocks = Array.from(grouped.get(groupName)?.values() ?? []);
                return (
                    <SectionGroup
                        key={groupName}
                        sectionId={groupName}
                        className={blocks[blocks.length - 1].groupClassName ?? ""}
                    >
                        {blocks.map((block, i) => {
                            if (block.component !== undefined) {
                                const Component = getComponent(block.component) as React.ComponentType<any>;
                                return <Component key={`${groupName}-${i}`} name={block.componentCustomName} slug={slug} {...block.componentProps} />
                            }
                            return <p key={`${groupName}-${i}`}>No Component Found</p>

                        })}
                        {/* biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation> */}
                        {/* {blocks[0].hasOwnProperty('groupWithBackground') && <CustomBackground id={`${groupName}-background`} />} */}
                    </SectionGroup>
                );
            })}
        </article>
        <Footer credits={post.meta?.credits} publishedAt={post.meta?.seo?.publishedAt ?? new Date().toISOString()} />
    </main>
}
