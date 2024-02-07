import { BlockType } from "@/data/types.ts";
export default function Hero({ block }: { block: BlockType }) {
  return (
    <div>
      <img src={block.content} />
    </div>
  );
}
