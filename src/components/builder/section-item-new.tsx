import { useDrop } from "react-dnd";
import { ItemTypes } from "../../types";
import { useBlocks } from "@/store/useBlocks";
import { useSectionClassName, useSections } from "@/store/useSections";
import type { BlockType } from "@/types";
import type { DragItemType } from "./draggable-wrapper";
import {
	ArrowDownToLineIcon,
	PlusCircle,
	RectangleHorizontal,
	Save,
	Settings2,
	Trash2,
} from "lucide-react";
import { useState } from "react";
import Blocks from "./blocks/blocks";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { cn } from "@/lib/utils";
import { AccordionContent, AccordionItem } from "../ui/accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../ui/field";
export default function SectionItemNew({ sectionId, index }: { sectionId: string, index: number }) {
	const [sectionClassName, setSectionClassName] = useSectionClassName();
	const [_s, setSection] = useSections()
	const [blocks, setBlock] = useBlocks()
	const block = blocks[sectionId] ?? [];
	const [sectionName, setSectionName] = useState(block.at(index)?.groupTitle ?? "Section Name");
	const [_, setBlocks] = useBlocks();
	const [sections] = useSections();
	const handleOnDropBlock = (item: DragItemType) => {
		if (item.itemType === ItemTypes.BLOCK) {
			setBlocks((prev) => {
				const block = prev[sectionId] ?? [];
				const newValue = [
					...block,
					{
						index: block.length,
						component: item.component,
						componentProps: {}, //TODO: default props each component
						group: sectionId,
						groupClassName: "",
						order: block.length,
					} as BlockType,
				];
				return { ...prev, [sectionId]: newValue };
			});
		}
	};
	const onSave = () => {
		setBlocks((prev) => {
			const currentSectionBlocks = prev[sectionId];
			currentSectionBlocks.forEach(currentBlock => {
				currentBlock.groupTitle = sectionName;
			})
			prev[sectionId] = currentSectionBlocks;
			return { ...prev };
		});
	};
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.BLOCK,
		drop: handleOnDropBlock,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));
	const isActive = canDrop && isOver;

	const handleDeleteSection = () => {
		setSectionClassName(prev => {
			return Object.fromEntries(Object.entries(prev).filter(([key]) => key !== sectionId))
		})
		setSection(prev => {
			return prev.filter((item, i) => index !== i);
		})
		setBlock(prev => {
			return Object.fromEntries(Object.entries(prev).filter(([key]) => key !== sectionId))
		})
	}
	return (
		<AccordionItem value={sectionId} className="border-none">
			<Card className="py-4 gap-4">
				<CardHeader className="px-4 flex items-center">
					<CardTitle className="flex-1">
						<AccordionTrigger asChild>
							<Button variant="outline" size="sm">
								<RectangleHorizontal />
								<span className="capitalize">{sectionId.replaceAll('-', ' ')}</span>
							</Button>
						</AccordionTrigger>
					</CardTitle>
					<Popover>
						<PopoverTrigger asChild>
							<Button size={'icon-sm'} variant={'outline'}>
								<Settings2 />
							</Button>
						</PopoverTrigger>
						<PopoverContent>
							<div className="grid gap-4">
								<div className="space-y-2">
									<h4 className="leading-none font-medium">Configuration </h4>
									<p className="text-muted-foreground text-sm">
										Configure the <code>{sectionId}</code> below.
									</p>
								</div>
								<div className="grid gap-3">
									<Field>
										<FieldLabel htmlFor="name">Section Title</FieldLabel>
										<FieldContent>
											<Textarea
												id="name"
												defaultValue={sectionName ?? "Section 1"}
												onChange={(e) => setSectionName(e.target.value)}
												className="col-span-2 h-8"
											/>
										</FieldContent>
										<FieldDescription>For table of content purpose</FieldDescription>
									</Field>

									<div className="flex flex-col items-start gap-4">
										<Label htmlFor="tw-classes">TailwindCSS Classes</Label>
										<Textarea
											id="tw-classes"
											defaultValue={sectionClassName[sectionId]}
											onChange={(e) => {
												const value = e.target.value;
												setSectionClassName(prev => ({ ...prev, [sectionId]: value }))
												setBlocks((prev) => {
													const blocks = prev[sectionId] ?? [];
													const updateBlocks = blocks.map((item) => {
														item.groupClassName = value;
														return item;
													});
													return { ...prev, [sectionId]: updateBlocks };
												});
											}}
											className="col-span-2 h-8"
										/>
									</div>
									{block.length > 0 &&
										<div className="flex justify-between">
											<Label htmlFor="background">Enable Background</Label>
											<Switch
												onChange={() => {
													setBlocks((prev) => {
														const blocks = prev[sectionId] ?? [];
														const updateBlocks = blocks.map((item) => {
															item.groupWithBackground = !item.groupWithBackground;
															return item;
														});
														return { ...prev, [sectionId]: updateBlocks };
													});
												}} checked={block[0]?.groupWithBackground} value={block[0]?.groupWithBackground === true ? 1 : 0}
												id="background"
											/>
										</div>}
								</div>
								<div className="flex space-x-2">
									<Button className="flex-1" size="sm" onClick={onSave}>
										<Save />
										<span>Save</span>
									</Button>
									<Button className="flex-1" size="sm" variant="destructive" onClick={handleDeleteSection}>
										<Trash2 />
										<span>Delete Section</span>
									</Button>
								</div>
							</div>
						</PopoverContent>
					</Popover>
				</CardHeader>
				<AccordionContent>
					<CardContent className="px-4 pt-0">
						<div
							// @ts-ignore
							ref={drop}
							data-testid="dustbin"
							className={cn(
								"flex items-center justify-center flex-col rounded-xl w-full",
								sections.length === 0 ? "h-[200px]" : "",
								isActive ? "bg-neutral-300/70 dark:bg-primary-foreground" : "bg-neutral-200/60 dark:bg-primary-foreground/60")}
						>
							<div
								className={cn("space-y-4 w-full", sections.length === 0 ? "h-[200px]" : "")}
							>
								<Blocks sectionId={sectionId} />
								<div className="dark:text-neutral-400 text-neutral-500 flex items-center justify-center w-full py-2 border border-dashed border-neutral-500 rounded-lg">
									<div>
										{!isActive && (
											<PlusCircle size={20} className="mr-2" />
										)}
										{isActive && (
											<ArrowDownToLineIcon />
										)}
									</div>
									<div className="text-sm font-medium">{isActive ? "Release to drop" : "Drag more block here"}</div>
								</div>
							</div>
						</div>
					</CardContent>
				</AccordionContent>
			</Card>
		</AccordionItem>
	);
}
