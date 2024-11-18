import type { HttpResponseBody } from "@/app/api/types";
import { useSeoImage } from "@/store/useTitle";
import { ImageIcon } from "lucide-react";
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export default function SeoImage({ defaultImage }: { defaultImage?: string }) {
    const [seoImage, setSeoImage] = useSeoImage();
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        defaultImage && setSeoImage(defaultImage)
    }, [defaultImage])
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const formData = new FormData();
        for (const file of acceptedFiles) {
            formData.append("image", file);
        }
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
        <div className="flex flex-row w-full pt-2 space-x-4">
            <div className="content-center w-full h-auto border border-dashed rounded-lg">
                <div {...getRootProps()}>
                    <div
                        className={`rounded-xl ${seoImage != null
                            ? "h-full"
                            : "h-[100px]"
                            } flex items-center justify-center flex-col space-y-2 p-4 w-full`}
                    >
                        {seoImage != null ? (
                            <div className="relative w-auto h-full rounded-xl group">
                                <img
                                    className="w-auto h-full rounded-xl"
                                    src={seoImage}
                                    alt="Cover Article"
                                />
                                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center invisible cursor-pointer group-hover:visible hover:bg-black/60 hover:backdrop-blur-sm transition-all rounded-xl">
                                    <div className="flex flex-col items-center justify-center flex-1">
                                        <ImageIcon
                                            className="text-white"
                                            size={32}
                                            strokeWidth={1}
                                        />
                                        <input {...getInputProps()} />
                                        {isDragActive ? (
                                            <p className="text-sm text-white">
                                                Drop the files here ...
                                            </p>
                                        ) : (
                                            <p className="text-sm text-white">
                                                Drag 'n' drop some files here, or click to select
                                                files
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center">
                                <ImageIcon
                                    className="text-neutral-500"
                                    size={32}
                                    strokeWidth={1}
                                />
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <p className="text-sm text-neutral-500">
                                        Drop the files here ...
                                    </p>
                                ) : (
                                    <p className="text-sm text-neutral-500">
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
