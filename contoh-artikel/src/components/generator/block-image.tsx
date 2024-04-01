import type { HttpResponseBody } from "@/app/api/types";
import { useBlocks } from "@/store/useBlocks";
import { FileExtended, useFiles } from "@/store/useFiles";
import { useTitle } from "@/store/useTitle";
import { Image, type ImageType } from "@/stories/Image";
import { ImageIcon, TrashIcon, ViewIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Input from "../reusable/input";
import { COMPONENT_IMAGE } from "@/data/component-front";
import Textarea from "../reusable/text-area";

export type BlockImageType = {
	sectionId: string;
	index: number;
};

export default function BlockImage({ sectionId, index }: BlockImageType) {
	const [files, setFiles] = useFiles();
	const [title] = useTitle();
	const [blocks, setBlocks] = useBlocks();
	const sectionBlocks = blocks[sectionId];
	const block = sectionBlocks[index];
	const componentProps = (block.componentProps ?? {}) as ImageType;
	const [imageState, setImageState] = useState<ImageType>(
		componentProps ?? {
			imageAlt: "",
			imageUrl: "",
			className: "",
			imgClassName: "",
		},
	);
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const onDrop = useCallback(async (acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		setFiles((prev) => {
			if (!prev[sectionId]) {
				prev[sectionId] = {};
			}
			const prevFile = prev[sectionId][index] ?? {};
			prevFile.preview = URL.createObjectURL(file);
			prevFile.name = file.name;
			prev[sectionId][index] = prevFile;
			const currentFiles = prev[sectionId];
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
			const componentProps = currentBlock.componentProps as ImageType;
			componentProps.imageUrl = localImagePath;
			componentProps.imageAlt = response.data?.imageName ?? "Unknown";
			prev[sectionId][index] = { ...currentBlock, componentProps };
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
	const removeBlock = () => {
		setBlocks((prev) => {
			prev[sectionId].splice(index, 1);
			for (const block of prev[sectionId]) {
				const index = prev[sectionId].indexOf(block);
				block.order = index;
				block.index = index;
			}
			const currentSections = prev[sectionId];
			return { ...prev, [sectionId]: currentSections };
		});
	};
	const saveConfig = () => {
		const updatedBlock = { ...block, componentProps: imageState };
		sectionBlocks[index] = updatedBlock;
		setBlocks((prev) => {
			const currentSections = {
				[sectionId]: sectionBlocks,
			};
			return { ...prev, ...currentSections };
		});
	};
	return (
		<div className="flex flex-col bg-white rounded-xl">
			<div className="text-xl font-semibold p-4 space-x-3 bg-neutral-200 w-full rounded-t-xl flex justify-between items-center">
				<span>Image Block</span>
				<div className="space-x-2">
					<button
						onClick={removeBlock}
						type="button"
						className="text-white bg-red-800 rounded-lg text-sm px-3 py-2 transition-all inline-flex"
					>
						<TrashIcon size={20} className="mr-2" />
						<span>Remove Block</span>
					</button>
				</div>
			</div>
			<div className="flex flex-row w-full p-4 space-x-4">
				<div className="flex flex-col space-y-2 w-1/3">
					<div className="font-semibold text-gray-600">Customize Image Style</div>
					<div className="space-y-4">
						<Textarea
							label="Container Style"
							id="className"
							value={imageState.className}
							onChange={(e) =>
								setImageState((prev) => ({
									...prev,
									className: e.target.value,
								}))
							}
							onBlur={saveConfig}
						/>
						<Textarea
							label="<img/> Style"
							id="imgClassName"
							value={imageState.imgClassName}
							onChange={(e) =>
								setImageState((prev) => ({
									...prev,
									imgClassName: e.target.value,
								}))
							}
							onBlur={saveConfig}
						/>
						<Textarea
							label="Overlay Style"
							id="overlayClassName"
							value={imageState.overlayClassName}
							onChange={(e) =>
								setImageState((prev) => ({
									...prev,
									overlayClassName: e.target.value,
								}))
							}
							onBlur={saveConfig}
						/>
					</div>
				</div>
				<div className="w-full h-auto border border-dashed rounded-lg content-center">
					<div {...getRootProps()} >
						<div
							className={`rounded-xl ${files[sectionId] && files[sectionId][index] != null
								? "h-full"
								: "h-[100px]"
								} flex items-center justify-center flex-col space-y-2 p-4 w-full`}
						>
							{files[sectionId] && files[sectionId][index] != null ? (
								<div className="h-full w-auto rounded-xl relative group">
									<img
										className="h-full w-auto rounded-xl"
										src={componentProps.imageUrl}
										alt={componentProps.imageAlt}
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
			</div>
		</div>
	);
}
