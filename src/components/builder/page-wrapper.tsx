import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useBlocks } from "@/store/useBlocks";
import type { BlockType, DraggableItem } from "@/types";

import { Credits, useCredits, usePublishedAt, useSeoDesc, useSeoImage, useSeoTitle, useTitle } from "@/store/useTitle";
import { useSectionClassName, useSections, useLoadingState } from "@/store/useSections";
import { useEffect, useState } from "react";
import { groupByToMap } from "@/lib/utils";
import FormMetadata from "./form-metadata";
import { Link, useLoaderData } from "@tanstack/react-router";
import { Button } from "../ui/button";
import ListBlocksNew from "./list-blocks-new";
import { Settings } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "../ui/scroll-area";
import SectionsNew from "./sections-new";
import Preview from "./preview";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import FormAttributes from "./form-attributes";
export type PageWrapperType = {
    initBlocks: DraggableItem[];
    initMetadata: {
        title: string;
        slug: string;
        seo: {
            title: string;
            desc: string;
            image: string;
            publishedAt?: string;
        },
        credits: Credits
    }
};
export type SectionType = {
    dropEffect: string;
    group: string;
    groupClassName: string;
    index: number;
    order: number;
};
export default function PageWrapper({ initBlocks, initMetadata }: PageWrapperType) {
    const [title, setTitle] = useTitle();
    const [seoTitle, setSeoTitle] = useSeoTitle();
    const [seoDesc, setSeoDesc] = useSeoDesc();
    const [seoImage, setSeoImage] = useSeoImage();
    const [publishedAt] = usePublishedAt()
    const [credits] = useCredits();
    const handleOnDropSection = (item: DraggableItem) => {
        console.log(item);
    };
    // const handleOnDropComponent = (item: DraggableItem) => {
    //     console.log(item);
    // };
    const [blocks, setBlocks] = useBlocks();
    const [, setSections] = useSections();
    const [, setSectionClass] = useSectionClassName();
    const [loading, setIsLoading] = useLoadingState();




    useEffect(() => {
        console.log('Mounted')
    }, [])
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        setTitle(initMetadata.title)
        setSeoDesc(initMetadata.seo.desc)
        setSeoTitle(initMetadata.seo.title)
        setSeoImage(initMetadata.seo.image);

    }, [initMetadata])
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        setIsLoading(true);
        const groupedBlocks = groupByToMap(initBlocks, (item) => item.group);
        const objectBlocks = JSON.parse(
            JSON.stringify(Object.fromEntries(groupedBlocks)),
        ) as Record<string, BlockType[]>;
        setBlocks(objectBlocks);
        const sections: SectionType[] = [];
        const sectionClasses: Record<string, string> = {};
        const sectionRow: SectionType = {
            dropEffect: "copy",
            group: "BOXES",
            groupClassName: "",
            index: -1,
            order: -1,
        };
        let i = 1;
        for (const rowKey of Object.keys(objectBlocks)) {
            const blocks = objectBlocks[rowKey];
            if (blocks.length > 0) {
                sections.push({
                    ...sectionRow,
                    index: i,
                    order: i,
                    groupClassName: blocks[0].groupClassName ?? "",
                });
                i++;
                sectionClasses[rowKey] = blocks[0].groupClassName ?? "";
            }
        }
        // @ts-ignore
        //TODO: change type, clean up section droppable setSection
        setSections(sections);
        setSectionClass(sectionClasses);

        // Set loading to false after initialization completes
        setTimeout(() => setIsLoading(false), 100);
    }, [initBlocks]);

    const normalizeBlocks = () => {
        const blockJoined: BlockType[] = [];
        for (const block of Object.keys(blocks)) {
            blockJoined.push(...blocks[block]);
        }
        const normalizedBlock: BlockType[] = blockJoined.map((item, index) => {
            item.order = index;
            return item;
        });
        return normalizedBlock;
    }
    const generateBlocks = async () => {
        //Normalize
        const result = await fetch("/api/generate-content", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                title: title,
                seo: {
                    title: seoTitle,
                    desc: seoDesc,
                    image: seoImage,
                    publishedAt: publishedAt,
                },
                credits,
                content: normalizeBlocks(),
            }),
        });
        console.log(await result.json())
    };
    const { data } = useLoaderData({ from: '/builder/$slug' })
    const [groupedBlock, setGroupedBlock] = useState<Map<string | undefined, BlockType[]>>()


    useEffect(() => {
        if (!loading)
            setGroupedBlock(groupByToMap(normalizeBlocks() ?? [], (item) => item.group))
    }, [loading])
    useEffect(() => {
        if (blocks) {
            setIsLoading(true)
            setGroupedBlock(groupByToMap(normalizeBlocks() ?? [], (item) => item.group))
            setIsLoading(false)
        }
    }, [blocks])
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="rounded-2xl flex pb-2 w-full">
                <div className="w-22 pr-2">
                    <ListBlocksNew />
                </div>
                <div className="w-full flex bg-neutral-100 dark:bg-primary-foreground rounded-xl overflow-hidden border">
                    <ScrollArea className="w-[calc(100vw/4)] h-[calc(100dvh-68px)] border-r overflow-y-auto px-2 relative">
                        <div className="space-y-2 py-6">
                            <div className="flex px-4 items-center ">
                                <div className="flex-1">
                                    <p className="text-sm font-medium ">Title</p>
                                    <Textarea placeholder="Enter insight title here"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="border-0 bg-transparent -mt-2 text-muted-foreground px-0 dark:bg-transparent focus:bg-transparent focus-visible:border-0 focus-visible:ring-0" />
                                    <p className="text-xs text-muted-foreground"></p>
                                </div>
                            </div>
                            <div className="flex px-4 items-center">
                                <div className="flex-1">
                                    <p className="text-sm font-medium ">Article Config</p>
                                    <p className="text-xs text-muted-foreground">Configure Metadata, Attribute for this insight</p>
                                </div>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="ghost" size="icon-sm" className="p-0">
                                            <Settings />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-92">
                                        <Tabs>
                                            <TabsList >
                                                <TabsTrigger value="metadata">
                                                    Metadata
                                                </TabsTrigger>
                                                <TabsTrigger value="attributes">
                                                    Attributes
                                                </TabsTrigger>
                                            </TabsList>
                                            <TabsContent value="metadata">
                                                <div className="mb-2 space-y-0">
                                                    <p className="text-lg font-bold">Metadata Configuration</p>
                                                    <p className="text-sm text-muted-foreground">Set title, description and cover for the head tag</p>
                                                </div>
                                                <FormMetadata metadata={initMetadata} />
                                            </TabsContent>
                                            <TabsContent value="attributes">
                                                <FormAttributes metadata={initMetadata} />
                                            </TabsContent>
                                        </Tabs>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="flex flex-col px-4 ">
                                <div className="flex items-center sticky top-0 bg-primary-foreground py-5">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium ">Sections Builder</p>
                                        <p className="text-xs text-muted-foreground">Drag & Drop component on left side</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <SectionsNew onDrop={handleOnDropSection} />
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                    <div className="flex-1 w-[calc(100vw/4)] h-[calc(100dvh-68px)] overflow-hidden relative flex-col">
                        <div className="text-3xl font-semibold flex items-center justify-between sticky z-50 top-0 px-8 py-4 bg-white dark:bg-primary-foreground border-b">
                            <span>Page Preview</span>
                            <div className="space-x-2 p-1">
                                <Button
                                    onClick={generateBlocks}
                                    type="button"
                                >
                                    Generate
                                </Button>
                                <Button asChild variant="outline">
                                    <Link to={"/$slug"} target="_blank" params={{ slug: data.post.slug }}>
                                        Preview
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <Preview grouped={groupedBlock} initMetadata={initMetadata} />
                    </div>
                </div>
            </div>
        </DndProvider>
    );
}
