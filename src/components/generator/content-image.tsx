import { ImageIcon } from "lucide-react";

export default function ContentImage({ preview }: { preview?: boolean }) {
  if (preview) {
    return (
      <div className="text-neutral-500 flex items-center flex-col">
        <ImageIcon size={45} strokeWidth={1} />
        <div className="text-sm">Image Component</div>
      </div>
    );
  }
  return (
    <div className="border-2 border-dashed rounded-xl h-[100px] flex items-center justify-center flex-col space-y-2">
      <ImageIcon className="text-neutral-500" size={32} />
      <div className="text-neutral-500">Drop your image here</div>
    </div>
  );
}
