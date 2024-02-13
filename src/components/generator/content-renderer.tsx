import { COMPONENT_CONTENT, COMPONENT_HEADER } from "@/data/component-front";
import { BlockType } from "@/data/types";
import ContentHeading from "./content-heading";
import ContentParagraph from "./content-paragraph";

export default function ContentRenderer({ block }: { block: BlockType }) {
  if (block.component === COMPONENT_HEADER) {
    return <ContentHeading />;
  }
  if (block.component === COMPONENT_CONTENT) {
    return <ContentParagraph />;
  }
  return <div>{JSON.stringify(block)}</div>;
}
