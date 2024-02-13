import { ImageIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

type FileExtended = File & {
  preview: string;
};
export default function ContentImage({ preview }: { preview?: boolean }) {
  if (preview) {
    return (
      <div className="text-neutral-500 flex items-center flex-col">
        <ImageIcon size={45} strokeWidth={1} />
        <div className="text-sm">Image Component</div>
      </div>
    );
  }
  const [files, setFiles] = useState<FileExtended[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log(acceptedFiles);
    console.log(typeof acceptedFiles);
    setFiles(
      acceptedFiles.map(
        (file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }) as FileExtended
      )
    );
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
          files.length > 0 ? "h-full" : "h-[100px]"
        } flex items-center justify-center flex-col space-y-2`}
      >
        {files.length > 0 ? (
          <img
            className="h-full w-auto rounded-xl"
            src={files.at(0)?.preview}
            alt={files.at(0)?.name}
          />
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
