import { HttpResponseBody } from '@/app/api/types'
import { useBlocks } from '@/store/useBlocks'
import { FileExtended, useFiles } from '@/store/useFiles'
import { useTitle } from '@/store/useTitle'
import { ImageIcon, TrashIcon } from 'lucide-react'
import { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

export type ContentImageType = {
  sectionId: string
  index: number
}

export default function ContentImage({ sectionId, index }: ContentImageType) {
  const [files, setFiles] = useFiles()
  const [title] = useTitle()
  const [blocks, setBlocks] = useBlocks()
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setFiles((prev) => {
      if (!prev[sectionId]) {
        prev[sectionId] = {}
      }
      const prevFile = prev[sectionId][index] ?? {}
      prevFile.preview = URL.createObjectURL(file)
      prevFile.name = file.name
      prev[sectionId][index] = prevFile
      const currentFiles = prev[sectionId]
      return {
        ...prev,
        [sectionId]: currentFiles,
      }
    })

    const formData = new FormData()
    for (const file of acceptedFiles) {
      formData.append('image', file)
    }
    formData.append('title', title)
    const result = await fetch('api/upload-image', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
    const response = (await result.json()) as HttpResponseBody<{
      imagePath: string
      imageName: string
    }>
    const localImagePath =
      response.data?.imagePath ?? 'https://placehold.co/600x400'
    setBlocks((prev) => {
      const currentBlock = prev[sectionId][index]
      currentBlock.content = localImagePath
      currentBlock.contentType = 'image'
      currentBlock.contentCaption = response.data?.imageName ?? 'Unknown'
      prev[sectionId][index] = currentBlock
      const currentSections = prev[sectionId]
      return { ...prev, [sectionId]: currentSections }
    })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
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
    <div className="flex flex-col bg-gray-200 rounded-xl">
      <div className="text-xl font-semibold group py-1 space-x-3 bg-neutral-200 w-full rounded-t-xl flex justify-end items-center px-2">
        <button
          onClick={removeBlock}
          type="button"
          className="text-white bg-red-800 rounded-lg text-sm invisible group-hover:visible opacity-0 hover:opacity-100 px-3 py-2 transition-all inline-flex"
        >
          <TrashIcon size={20} className="mr-2" />
          <span>Remove Block</span>
        </button>
        <span>Image Block</span>
      </div>
      <div {...getRootProps()}>
        <div
          className={`rounded-xl ${
            files[sectionId] && files[sectionId][index] != null
              ? 'h-full'
              : 'h-[100px]'
          } flex items-center justify-center flex-col space-y-2`}
        >
          {files[sectionId] && files[sectionId][index] != null ? (
            <div className="h-full w-auto rounded-xl relative group">
              <img
                className="h-full w-auto rounded-xl"
                src={blocks[sectionId][index]?.content}
                alt={blocks[sectionId][index]?.contentCaption ?? 'Unkown'}
              />
              <div className="absolute invisible group-hover:visible cursor-pointer flex items-center justify-center top-0 bottom-0 left-0 right-0 hover:bg-black/60 hover:backdrop-blur-sm transition-all rounded-xl">
                <div className="flex items-center justify-center flex-col flex-1">
                  <ImageIcon className="text-white" size={32} strokeWidth={1} />
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p className="text-white text-sm">
                      Drop the files here ...
                    </p>
                  ) : (
                    <p className="text-white text-sm">
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-col">
              <ImageIcon
                className="text-neutral-500"
                size={32}
                strokeWidth={1}
              />
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-neutral-500 text-sm">
                  Drop the files here ...
                </p>
              ) : (
                <p className="text-neutral-500 text-sm">
                  Drag 'n' drop some files here, or click to select files
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
