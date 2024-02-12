"use client";
import Header from "@/components/dynamic/header";
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
import { useState } from "react";
import { useDraggableItem } from "@/store/useDraggableItem";

export default function GeneratePage() {
  const handleOnDrop = (item: DraggableItem) => {
    return {
      ...item,
      group: "BOXES",
    };
  };
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="w-[30%] border-r bg-neutral-100">
          <div className="w-20px space-y-2 min-h-screen p-6 ">
            <DraggableWrapper
              type={ItemTypes.BOX}
              name="section"
              component={COMPONENT_SECTION}
            >
              <ContentSection
                preview
                accept={[ItemTypes.COMPONENT]}
                onDrop={handleOnDrop}
              />
            </DraggableWrapper>
            <DraggableWrapper
              type={ItemTypes.COMPONENT}
              name="heading"
              component={COMPONENT_HEADER}
            >
              <ContentHeading preview />
            </DraggableWrapper>
            <DraggableWrapper
              type={ItemTypes.COMPONENT}
              name="paragraph"
              component={COMPONENT_CONTENT}
            >
              <ContentParagraph preview />
            </DraggableWrapper>
            <DraggableWrapper
              type={ItemTypes.COMPONENT}
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
          <ContentBin onDrop={handleOnDrop} />
        </div>
      </DndProvider>
    </>
  );
}
