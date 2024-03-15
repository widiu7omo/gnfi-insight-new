import type { ReactElement } from "react";
import type { BlockType } from "@/data/types";
import { Hero } from "@/stories/Hero";
import { Navbar } from "@/stories/Navbar";
import { Image } from "@/stories/Image";
import { Header } from "@/stories/Header";
import { Paragraph } from "@/stories/Paragraph";
import SectionGroup from "@/stories/SectionGroup";
import { SectionHeader } from "@/stories/SectionHeader";
import { Quote } from "@/stories/Quote";

export const getComponent = (
  componentId: number,
): { component: ({ block }: { block: BlockType }) => ReactElement } => {
  return {
    component: componentList[componentId],
  };
};

export const COMPONENT_NAVBAR: number = 0;
export const COMPONENT_HERO: number = 1;
export const COMPONENT_IMAGE: number = 2;
export const COMPONENT_PARAGRAPH: number = 3;
export const COMPONENT_SECTION_GROUP: number = 4;
export const COMPONENT_SECTION_HEADER: number = 5;
export const COMPONENT_HEADER: number = 6;
export const COMPONENT_QUOTE: number = 7;
export const COMPONENT_TOC: number = 8;
export const COMPONENT_CUSTOM: number = 3;
export const componentList: Record<
  number,
  ({ block }: { block: BlockType }) => ReactElement
> = { 0: Navbar, 1: Hero, 2: Image, 3: Paragraph, 4: SectionGroup, 5: SectionHeader, 6: Header, 7: Quote };
