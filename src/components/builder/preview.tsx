import { useEffect, useRef, useState } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Toc } from "../post/toc";
import Footer from "../post/footer";
import SectionGroup from "../post/section-group";
import { getComponent } from "@/lib/component";
import type { BlockType } from "@/types";
import { useActiveSection } from "@/store/useSections";
import { Navbar } from "../post/navbar";
import { Route } from "@/routes/builder/$slug";

type ViewportMode = "mobile" | "tablet" | "laptop";

type PreviewProps = {
    grouped?: Map<string | undefined, BlockType[]>;
    initMetadata: {
        title: string;
        slug: string;
        seo: {
            title: string;
            desc: string;
            image: string;
        }
    }
};

const viewportSizes = {
    mobile: {
        width: 390,
        height: 844,
        label: "Mobile",
        device: "iPhone 14/15",
        ppi: 460
    },
    tablet: {
        width: 820,
        height: 1180,
        label: "Tablet",
        device: "iPad Air",
        ppi: 264
    },
    laptop: {
        width: 1920,
        height: 1080,
        label: "Laptop",
        device: "MacBook",
        ppi: 227
    }
};

export default function Preview({ grouped, initMetadata }: PreviewProps) {
    const [viewportMode, setViewportMode] = useState<ViewportMode>("laptop");
    const [zoom, setZoom] = useState([55]);

    const currentDevice = viewportSizes[viewportMode];
    const scaleFactor = zoom[0] / 100;
    const previewRef = useRef<HTMLElement>(null);
    const [activeSession] = useActiveSection();
    const { data } = Route.useLoaderData()
    useEffect(() => {
        if (activeSession && previewRef.current) {
            const targetElement = previewRef.current.querySelector(`#${activeSession}`);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    }, [activeSession]);
    const { toc, data: { post } } = Route.useLoaderData()
    return (
        <div className="flex flex-col h-full overflow-clip">
            {/* Controls */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 border-b bg-white dark:bg-primary-foreground">
                {/* Viewport Toggle */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 border rounded-md p-1">
                        <Button
                            variant={viewportMode === "mobile" ? "secondary" : "ghost"}
                            size="icon-sm"
                            onClick={() => setViewportMode("mobile")}
                            title={`Mobile View - ${viewportSizes.mobile.device}`}
                        >
                            <Smartphone className="h-4 w-4" />
                        </Button>
                        <Button
                            variant={viewportMode === "tablet" ? "secondary" : "ghost"}
                            size="icon-sm"
                            onClick={() => setViewportMode("tablet")}
                            title={`Tablet View - ${viewportSizes.tablet.device}`}
                        >
                            <Tablet className="h-4 w-4" />
                        </Button>
                        <Button
                            variant={viewportMode === "laptop" ? "secondary" : "ghost"}
                            size="icon-sm"
                            onClick={() => { setViewportMode("laptop"); setZoom([55]) }}
                            title={`Laptop View - ${viewportSizes.laptop.device}`}
                        >
                            <Monitor className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Device Info */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">{currentDevice.device}</span>
                        <span className="text-xs">
                            {currentDevice.width} x {currentDevice.height}px
                        </span>
                        <span className="text-xs text-muted-foreground/70">
                            {currentDevice.ppi} PPI
                        </span>
                    </div>
                </div>

                {/* Zoom Slider */}
                <div className="flex items-center gap-3 min-w-[200px]">
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {zoom[0]}%
                    </span>
                    <Slider
                        value={zoom}
                        onValueChange={setZoom}
                        min={25}
                        max={150}
                        step={5}
                        className="flex-1"
                    />
                </div>
            </div>

            {/* Preview Content */}
            <div className="flex-1 bg-neutral-100 dark:bg-neutral-900 flex items-start justify-center p-8 overflow-hidden">
                {/* Device Frame */}
                <div
                    className="bg-neutral-800 rounded-xl shadow-2xl relative mt-20"
                    style={{
                        padding: viewportMode === "laptop" ? "20px 20px" : "12px",
                        transform: `scale(${scaleFactor})`,
                        transformOrigin: "top center",
                        transition: "all 0.3s ease"
                    }}
                >
                    {/* Screen */}
                    <div
                        className="bg-white overflow-hidden relative"
                        style={{
                            width: `${currentDevice.width}px`,
                            height: `${currentDevice.height}px`,
                            borderRadius: viewportMode === "mobile" ? "36px" : viewportMode === "tablet" ? "12px" : "8px",
                            transform: "translate3d(0, 0, 0)"
                        }}
                    >
                        <main ref={previewRef} className="bg-neutral-50 w-full h-full relative overflow-y-auto overflow-x-hidden">
                            <Toc tocItems={toc} />
                            <article className="w-full">
                                <Navbar />
                                {grouped && Object.keys(Object.fromEntries(grouped)).map((groupName) => {
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
                                                    return <Component key={`${groupName}-${i}`} name={block.componentCustomName} slug={initMetadata.slug} {...block.componentProps} />
                                                }
                                                return <p key={`${groupName}-${i}`}>No Component Found</p>

                                            })}
                                        </SectionGroup>
                                    );
                                })}
                                <Footer publishedAt={post.meta?.seo?.publishedAt ?? new Date().toISOString()} />
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
