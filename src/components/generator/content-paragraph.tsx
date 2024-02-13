import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextIcon } from "lucide-react";
export type ContentParagraphType = {
  sectionId: string;
  index: number;
};
export default function ContentParagraph({
  sectionId,
  index,
}: ContentParagraphType) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Paragraph! 🌎️</p>",
  });
  return (
    <div className="">
      <div className="flex flex-row-reverse space-x-2 bg-neutral-200 rounded-t-xl justify-between p-2">
        <div className="text-xl font-semibold">Paragraph Block</div>
      </div>
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
