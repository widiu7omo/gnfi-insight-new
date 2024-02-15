import { BlockType } from "@/data/types";
import Hero from "./hero";

export default function ComponentRenderer({ block }: { block: BlockType }) {
  // TODO: dynamic compenent renderer
  if (block.content === "Hero") {
    return <Hero block={block} />;
  }
  return (
    <div className="text-xl font-medium text-neutral-600">
      TODO: Dynamic Component Renderer
    </div>
  );
}
