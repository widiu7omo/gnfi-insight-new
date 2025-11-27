import { useBlocks } from "@/store/useBlocks";
import type { ParagraphType } from "@/components/post/paragraph";
import { useState, useEffect, type RefObject } from "react";
import ImageDropzone from "../../ui/image-dropzone";
import BlockWrapper from "./block-wrapper";
import { MinimalTiptap } from "@/components/ui/shadcn-io/minimal-tiptap";
import { Label } from "@/components/ui/label";
import { Field, FieldLabel } from "@/components/ui/field";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
type BlockParagraphType = {
	sectionId: string;
	index: number;
	saveConfig: (index: number, updater: ((prev: unknown) => unknown) | unknown) => void;
	saveHandlerRef?: RefObject<(() => void) | null>;
};
export default function BlockParagraph({
	sectionId,
	index,
	saveConfig,
	saveHandlerRef,
}: BlockParagraphType) {
	const [blocks] = useBlocks();
	const sectionBlocks = blocks[sectionId];
	const block = sectionBlocks[index];
	const componentProps = (block.componentProps ?? {}) as ParagraphType;
	const [htmlParagraph, setHtmlParagraph] = useState<string | undefined>(((blocks[sectionId][index].componentProps as ParagraphType).children as string) ?? "<p>Edit Paragraph Here ! 🌎️</p>")
	const [paragraphState, setParagraphState] = useState<ParagraphType>(
		componentProps ?? {
			className: "",
			children: "",
			containerClassName: ""
		},
	);

	const handleSave = () => {
		saveConfig(index, {
			...paragraphState,
			children: htmlParagraph ?? ""
		});
	};

	// Wire up the save handler to the ref for the drawer's Save button
	useEffect(() => {
		if (saveHandlerRef) {
			saveHandlerRef.current = handleSave;
		}
	}, [saveHandlerRef, paragraphState, htmlParagraph]);

	const handleParagraphState = (key: keyof ParagraphType, value: unknown) => {
		setParagraphState((prev) => ({
			...prev,
			[key]: value,
		}));
	};
	return (
		<BlockWrapper
			label="Paragraph Configuration"
			sectionId={sectionId}
			index={index}
		>
			<div className="flex items-start gap-6">
				{/* Content Editor - Left Column */}
				<Field className="flex-1 gap-0">
					<FieldLabel className="text-sm font-medium pb-2">Content</FieldLabel>
					<div className="dark:bg-primary-foreground bg-white rounded-xl overflow-clip">
						<MinimalTiptap className="h-[calc(100dvh-28rem)] overflow-y-auto"
							onChange={(content) => setHtmlParagraph(content)}
							content={htmlParagraph}
						/>
					</div>
				</Field>

				{/* Configuration Panel - Right Column */}
				<div className="w-[380px] space-y-6">
					{/* Ornaments Section */}
					<Field className="gap-0">
						<FieldLabel className="flex items-center justify-between pb-2">
							<h3 className="text-sm font-medium">Ornaments</h3>
						</FieldLabel>
						<Accordion
							type="single"
							collapsible
							className="w-full bg-primary-foreground rounded-xl border"
							defaultValue="item-1">
							{/* Top Right Ornament */}
							<AccordionItem value="top-right" className="px-4">
								<AccordionTrigger>
									Top Right Style
								</AccordionTrigger>
								<AccordionContent>
									<div className="border rounded-xl p-4 space-y-3">
										<ImageDropzone
											name={`otr-${sectionId}`}
											label="Image"
											staticHeight="h-[100px]"
											defaultPreview={paragraphState.ornamentTopRight}
											onUploaded={(file) => {
												handleParagraphState("ornamentTopRight", file.preview);
											}}
										/>
										<Textarea
											id="otr-style"
											placeholder="Tailwind classes"
											value={paragraphState.classOrnamentTopRight}
											onChange={(e) =>
												setParagraphState((prev) => ({
													...prev,
													classOrnamentTopRight: e.target.value,
												}))
											}
										/>
									</div>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="top-left" className="px-4">
								<AccordionTrigger>Top Left Style</AccordionTrigger>
								<AccordionContent>
									{/* Top Left Ornament */}
									<div className="border rounded-xl p-4 space-y-3">
										<ImageDropzone
											name={`otl-${sectionId}`}
											label="Image"
											staticHeight="h-[100px]"
											defaultPreview={paragraphState.ornamentTopLeft}
											onUploaded={(file) => {
												handleParagraphState("ornamentTopLeft", file.preview);
											}}
										/>
										<Textarea
											id="otl-style"
											placeholder="Tailwind classes"
											value={paragraphState.classOrnamentTopLeft}
											onChange={(e) =>
												setParagraphState((prev) => ({
													...prev,
													classOrnamentTopLeft: e.target.value,
												}))
											}
										/>
									</div>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="bottom-left" className="px-4">
								<AccordionTrigger>Bottom Left Style</AccordionTrigger>
								<AccordionContent>
									{/* Bottom Left Ornament */}
									<div className="border rounded-xl p-4 space-y-3">
										<ImageDropzone
											name={`obl-${sectionId}`}
											label="Image"
											staticHeight="h-[100px]"
											defaultPreview={paragraphState.ornamentBottomLeft}
											onUploaded={(file) => {
												handleParagraphState("ornamentBottomLeft", file.preview);
											}}
										/>
										<Textarea
											id="obl-style"
											placeholder="Tailwind classes"
											value={paragraphState.classOrnamentBottomLeft}
											onChange={(e) =>
												setParagraphState((prev) => ({
													...prev,
													classOrnamentBottomLeft: e.target.value,
												}))
											}
										/>
									</div>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="bottom-right" className="px-4">
								<AccordionTrigger>Bottom Right Style</AccordionTrigger>
								<AccordionContent>
									{/* Bottom Right Ornament */}
									<div className="border rounded-xl p-4 space-y-3">
										<ImageDropzone
											name={`obr-${sectionId}`}
											label="Image"
											staticHeight="h-[100px]"
											defaultPreview={paragraphState.ornamentBottomRight}
											onUploaded={(file) => {
												handleParagraphState("ornamentBottomRight", file.preview);
											}}
										/>
										<Textarea
											id="obr-style"
											placeholder="Tailwind classes"
											value={paragraphState.classOrnamentBottomRight}
											onChange={(e) =>
												setParagraphState((prev) => ({
													...prev,
													classOrnamentBottomRight: e.target.value,
												}))
											}
										/>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</Field>

					{/* Styling Section */}
					<div className="space-y-1">
						<h3 className="text-sm font-medium">Styling</h3>
						<div className="space-y-3">
							<div className="space-y-1.5">
								<Label htmlFor="paragraph-classes" className="text-sm text-muted-foreground">
									Paragraph Classes
								</Label>
								<Textarea
									id="paragraph-classes"
									placeholder="Tailwind classes for paragraph"
									value={paragraphState.className}
									onChange={(e) =>
										setParagraphState((prev) => ({
											...prev,
											className: e.target.value,
										}))
									}
								/>
							</div>

							<div className="space-y-1.5">
								<Label htmlFor="container-classes" className="text-sm text-muted-foreground">
									Container Classes
								</Label>
								<Textarea
									id="container-classes"
									placeholder="Tailwind classes for container"
									value={paragraphState.containerClassName}
									onChange={(e) =>
										setParagraphState((prev) => ({
											...prev,
											containerClassName: e.target.value,
										}))
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</BlockWrapper>
	);
}
