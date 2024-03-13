import {
	COMPONENT_CONTENT,
	COMPONENT_CUSTOM,
	COMPONENT_HEADER,
	COMPONENT_IMAGE,
} from "@/data/component-front";
import type { BlockType } from "@/data/types";
import ContentCustom from "./content-custom";
import ContentHeading from "./content-heading";
import ContentImage from "./content-image";
import ContentParagraph from "./content-paragraph";
export type ContentRendererType = {
	block: BlockType;
	sectionId: string;
	index: number;
};
export default function ContentRenderer({
	block,
	sectionId,
	index,
}: ContentRendererType) {
	if (block.component === COMPONENT_HEADER) {
		return <ContentHeading sectionId={sectionId} index={index} />;
	}
	if (block.component === COMPONENT_CONTENT) {
		return <ContentParagraph sectionId={sectionId} index={index} />;
	}
	if (block.component === COMPONENT_IMAGE) {
		return <ContentImage sectionId={sectionId} index={index} />;
	}
	if (block.component === COMPONENT_CUSTOM) {
		return <ContentCustom sectionId={sectionId} index={index} />;
	}
	return <div>{JSON.stringify(block)}</div>;
}
