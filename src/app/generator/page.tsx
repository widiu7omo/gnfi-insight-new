"use client";
import ContentBin from "@/components/generator/content-bin";
import { ContentSection } from "@/components/generator/content-section";
import ContentImage from "@/components/generator/content-image";
import DraggableWrapper from "@/components/generator/draggable-wrapper";
import { DraggableItem, ItemTypes } from "@/components/generator/types";
import {
  COMPONENT_CONTENT,
  COMPONENT_SECTION,
  COMPONENT_HEADER,
  COMPONENT_HERO,
} from "@/data/component-front";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ContentHeading from "@/components/generator/content-heading";
import ContentParagraph from "@/components/generator/content-paragraph";

export default function GeneratePage() {
  const handleOnDropSection = (item: DraggableItem) => {
    const itemResult = {
      ...item,
      group: "BOXES",
    };
    console.log("BOX", itemResult);
  };
  const handleOnDropComponent = (item: DraggableItem) => {
    const itemResult = {
      ...item,
      group: "COMPONENTS",
    };
    console.log("COMPONENT", itemResult);
  };
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="w-[30%] border-r bg-neutral-100">
          <div className="w-20px space-y-2 min-h-screen p-6 ">
            <div className="text-neutral-500 uppercase text-sm border-b border-neutral-300 pb-1">
              sections
            </div>
            <DraggableWrapper
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
            <div className="text-neutral-500 uppercase text-sm border-b border-neutral-300 pb-1 pt-3">
              blocks
            </div>
            <DraggableWrapper
              type={ItemTypes.BLOCK}
              name="heading"
              component={COMPONENT_HEADER}
            >
              <ContentHeading preview />
            </DraggableWrapper>
            <DraggableWrapper
              type={ItemTypes.BLOCK}
              name="paragraph"
              component={COMPONENT_CONTENT}
            >
              <ContentParagraph preview />
            </DraggableWrapper>
            <DraggableWrapper
              type={ItemTypes.BLOCK}
              name="hero"
              component={COMPONENT_HERO}
            >
              <ContentImage preview />
            </DraggableWrapper>
          </div>
        </div>
        <div className="flex-1 space-y-7 p-8">
          <div className="text-3xl font-semibold text-neutral-900">
            Page Content Generator
          </div>
          <ContentBin onDrop={handleOnDropSection} />
        </div>
      </DndProvider>
    </>
  );
}
