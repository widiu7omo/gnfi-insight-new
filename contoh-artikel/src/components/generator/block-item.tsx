import {
	COMPONENT_NAVBAR,
	COMPONENT_HERO,
	COMPONENT_IMAGE,
	COMPONENT_PARAGRAPH,
	COMPONENT_SECTION_HEADER,
	COMPONENT_HEADING,
	COMPONENT_QUOTE,
	COMPONENT_CUSTOM,
} from "@/data/component-front";
import type { BlockType } from "@/data/types";
import BlockHeading from "./block-heading";
import BlockParagraph from "./block-paragraph";
import BlockImage from "./block-image";
import BlockCustom from "./block-custom";
import BlockNavbar from "./block-navbar";
import BlockHero from "./block-hero";
import BlockSectionHeader from "./block-section-header";
import BlockQuote from "./block-quote";
export type BlockItemType = {
	block: BlockType;
	sectionId: string;
	index: number;
};
export default function BlockItem({ block, sectionId, index }: BlockItemType) {
	if (block.component === COMPONENT_NAVBAR) {
		return <BlockNavbar />;
	}
	if (block.component === COMPONENT_HERO) {
		return <BlockHero />;
	}
	if (block.component === COMPONENT_QUOTE) {
		return <BlockQuote />;
	}
	if (block.component === COMPONENT_SECTION_HEADER) {
		return <BlockSectionHeader />;
	}
	if (block.component === COMPONENT_HEADING) {
		return <BlockHeading sectionId={sectionId} index={index} />;
	}
	if (block.component === COMPONENT_PARAGRAPH) {
		return <BlockParagraph sectionId={sectionId} index={index} />;
	}
	if (block.component === COMPONENT_IMAGE) {
		return <BlockImage sectionId={sectionId} index={index} />;
	}
	if (block.component === COMPONENT_CUSTOM) {
		return <BlockCustom sectionId={sectionId} index={index} />;
	}
	return <div>{JSON.stringify(block)}</div>;
}
