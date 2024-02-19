import { BlockType } from "@/data/types";

export default function Image({ block }: { block: BlockType }) {
  return (
    <div className="w-full h-full max-w-[65ch] mx-auto bg-cover">
      <div className="flex items-center justify-center">
        <img
          src={block.content}
          alt={block.contentCaption ?? "unknown"}
          className="w-full"
        />
      </div>
    </div>
  );
}
