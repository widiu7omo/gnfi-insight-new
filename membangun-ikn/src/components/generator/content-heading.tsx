import { useBlocks } from '@/store/useBlocks'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  TrashIcon,
} from 'lucide-react'
export type ContentHeadingType = {
  sectionId: string
  index: number
}
export default function ContentHeading({
  sectionId,
  index,
}: ContentHeadingType) {
  const [blocks, setBlocks] = useBlocks()
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
          HTMLAttributes: {
            class: 'heading',
          },
        },
      }),
    ],
    content: blocks[sectionId][index].content ?? 'Heading Title',
    onBlur: () => {
      setBlocks((prev) => {
        const currentBlock = prev[sectionId][index]
        currentBlock.content = editor?.getHTML() ?? ''
        prev[sectionId][index] = currentBlock
        const currentSections = prev[sectionId]
        return { ...prev, [sectionId]: currentSections }
      })
    },
  })
  const removeBlock = () => {
    setBlocks((prev) => {
      prev[sectionId].splice(index, 1)
      for (const block of prev[sectionId]) {
        const index = prev[sectionId].indexOf(block)
        block.order = index
        block.index = index
      }
      const currentSections = prev[sectionId]
      return { ...prev, [sectionId]: currentSections }
    })
  }
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
          <span>Heading Block</span>
        </div>
        <div className="bg-neutral-300 rounded">
          <button
            type="button"
            onClick={() => {
              editor?.commands.setHeading({ level: 1 })
              editor?.chain().focus().toggleHeading({ level: 1 })
            }}
            className={`rounded py-1 px-2 ${
              editor?.isActive('heading', { level: 1 }) ? 'bg-white' : ''
            }`}
          >
            <Heading1Icon size={20} />
          </button>
          <button
            type="button"
            onClick={() => {
              editor?.commands.setHeading({ level: 2 })
              editor?.chain().focus().toggleHeading({ level: 2 })
            }}
            className={`rounded py-1 px-2 ${
              editor?.isActive('heading', { level: 2 }) ? 'bg-white' : ''
            }`}
          >
            <Heading2Icon size={20} />
          </button>
          <button
            type="button"
            onClick={() => {
              editor?.commands.setHeading({ level: 3 })
              editor?.chain().focus().toggleHeading({ level: 3 })
            }}
            className={`rounded py-1 px-2 ${
              editor?.isActive('heading', { level: 3 }) ? 'bg-white' : ''
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
  )
}
