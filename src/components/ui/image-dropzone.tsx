import { cn } from "@/lib/utils";
import { useLoaderData } from "@tanstack/react-router";
import { ImageIcon, XIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { Label } from "./label";
type ImageDropzoneType = {
    onUploaded?: ({ name, preview }: { name: string, preview: string }) => void,
    onBlur?: () => void
    label: string;
    className?: string;
    staticHeight?: string;
    defaultPreview?: string;
    name: string;
}
export default function ImageDropzone({ onUploaded, label, className, defaultPreview, onBlur, staticHeight }: ImageDropzoneType) {
    //TODO: on blur are not working
    const [fileState, setFileState] = useState<{ name: string, preview: string }>({ name: defaultPreview ?? '', preview: defaultPreview ?? '' })
    const isExist = fileState.name !== '' && fileState.preview !== '';
    const { data } = useLoaderData({ from: '/builder/$slug' })

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        const fileName = file.name;
        const filePreview = URL.createObjectURL(file);

        setFileState({
            name: fileName,
            preview: filePreview
        })
        const formData = new FormData();
        for (const file of acceptedFiles) {
            formData.append("image", file);
        }

        if (!data.post.meta?.slug) {
            return toast.error("Slug not found. Please check again")
        }
        formData.append("slug", data.post.meta?.slug)

        const result = await fetch("/api/upload-image", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });
        const response = (await result.json()) as {
            data: {
                imagePath: string;
                imageName: string;
            }
        };
        const localImagePath =
            response.data?.imagePath ?? "https://placehold.co/600x400";
        setFileState(prev => ({ ...prev, preview: localImagePath }))
        onUploaded?.({
            name: fileName,
            preview: localImagePath
        })
    }, [onUploaded]);
    const removeImage = () => {
        setFileState({
            name: '',
            preview: ''
        })
        onUploaded?.({
            name: '',
            preview: ''
        })
    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [],
        },
    });
    return (
        <div className={cn('relative', className)}>
            <Label className="pb-4">{label}</Label>
            {isExist && (
                <div className="absolute top-0 right-0 z-10">
                    <div
                        className="p-0.5 bg-red-500 hover:cursor-pointer rounded-full"
                        onClick={removeImage}
                        onKeyDown={removeImage}
                    >
                        <XIcon className="size-4 text-white" />
                    </div>
                </div>
            )}
            <div {...getRootProps()} className="border border-dashed dark:border-white/20 rounded-xl relative hover:cursor-pointer group">
                {isExist && <div className="absolute invisible z-20 group-hover:visible cursor-pointer flex items-center justify-center top-0 bottom-0 left-0 right-0 hover:bg-black/60 hover:backdrop-blur-sm transition-all rounded-xl">
                    <div className="flex items-center justify-center flex-col flex-1">
                        <ImageIcon className="text-white" size={32} strokeWidth={1} />
                        <input {...getInputProps({ onBlur })} />
                        {isDragActive ? (
                            <p className="text-white text-xs text-center">Drop the files here ...</p>
                        ) : (
                                <p className="text-white text-xs text-center">
                                Drag 'n' drop some files here, or click to select files
                            </p>
                        )}
                    </div>
                </div>}

                <div
                    className={`rounded-xl ${isExist
                        ? (staticHeight ?? "h-full")
                        : "aspect-video"
                        } flex items-center justify-center flex-col space-y-2 w-full dark:bg-primary-foreground bg-gray-200`}
                >
                    {isExist ? (
                        <div className="h-full rounded-xl relative aspect-video overflow-clip object-center">
                            <img
                                className="h-full object-contain aspect-video"
                                src={fileState.preview}
                                alt={fileState.name}
                            />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center flex-col">
                            <ImageIcon className="text-neutral-500" size={32} strokeWidth={1} />
                            <input {...getInputProps({ onBlur })} />
                            {isDragActive ? (
                                    <p className="text-neutral-500 text-xs text-center">
                                    Drop the files here ...
                                </p>
                                ) : (<p className="text-neutral-500 text-xs text-center">
                                    Drag 'n' drop some files here, or click to select files
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
