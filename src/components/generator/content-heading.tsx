import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { HeadingIcon } from "lucide-react";
export default function ContentHeading({ preview }: { preview?: boolean }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Heading 🌎️</p>",
  });
  if (preview) {
    return (
      <div className="text-neutral-500 flex items-center flex-col">
        <HeadingIcon size={45} strokeWidth={1} />
        <div className="text-sm">Heading Editor</div>
      </div>
    );
  }
  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}
