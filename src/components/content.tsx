import { BlockType } from "@/data/types.ts";
import { forwardRef } from "react";
function createHeroFullWidthComponent({ block }: { block: BlockType }) {
  const Component = forwardRef<HTMLDivElement, BlockType>((block, ref) => (
    <div ref={ref}>
      <img src={block.content} />
    </div>
  ));
  Component.displayName = block.component;
  return Component;
}

export default createHeroFullWidthComponent;
