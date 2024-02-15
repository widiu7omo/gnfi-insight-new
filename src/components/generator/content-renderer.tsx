import {
  COMPONENT_CONTENT,
  COMPONENT_CUSTOM,
  COMPONENT_HEADER,
  COMPONENT_IMAGE,
} from "@/data/component-front";
import { BlockType } from "@/data/types";
import ContentHeading from "./content-heading";
import ContentParagraph from "./content-paragraph";
import ContentImage from "./content-image";
import ContentCustom from "./content-custom";
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
