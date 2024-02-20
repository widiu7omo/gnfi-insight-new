import { useBlocks } from "@/store/useBlocks";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TrashIcon } from "lucide-react";
type ContentParagraphType = {
  sectionId: string;
  index: number;
};
export default function ContentParagraph({
  sectionId,
  index,
}: ContentParagraphType) {
  const [blocks, setBlocks] = useBlocks();
  const editor = useEditor({
    extensions: [StarterKit],
    content: blocks[sectionId][index].content ?? "<p>Paragraph! 🌎️</p>",
    onBlur: () => {
      setBlocks((prev) => {
        const currentBlock = prev[sectionId][index];
        currentBlock.content = editor?.getHTML() ?? "";
        prev[sectionId][index] = currentBlock;
        const currentSections = prev[sectionId];
        return { ...prev, [sectionId]: currentSections };
      });
    },
  });
  const removeBlock = () => {
    setBlocks((prev) => {
      prev[sectionId].splice(index, 1);
      for (const block of prev[sectionId]) {
        const index = prev[sectionId].indexOf(block);
        block.order = index;
        block.index = index;
      }
      const currentSections = prev[sectionId];
      return { ...prev, [sectionId]: currentSections };
    });
  };
  return (
    <div className="">
      <div className="flex flex-row-reverse space-x-2 bg-neutral-200 rounded-t-xl justify-between p-2">
        <div className="text-xl font-semibold group space-x-3">
          <button
            onClick={removeBlock}
            type="button"
            className="text-white bg-red-800 rounded-lg text-sm invisible group-hover:visible opacity-0 hover:opacity-100 px-3 py-2 transition-all inline-flex"
          >
            <TrashIcon size={20} className="mr-2" />
            <span>Remove Block</span>
          </button>
          <span>Paragraph Block</span>
        </div>
      </div>
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
