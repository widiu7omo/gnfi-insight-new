import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextIcon } from "lucide-react";

export default function ContentParagraph({ preview }: { preview: boolean }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Paragraph! 🌎️</p>",
  });
  if (preview) {
    return (
      <div className="text-neutral-500 flex items-center flex-col">
        <TextIcon size={45} strokeWidth={1} />
        <div className="text-sm">Paragraph Editor</div>
      </div>
    );
  }
  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}
