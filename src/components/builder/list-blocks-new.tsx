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
import DraggableWrapper from "./draggable-wrapper";

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
} from "@/lib/component";
import { ContentType, ItemTypes } from "@/types";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ScrollArea } from "../ui/scroll-area";

export default function ListBlocksNew() {
    return <ScrollArea className="w-full h-[calc(100dvh-68px)] overflow-y-auto relative">
        <div className="space-y-2 p-2">
            {/* SECTIONS COMPONENTS */}
            <div className="dark:text-neutral-300 text-neutral-500 font-semibold capitalize text-sm">
                Sections
            </div>
            <DraggableWrapper
                contentType={ContentType.TEXT}
                type={ItemTypes.SECTION}
                name="section-group"
                component={COMPONENT_SECTION_GROUP}
            >
                <Tooltip>
                    <TooltipContent side="right">
                        Group / Section
                    </TooltipContent>
                    <TooltipTrigger asChild>
                        <Button size={'lg'} className="w-full">
                            <GroupIcon />
                        </Button>
                    </TooltipTrigger>
                </Tooltip>
            </DraggableWrapper>
            {/* BLOCK COMPONENTS */}
            <div className="dark:text-neutral-300 text-neutral-500 capitalize font-semibold text-sm pt-3 sticky top-0">
                Blocks
            </div>
            <DraggableWrapper
                contentType={ContentType.CUSTOM}
                type={ItemTypes.BLOCK}
                name="navbar"
                component={COMPONENT_NAVBAR}
            >
                <Tooltip>
                    <TooltipContent side="right">
                        Navbar
                    </TooltipContent>
                    <TooltipTrigger asChild>
                        <Button size={'lg'} className="w-full">
                            <AppWindowIcon />
                        </Button>
                    </TooltipTrigger>
                </Tooltip>
            </DraggableWrapper>
            <DraggableWrapper
                contentType={ContentType.CUSTOM}
                type={ItemTypes.BLOCK}
                name="hero"
                component={COMPONENT_HERO}
            >
                <Tooltip >
                    <TooltipContent side="right">
                        Hero
                    </TooltipContent>
                    <TooltipTrigger asChild>
                        <Button size={'lg'} className="w-full">
                            <GalleryThumbnailsIcon />
                        </Button>
                    </TooltipTrigger>
                </Tooltip>
            </DraggableWrapper>
            <DraggableWrapper
                type={ItemTypes.BLOCK}
                contentType={ContentType.TEXT}
                name="section-header"
                component={COMPONENT_SECTION_HEADER}
            >
                <Tooltip >
                    <TooltipContent side="right">
                        Section Header
                    </TooltipContent>
                    <TooltipTrigger asChild>
                        <Button size={'lg'} className="w-full">
                            <GalleryVerticalIcon />
                        </Button>
                    </TooltipTrigger>
                </Tooltip>
            </DraggableWrapper>
            <DraggableWrapper
                type={ItemTypes.BLOCK}
                contentType={ContentType.TEXT}
                name="heading"
                component={COMPONENT_HEADING}
            >
                <Tooltip >
                    <TooltipContent side="right">
                        Heading
                    </TooltipContent>
                    <TooltipTrigger asChild>
                        <Button size={'lg'} className="w-full">
                            <HeadingIcon />
                        </Button>
                    </TooltipTrigger>
                </Tooltip>
            </DraggableWrapper>
            <DraggableWrapper
                type={ItemTypes.BLOCK}
                contentType={ContentType.TEXT}
                name="paragraph"
                component={COMPONENT_PARAGRAPH}
            >
                <Tooltip>
                    <TooltipContent side="right">
                        Paragraph
                    </TooltipContent>
                    <TooltipTrigger asChild>
                        <Button size={'lg'} className="w-full">
                            <TextIcon />
                        </Button>
                    </TooltipTrigger>
                </Tooltip>
            </DraggableWrapper>
            <DraggableWrapper
                type={ItemTypes.BLOCK}
                contentType={ContentType.TEXT}
                name="quote"
                component={COMPONENT_QUOTE}
            >
                <Tooltip>
                    <TooltipContent side="right">
                        Quote
                    </TooltipContent>
                    <TooltipTrigger asChild>
                        <Button size={'lg'} className="w-full">
                            <QuoteIcon />
                        </Button>
                    </TooltipTrigger>
                </Tooltip>
            </DraggableWrapper>
            <DraggableWrapper
                contentType={ContentType.IMAGE}
                type={ItemTypes.BLOCK}
                name="image"
                component={COMPONENT_IMAGE}
            >
                <Tooltip>
                    <TooltipContent side="right">
                        Image
                    </TooltipContent>
                    <TooltipTrigger asChild>
                        <Button size={'lg'} className="w-full">
                            <ImageIcon />
                        </Button>
                    </TooltipTrigger>
                </Tooltip>
            </DraggableWrapper>

            <DraggableWrapper
                contentType={ContentType.CUSTOM}
                type={ItemTypes.BLOCK}
                name="custom-component"
                component={COMPONENT_CUSTOM}
            >
                <Tooltip>
                    <TooltipContent side="right">
                        Custom Component
                    </TooltipContent>
                    <TooltipTrigger asChild>
                        <Button size={'lg'} className="w-full">
                            <LayoutTemplateIcon />
                        </Button>
                    </TooltipTrigger>
                </Tooltip>
            </DraggableWrapper>
        </div>
    </ScrollArea>
}