import type { ReactElement } from "react";
import type { BlockType } from "@/data/types";
import { Hero } from "@/stories/Hero";
import { Navbar } from "@/stories/Navbar";
import { Image } from "@/stories/Image";
import { Heading } from "@/stories/Heading";
import { Paragraph } from "@/stories/Paragraph";
import SectionGroup from "@/stories/SectionGroup";
import { SectionHeader } from "@/stories/SectionHeader";
import { Quote } from "@/stories/Quote";
import CustomComponent from "@/components/reusable/custom-component";

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
export const COMPONENT_SECTION_HEADER: number = 4;
export const COMPONENT_HEADING: number = 5;
export const COMPONENT_QUOTE: number = 6;
export const COMPONENT_SECTION_GROUP: number = 8;
export const COMPONENT_CUSTOM: number = 9;
export const componentList: Record<
  number,
  ({ block }: { block: BlockType }) => ReactElement
> = { 0: Navbar, 1: Hero, 2: Image, 3: Paragraph, 4: SectionHeader, 5: Heading, 6: Quote, 7: CustomComponent };
