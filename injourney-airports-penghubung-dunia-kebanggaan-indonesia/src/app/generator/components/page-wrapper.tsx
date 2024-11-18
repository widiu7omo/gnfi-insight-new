"use client";
import Sections from "@/components/generator/sections";
import type { DraggableItem } from "@/components/generator/types";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useBlocks } from "@/store/useBlocks";
import type { BlockType } from "@/data/types";

import { useSeoDesc, useSeoImage, useSeoTitle, useTitle } from "@/store/useTitle";
import { useSectionClassName, useSections } from "@/store/useSections";
import { useEffect } from "react";
import { groupByToMap } from "@/lib/utils";
import ListBlocks from "./list-blocks";
import Link from "next/link";
import FormMetadata from "./form-metadata";
export type PageWrapperType = {
    initBlocks: DraggableItem[];
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
    const [seoImage] = useSeoImage();
    const handleOnDropSection = (item: DraggableItem) => {
        console.log(item);
    };
    const handleOnDropComponent = (item: DraggableItem) => {
        console.log(item);
    };
    const [blocks, setBlocks] = useBlocks();
    const [_, setSections] = useSections();
    const [_sc, setSectionClass] = useSectionClassName();
    useEffect(() => {
        console.log('Mounted')
    }, [])
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        setTitle(initMetadata.title)
        setSeoDesc(initMetadata.seo.desc)
        setSeoTitle(initMetadata.seo.title)
    }, [initMetadata])
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        //Get blocks from static json data
        if (localStorage.getItem('blocks') === null) {
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
        }
    }, [blocks]);

    const generateBlocks = async () => {
        //Normalize
        const blockJoined: BlockType[] = [];
        for (const block of Object.keys(blocks)) {
            blockJoined.push(...blocks[block]);
        }
        const normalizeBlock: BlockType[] = blockJoined.map((item, index) => {
            item.order = index;
            return item;
        });
        console.log(normalizeBlock);
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
                    image: seoImage
                },
                content: normalizeBlock,
            }),
        });
    };
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="w-[30%] border-r bg-neutral-100">
                    <ListBlocks />
                </div>
                <div className="relative flex-1 min-h-screen overflow-auto space-y-7">
                    <div className="text-3xl font-semibold text-neutral-900 flex justify-between sticky z-[50] top-0 px-8 py-4 bg-white border-b">
                        <span> Page Content Generator</span>
                        <div className="bg-neutral-800">
                            <button
                                onClick={generateBlocks}
                                type="button"
                                className="px-4 py-2 text-lg font-semibold text-white bg-black"
                            >
                                Generate
                            </button>
                            <Link href={"/preview"}
                                type="button"
                                className="px-4 text-lg font-semibold text-white"
                            >
                                Preview
                            </Link>

                        </div>
                    </div>
                    <div className="p-8 space-y-4">
                        <div>
                            <label
                                className="text-base font-bold text-gray-500"
                            >
                                Article Title
                            </label>
                            <input
                                type="text"
                                className="w-full text-2xl font-semibold outline-none text-neutral-700"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <FormMetadata metadata={initMetadata} />
                    </div>
                    <div className="p-8 pt-0">
                        <Sections onDrop={handleOnDropSection} />
                    </div>
                </div>
            </DndProvider>
        </>
    );
}
