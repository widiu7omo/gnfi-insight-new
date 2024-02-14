import { HttpResponseBody } from "@/app/api/types";
import { useBlocks } from "@/store/useBlocks";
import { FileExtended, useFiles } from "@/store/useFiles";
import { useTitle } from "@/store/useTitle";
import { ImageIcon } from "lucide-react";
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export type ContentImageType = {
  sectionId: string;
  index: number;
};

export default function ContentImage({ sectionId, index }: ContentImageType) {
  const [files, setFiles] = useFiles();
  const [title] = useTitle();
  const [blocks, setBlocks] = useBlocks();
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    console.log(file);
    console.log(index);
    setFiles((prev) => {
      if (!prev[sectionId]) {
        prev[sectionId] = {};
      }
      const prevFile = prev[sectionId][index] ?? {};
      prevFile.preview = URL.createObjectURL(file);
      prevFile.name = file.name;
      console.log(prevFile);
      prev[sectionId][index] = prevFile;
      const currentFiles = prev[sectionId];
      console.log(currentFiles);
      return {
        ...prev,
        [sectionId]: currentFiles,
      };
    });

    const formData = new FormData();
    for (const file of acceptedFiles) {
      formData.append("image", file);
    }
    formData.append("title", title);
    const result = await fetch("api/upload-image", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });
    const response = (await result.json()) as HttpResponseBody<{
      imagePath: string;
      imageName: string;
    }>;
    const localImagePath =
      response.data?.imagePath ?? "https://placehold.co/600x400";
    setBlocks((prev) => {
      const currentBlock = prev[sectionId][index];
      currentBlock.content = localImagePath;
      currentBlock.contentType = "image";
      currentBlock.contentCaption = response.data?.imageName ?? "Unknown";
      prev[sectionId][index] = currentBlock;
      const currentSections = prev[sectionId];
      return { ...prev, [sectionId]: currentSections };
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });
  return (
    <div {...getRootProps()}>
      <div
        className={`rounded-xl ${
          files[sectionId] && files[sectionId][index] != null
            ? "h-full"
            : "h-[100px]"
        } flex items-center justify-center flex-col space-y-2`}
      >
        {files[sectionId] && files[sectionId][index] != null ? (
          <div className="h-full w-auto rounded-xl relative group">
            <img
              className="h-full w-auto rounded-xl"
              src={files[sectionId][index]?.preview}
              alt={files[sectionId][index]?.name}
            />
            <div className="absolute invisible group-hover:visible cursor-pointer flex items-center justify-center top-0 bottom-0 left-0 right-0 hover:bg-black/60 hover:backdrop-blur-sm transition-all rounded-xl">
              <div className="flex items-center justify-center flex-col flex-1">
                <ImageIcon className="text-white" size={32} strokeWidth={1} />
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p className="text-white text-sm">Drop the files here ...</p>
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
            <ImageIcon className="text-neutral-500" size={32} strokeWidth={1} />
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
  );
}
