import Content from "@/components/content.tsx";
import Header from "@/components/header.tsx";
import { ReactElement } from "react";
import { BlockType } from "@/data/types.ts";
import Hero from "@/components/hero.tsx";

export const getComponent = (
  componentId: number,
): { component: ({ block }: { block: BlockType }) => ReactElement } => {
  return {
    component: componentList[componentId],
  };
};

export const COMPONENT_HERO: number = 0;
export const COMPONENT_CONTENT: number = 1;
export const COMPONENT_HEADER: number = 2;
export const COMPONENT_QUOTE: number = 3;
export const COMPONENT_IMAGE: number = 4;

export const componentList: Record<
  number,
  ({ block }: { block: BlockType }) => ReactElement
> = { 0: Hero, 1: Content, 2: Header };
