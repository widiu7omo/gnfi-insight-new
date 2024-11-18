import {
    AppWindowIcon,
    GalleryThumbnailsIcon,
    GalleryVerticalIcon,
    GroupIcon,
    HeadingIcon,
    ImageIcon,
    LayoutTemplateIcon,
    QuoteIcon,
    TextIcon,
} from "lucide-react";
import DraggableWrapper from "@/components/generator/draggable-wrapper";

import {
    COMPONENT_IMAGE,
    COMPONENT_CUSTOM,
    COMPONENT_HERO,
    COMPONENT_PARAGRAPH,
    COMPONENT_SECTION_GROUP,
    COMPONENT_SECTION_HEADER,
    COMPONENT_NAVBAR,
    COMPONENT_HEADING,
    COMPONENT_QUOTE,
} from "@/data/component-front";
import { ContentType, ItemTypes } from "@/components/generator/types";
export default function ListBlocks() {
    return <div className="h-full min-h-screen p-6 overflow-y-auto w-20px space-y-2">
        {/* SECTIONS COMPONENTS */}
        <div className="pb-1 text-sm uppercase border-b text-neutral-500 border-neutral-300">
            sections
        </div>
        <DraggableWrapper
            contentType={ContentType.TEXT}
            type={ItemTypes.SECTION}
            name="section-group"
            component={COMPONENT_SECTION_GROUP}
        >
            <div className="flex flex-col items-center text-neutral-500">
                <GroupIcon size={45} strokeWidth={1} />
                <div className="text-sm">Group / Section</div>
            </div>
        </DraggableWrapper>
        {/* BLOCK COMPONENTS */}
        <div className="pt-3 pb-1 text-sm uppercase border-b text-neutral-500 border-neutral-300">
            blocks
        </div>
        <DraggableWrapper
            contentType={ContentType.CUSTOM}
            type={ItemTypes.BLOCK}
            name="navbar"
            component={COMPONENT_NAVBAR}
        >
            <div className="flex flex-col items-center text-neutral-500">
                <AppWindowIcon size={45} strokeWidth={1} />
                <div className="text-sm">Navbar Block</div>
            </div>
        </DraggableWrapper>
        <DraggableWrapper
            contentType={ContentType.CUSTOM}
            type={ItemTypes.BLOCK}
            name="hero"
            component={COMPONENT_HERO}
        >
            <div className="flex flex-col items-center text-neutral-500">
                <GalleryThumbnailsIcon size={45} strokeWidth={1} />
                <div className="text-sm">Hero Block</div>
            </div>
        </DraggableWrapper>
        <DraggableWrapper
            type={ItemTypes.BLOCK}
            contentType={ContentType.TEXT}
            name="section-header"
            component={COMPONENT_SECTION_HEADER}
        >
            <div className="flex flex-col items-center text-neutral-500">
                <GalleryVerticalIcon size={45} strokeWidth={1} />
                <div className="text-sm">Section Heading Block</div>
            </div>
        </DraggableWrapper>
        <DraggableWrapper
            type={ItemTypes.BLOCK}
            contentType={ContentType.TEXT}
            name="heading"
            component={COMPONENT_HEADING}
        >
            <div className="flex flex-col items-center text-neutral-500">
                <HeadingIcon size={45} strokeWidth={1} />
                <div className="text-sm">Heading Block</div>
            </div>
        </DraggableWrapper>
        <DraggableWrapper
            type={ItemTypes.BLOCK}
            contentType={ContentType.TEXT}
            name="paragraph"
            component={COMPONENT_PARAGRAPH}
        >
            <div className="flex flex-col items-center text-neutral-500">
                <TextIcon size={45} strokeWidth={1} />
                <div className="text-sm">Paragraph Block</div>
            </div>
        </DraggableWrapper>
        <DraggableWrapper
            type={ItemTypes.BLOCK}
            contentType={ContentType.TEXT}
            name="quote"
            component={COMPONENT_QUOTE}
        >
            <div className="flex flex-col items-center text-neutral-500">
                <QuoteIcon size={45} strokeWidth={1} />
                <div className="text-sm">Quote Block</div>
            </div>
        </DraggableWrapper>
        <DraggableWrapper
            contentType={ContentType.IMAGE}
            type={ItemTypes.BLOCK}
            name="image"
            component={COMPONENT_IMAGE}
        >
            <div className="flex flex-col items-center text-neutral-500">
                <ImageIcon size={45} strokeWidth={1} />
                <div className="text-sm">Image Block</div>
            </div>
        </DraggableWrapper>

        <DraggableWrapper
            contentType={ContentType.CUSTOM}
            type={ItemTypes.BLOCK}
            name="custom-component"
            component={COMPONENT_CUSTOM}
        >
            <div className="flex flex-col items-center text-neutral-500">
                <LayoutTemplateIcon size={45} strokeWidth={1} />
                <div className="text-sm">Custom Block</div>
            </div>
        </DraggableWrapper>
    </div>
}