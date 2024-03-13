import ComponentRenderer from "@/components/dynamic/component-renderer";
import Content from "@/components/dynamic/content";
import Header from "@/components/dynamic/header";
import Image from "@/components/dynamic/image";
import type { BlockType } from "@/data/types";
import type { ReactElement } from "react";

export const getComponent = (
	componentId: number,
): { component: ({ block }: { block: BlockType }) => ReactElement } => {
	return {
		component: componentList[componentId],
	};
};

export const COMPONENT_IMAGE: number = 0;
export const COMPONENT_CONTENT: number = 1;
export const COMPONENT_HEADER: number = 2;
export const COMPONENT_CUSTOM: number = 3;
export const COMPONENT_SECTION: number = 4;

export const componentList: Record<
	number,
	({ block }: { block: BlockType }) => ReactElement
> = { 0: Image, 1: Content, 2: Header, 3: ComponentRenderer };
