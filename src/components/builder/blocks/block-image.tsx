import { useBlocks } from "@/store/useBlocks";
import { useFiles } from "@/store/useFiles";
import { useTitle } from "@/store/useTitle";
import type { ImageType } from "../../post/image";
import { ImageIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Textarea } from "../../ui/textarea";
import BlockWrapper from "./block-wrapper";
import { useLoaderData } from "@tanstack/react-router";
import {toast} from "sonner";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import ImageDropzone from "@/components/ui/image-dropzone";

export type BlockImageType = {
	sectionId: string;
	index: number;
	saveConfig: (index: number, updater: ((prev: unknown) => unknown) | unknown) => void;
};

export default function BlockImage({ sectionId, index, saveConfig }: BlockImageType) {
	const [title] = useTitle();
	const [blocks, setBlocks] = useBlocks();
	const sectionBlocks = blocks[sectionId];
	const block = sectionBlocks[index];
	const componentProps = (block.componentProps ?? {}) as ImageType;
	const { data } = useLoaderData({ from: '/builder/$slug' })
	const [imageState, setImageState] = useState<ImageType>(
		componentProps ?? {
			imageAlt: "",
			imageUrl: "",
			className: "",
			imgClassName: "",
		},
	);
	const handleSave = () => {
		saveConfig(index, imageState);
	};
	return (
		<BlockWrapper label="Image Block" compact className="p-4" sectionId={sectionId} index={index}>
			<div className="flex flex-row w-full py-2 space-x-4">
				<div className="w-full h-auto aspect-video">
					<ImageDropzone
						name={`image-${sectionId}`}
						label="Image"
						className=""
						defaultPreview={imageState.imageUrl}
						onUploaded={(file) => {
							setImageState((prev) => ({ ...prev, coverUrl: file.preview }))
							// setTimeout(() => {
							// 	handleSave()
							// }, 2000)
						}} />
				</div>
				<div className="flex flex-col space-y-2 w-1/3">
					<div className="space-y-4">
						<Field>
							<FieldLabel>
								Container Style
							</FieldLabel>
							<FieldContent>
								<Textarea
									value={imageState.className}
									onChange={(e) =>
										setImageState((prev) => ({
											...prev,
											className: e.target.value,
										}))
									}
									onBlur={handleSave}
								/>
							</FieldContent>
						</Field>
						<Field>
							<FieldLabel>
								{'<img /> Style'}
							</FieldLabel>
							<FieldContent>
								<Textarea
									id="imgClassName"
									value={imageState.imgClassName}
									onChange={(e) =>
										setImageState((prev) => ({
											...prev,
											imgClassName: e.target.value,
										}))
									}
									onBlur={handleSave}
								/>
							</FieldContent>
						</Field>
						<Field>
							<FieldLabel>
								Overlay Style
							</FieldLabel>
							<FieldContent>
								<Textarea
									id="overlayClassName"
									value={imageState.overlayClassName}
									onChange={(e) =>
										setImageState((prev) => ({
											...prev,
											overlayClassName: e.target.value,
										}))
									}
									onBlur={handleSave}
								/>
							</FieldContent>
						</Field>
					</div>
				</div>
			</div>
		</BlockWrapper>
	);
}
