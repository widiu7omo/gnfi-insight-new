import { BlockType } from "@/data/types";

export default function Image({ block }: { block: BlockType }) {
  return (
    <div
      className="w-full h-screen bg-cover"
      style={{ background: `url(${block.content})` }}
    >
      <img
        className="w-full"
        src={block.content}
        alt={block.contentCaption ?? "unknown"}
      />
    </div>
  );
}
