import Heading from "@tiptap/extension-heading";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  HeadingIcon,
} from "lucide-react";
export default function ContentHeading({ preview }: { preview?: boolean }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
          HTMLAttributes: {
            class: "heading",
          },
        },
      }),
    ],
    content: "Heading Title",
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
    <div className="">
      <div className="flex flex-row-reverse space-x-2 bg-neutral-200 rounded-t-xl justify-between p-2">
        <div className="text-xl font-semibold">Heading Block</div>
        <div className="bg-neutral-300 rounded">
          <button
            type="button"
            onClick={() => {
              editor?.commands.setHeading({ level: 1 });
              editor?.chain().focus().toggleHeading({ level: 1 });
            }}
            className={`rounded py-1 px-2 ${
              editor?.isActive("heading", { level: 1 }) ? "bg-white" : ""
            }`}
          >
            <Heading1Icon size={20} />
          </button>
          <button
            type="button"
            onClick={() => {
              editor?.commands.setHeading({ level: 2 });
              editor?.chain().focus().toggleHeading({ level: 2 });
            }}
            className={`rounded py-1 px-2 ${
              editor?.isActive("heading", { level: 2 }) ? "bg-white" : ""
            }`}
          >
            <Heading2Icon size={20} />
          </button>
          <button
            type="button"
            onClick={() => {
              editor?.commands.setHeading({ level: 3 });
              editor?.chain().focus().toggleHeading({ level: 3 });
            }}
            className={`rounded py-1 px-2 ${
              editor?.isActive("heading", { level: 3 }) ? "bg-white" : ""
            }`}
          >
            <Heading3Icon size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
