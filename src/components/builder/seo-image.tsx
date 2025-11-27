import { useSeoImage } from "@/store/useTitle";
import { useLoaderData } from "@tanstack/react-router";
import { ImageIcon } from "lucide-react";
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {toast} from "sonner";

export default function SeoImage({ defaultImage }: { defaultImage?: string }) {
    const [seoImage, setSeoImage] = useSeoImage();
    const { data } = useLoaderData({ from: '/builder/$slug' })
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        defaultImage && setSeoImage(defaultImage)
    }, [defaultImage])
    //TODO: Fix claude
    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const formData = new FormData();
        for (const file of acceptedFiles) {
            formData.append("image", file);
        }
        if (!data.post.meta?.slug) {
            return toast.error("Slug not defined. Please check your source code.")
        }
        formData.append("slug", data.post.meta?.slug);

        const result = await fetch("/api/upload-image", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });
        const response = (await result.json()) as {
            data?: {
                imagePath: string;
                imageName: string;
            },
            error?: string;
            status?: number;
        };
        const localImagePath =
            response.data?.imagePath ?? "https://placehold.co/600x400";
        setSeoImage(localImagePath)
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [],
        },
    });
    const saveConfig = () => {

    };
    return (
        <div className="flex flex-row w-full space-x-4">
            <div className="w-full h-auto border border-dashed rounded-lg content-center">
                <div {...getRootProps()}>
                    <div
                        className={`rounded-lg ${seoImage != null
                            ? "h-full"
                            : "h-[100px]"
                            } flex items-center justify-center flex-col space-y-2 w-full`}
                    >
                        {seoImage != null ? (
                            <div className="h-full w-auto rounded-lg relative group">
                                <img
                                    className="h-full w-auto rounded-lg"
                                    src={seoImage}
                                    alt="Cover Article"
                                />
                                <div className="absolute invisible group-hover:visible cursor-pointer flex items-center justify-center top-0 bottom-0 left-0 right-0 hover:bg-black/60 hover:backdrop-blur-sm transition-all rounded-lg">
                                    <div className="flex items-center justify-center flex-col flex-1 p-4">
                                        <ImageIcon
                                            className="text-white mb-2"
                                            size={32}
                                            strokeWidth={1}
                                        />
                                        <input {...getInputProps()} />
                                        {isDragActive ? (
                                            <p className="text-white text-sm text-center">
                                                Drop the files here ...
                                            </p>
                                        ) : (
                                                <p className="text-white text-sm text-center">
                                                Drag 'n' drop some files here, or click to select
                                                files
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
                                    <input id="meta-thumb" {...getInputProps()} />
                                {isDragActive ? (
                                        <p className="text-neutral-500 text-sm text-center">
                                        Drop the files here ...
                                    </p>
                                ) : (
                                            <p className="text-neutral-500 text-sm text-center">
                                        Drag 'n' drop some files here, or click to select files
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
