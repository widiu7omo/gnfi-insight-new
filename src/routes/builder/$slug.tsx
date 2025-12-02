import PageWrapper from '@/components/builder/page-wrapper'
import { $getPostBySlug, $getTOCBySlug } from '@/server/post'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/builder/$slug')({
    component: RouteComponent,
    loader: async ({ params, context }) => {
        const data = await $getPostBySlug({
            data: {
                slug: params.slug,
                baseTitle: context.metadata.title
            }
        })
        const tocData = await $getTOCBySlug({
            data: {
                slug: params.slug
            }
        })
        return { params, data, ...tocData }
    }
})

function RouteComponent() {
    const { data } = Route.useLoaderData()
    return <div className="flex h-full">
        {data.post &&
        // @ts-ignore
            <PageWrapper initBlocks={data.post.postData ?? []} initMetadata={data.post.meta} />
        }
    </div>
}
