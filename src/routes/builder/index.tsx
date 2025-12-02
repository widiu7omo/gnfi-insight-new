import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from '@/components/ui/empty'
import { createFileRoute } from '@tanstack/react-router'
import { NewspaperIcon } from 'lucide-react'

export const Route = createFileRoute('/builder/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div className="max-w-7xl mx-auto min-h-[calc(100dvh-220px)]">
        <div className="flex items-center justify-center h-full">
            <Empty className="border border-dashed">
                <EmptyHeader>
                    <EmptyMedia variant="icon">
                        <NewspaperIcon />
                    </EmptyMedia>
                    <EmptyTitle>No Insight Selected</EmptyTitle>
                    <EmptyDescription>
                        Pick insight on the left side. Then click. It will show the builder
                    </EmptyDescription>
                </EmptyHeader>
            </Empty>
        </div>
    </div>
}
