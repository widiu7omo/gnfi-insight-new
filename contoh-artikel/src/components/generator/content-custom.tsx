import { useBlocks } from '@/store/useBlocks'
import { TrashIcon } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function ContentCustom({
  sectionId,
  index,
}: {
  sectionId: string
  index: number
}) {
  const [blocks, setBlocks] = useBlocks()
  const [value, setValue] = useState(blocks[sectionId][index].content)
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const onBlur = (e: FormEvent<HTMLInputElement>) => {
    setBlocks((prev) => {
      const currentBlock = prev[sectionId][index]
      currentBlock.content = e.currentTarget.value
      prev[sectionId][index] = currentBlock
      const currentSections = prev[sectionId]
      return { ...prev, [sectionId]: currentSections }
    })
  }
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
    <div className="rounded-xl h-[110px] flex items-start justify-start flex-col space-y-2">
      <div className="text-xl font-semibold group space-x-3 bg-neutral-200 w-full rounded-t-xl flex justify-end items-center px-2">
        <button
          onClick={removeBlock}
          type="button"
          className="text-white bg-red-800 rounded-lg text-sm invisible group-hover:visible opacity-0 hover:opacity-100 px-3 py-2 transition-all inline-flex"
        >
          <TrashIcon size={20} className="mr-2" />
          <span>Remove Block</span>
        </button>
        <span>Custom Block</span>
      </div>
      <div className="px-6 w-full">
        <fieldset className="flex flex-col items-start justify-start w-full ">
          <label
            htmlFor="component-name"
            className="text-medium text-sm text-neutral-500 font-medium"
          >
            Component Name
          </label>
          <input
            type="text"
            id="component-name"
            className="outline-none text-semibold w-full text-xl"
            placeholder="Type Component Here"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        </fieldset>
      </div>
    </div>
  )
}
