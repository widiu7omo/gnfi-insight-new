import {
  COMPONENT_CONTENT,
  COMPONENT_HEADER,
  COMPONENT_HERO,
  COMPONENT_IMAGE,
} from "@/data/component-front";
import { BlockType } from "@/data/types";
import ContentHeading from "./content-heading";
import ContentParagraph from "./content-paragraph";
import ContentImage from "./content-image";

export default function ContentRenderer({ block }: { block: BlockType }) {
  if (block.component === COMPONENT_HEADER) {
    return <ContentHeading />;
  }
  if (block.component === COMPONENT_CONTENT) {
    return <ContentParagraph />;
  }
  if (block.component === COMPONENT_HERO) {
    return <ContentImage />;
  }
  return <div>{JSON.stringify(block)}</div>;
}
