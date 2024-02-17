import { BlockType } from "@/data/types";

export default function Image({ block }: { block: BlockType }) {
  return (
    <div className="w-full h-full max-w-7xl mx-auto bg-cover">
      <div className="flex items-center justify-center">
        <img
          className="w-fit"
          src={block.content}
          alt={block.contentCaption ?? "unknown"}
        />
      </div>
    </div>
  );
}
