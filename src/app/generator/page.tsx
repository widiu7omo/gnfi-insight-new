"use client";
import ContentBin from "@/components/generator/content-bin";
import { ContentSection } from "@/components/generator/content-section";
import ContentImage from "@/components/generator/content-image";
import DraggableWrapper from "@/components/generator/draggable-wrapper";
import {
  ContentType,
  DraggableItem,
  ItemTypes,
} from "@/components/generator/types";
import {
  COMPONENT_CONTENT,
  COMPONENT_SECTION,
  COMPONENT_HEADER,
  COMPONENT_HERO,
  COMPONENT_CUSTOM,
} from "@/data/component-front";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useBlocks } from "@/store/useBlocks";
import { BlockType } from "@/data/types";
import {
  HeadingIcon,
  ImageIcon,
  LayoutTemplateIcon,
  TextIcon,
} from "lucide-react";

export default function GeneratePage() {
  const handleOnDropSection = (item: DraggableItem) => {
    const itemResult = {
      ...item,
      group: "BOXES",
    };
  };
  const handleOnDropComponent = (item: DraggableItem) => {
    const itemResult = {
      ...item,
      group: "COMPONENTS",
    };
  };
  const [blocks, setBlocks] = useBlocks();
  const generateBlocks = async () => {
    //Normalize
    let blockJoined: BlockType[] = [];
    Object.keys(blocks).map((key: string) => {
      blockJoined = [...blocks[key]];
    });
    const normalizeBlock = blockJoined.map((item, index) => {
      item.order = index;
      return item;
    });
    const result = await fetch("/api/generate-content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(normalizeBlock),
    });
    console.log(await result.json());
  };
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="w-[30%] border-r bg-neutral-100">
          <div className="w-20px space-y-2 min-h-screen p-6 ">
            {/* SECTIONS COMPONENTS */}
            <div className="text-neutral-500 uppercase text-sm border-b border-neutral-300 pb-1">
              sections
            </div>
            <DraggableWrapper
              contentType={ContentType.TEXT}
              type={ItemTypes.SECTION}
              name="section"
              component={COMPONENT_SECTION}
            >
              <ContentSection
                preview
                accept={[ItemTypes.BLOCK]}
                onDrop={handleOnDropComponent}
              />
            </DraggableWrapper>
            {/* BLOCK COMPONENTS */}
            <div className="text-neutral-500 uppercase text-sm border-b border-neutral-300 pb-1 pt-3">
              blocks
            </div>
            <DraggableWrapper
              type={ItemTypes.BLOCK}
              contentType={ContentType.TEXT}
              name="heading"
              component={COMPONENT_HEADER}
            >
              <div className="text-neutral-500 flex items-center flex-col">
                <HeadingIcon size={45} strokeWidth={1} />
                <div className="text-sm">Heading Editor</div>
              </div>
            </DraggableWrapper>
            <DraggableWrapper
              type={ItemTypes.BLOCK}
              contentType={ContentType.TEXT}
              name="paragraph"
              component={COMPONENT_CONTENT}
            >
              <div className="text-neutral-500 flex items-center flex-col">
                <TextIcon size={45} strokeWidth={1} />
                <div className="text-sm">Paragraph Editor</div>
              </div>
            </DraggableWrapper>
            <DraggableWrapper
              contentType={ContentType.IMAGE}
              type={ItemTypes.BLOCK}
              name="hero"
              component={COMPONENT_HERO}
            >
              <div className="text-neutral-500 flex items-center flex-col">
                <ImageIcon size={45} strokeWidth={1} />
                <div className="text-sm">Image Component</div>
              </div>
            </DraggableWrapper>
            <DraggableWrapper
              contentType={ContentType.CUSTOM}
              type={ItemTypes.BLOCK}
              name="animation"
              component={COMPONENT_CUSTOM}
            >
              <div className="text-neutral-500 flex items-center flex-col">
                <LayoutTemplateIcon size={45} strokeWidth={1} />
                <div className="text-sm">Custom Component</div>
              </div>
            </DraggableWrapper>
          </div>
        </div>
        <div className="flex-1 space-y-7 p-8 min-h-screen overflow-auto">
          <div className="text-3xl font-semibold text-neutral-900 flex justify-between">
            <span> Page Content Generator</span>
            <button
              onClick={generateBlocks}
              type="button"
              className="text-lg text-white bg-black px-4 py-2 font-semibold"
            >
              Generate
            </button>
          </div>
          <ContentBin onDrop={handleOnDropSection} />
        </div>
      </DndProvider>
    </>
  );
}
