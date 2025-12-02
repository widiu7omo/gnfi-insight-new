import { useBlocks } from "@/store/useBlocks";
import type { SectionHeaderType } from "@/components/post/section-header";
import { useState } from "react";
import { Textarea } from "../../ui/textarea";
import ImageDropzone from "../../ui/image-dropzone";
import BlockWrapper from "./block-wrapper";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

type BlockSectionHeaderType = {
	sectionId: string;
	index: number;
	saveConfig: (index: number, updater: ((prev: unknown) => unknown) | unknown) => void;
};
export default function BlockSectionHeader({
	sectionId,
	index,
	saveConfig,
}: BlockSectionHeaderType) {
	const [blocks] = useBlocks();
	const sectionBlocks = blocks[sectionId];
	const block = sectionBlocks[index];
	const componentProps = (block.componentProps ?? {}) as SectionHeaderType;
	const [sectionHeaderState, setSectionHeaderState] =
		useState<SectionHeaderType>(
			componentProps ?? {
				title: "",
				coverImage: "",
				customTitle: "",
				className: "",
			},
		);

	const handleSave = () => {
		saveConfig(index, sectionHeaderState);
	};
	const handleSectionHeaderState = (
		key: keyof SectionHeaderType,
		value: unknown,
	) => {
		setSectionHeaderState((prev) => ({
			...prev,
			[key]: value,
		}));
	};
	return (
		<BlockWrapper compact sectionId={sectionId} index={index} label="Section Header Config">
			<div className="flex flex-col w-full mt-4">
				<div className="w-full flex space-x-4">
					<ImageDropzone
						name={`cover-image-${sectionId}`}
						label="Cover Image"
						className="flex-1"
						defaultPreview={sectionHeaderState.coverImage}
						onUploaded={(file) => {
							handleSectionHeaderState("coverImage", file.preview)
							// setTimeout(() => {
							// 	handleSave()
							// }, 1000)
						}} />
					<div className="flex-1 space-y-4">
						<Field>
							<FieldLabel>Title</FieldLabel>
							<FieldContent>
								<Textarea
									value={sectionHeaderState.title}
									onChange={(e) => handleSectionHeaderState("title", e.target.value)}
								/>
							</FieldContent>
						</Field>
						<Field>
							<FieldLabel>Custom Html Title</FieldLabel>
							<FieldContent>
								<Textarea
									id="customTitle"
									placeholder="Isi dengan html dan classnya jika ingin membuat custom title, jika tidak kosongkan saja"
									className="col-span-2"
									value={sectionHeaderState.customTitle as string}
									onChange={(e) =>
										handleSectionHeaderState("customTitle", e.target.value)
									}
								/>
							</FieldContent>
						</Field>
						<Field>
							<FieldLabel>Heading Style</FieldLabel>
							<FieldContent>
								<Textarea
									placeholder="Use tailwindcss classes"
									value={sectionHeaderState.className}
									onChange={(e) =>
										setSectionHeaderState((prev) => ({
											...prev,
											className: e.target.value,
										}))
									}
								/>
							</FieldContent>
						</Field>
						<Field>
							<FieldLabel>Gradient Overlay</FieldLabel>
							<FieldContent>
								<Textarea
									placeholder="Use tailwindcss classes"
									value={sectionHeaderState.linearGradient}
									onChange={(e) =>
										setSectionHeaderState((prev) => ({
											...prev,
											linearGradient: e.target.value,
										}))
									}
								/>
							</FieldContent>
						</Field>
						<Field>
							<FieldLabel>Reveal Animation</FieldLabel>
							<FieldContent>
								<Switch
									checked={sectionHeaderState.reveal}
									onCheckedChange={(val) =>
										setSectionHeaderState((prev) => ({
											...prev,
											reveal: val,
										}))
									}
								/>
							</FieldContent>
						</Field>
					</div>
				</div>
				<div>
					<Button onClick={handleSave}>
						<Save />
						<span>Save</span>
					</Button>
				</div>
			</div>
		</BlockWrapper>
	);
}
