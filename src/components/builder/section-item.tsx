import { useDrop } from "react-dnd";
import { ItemTypes } from "../../types";
import { useBlocks } from "@/store/useBlocks";
import { useActiveSection, useSectionClassName, useSections } from "@/store/useSections";
import type { BlockType } from "@/types";
import type { DragItemType } from "./draggable-wrapper";
import {
	ArrowDownToLineIcon,
	BlocksIcon,
	ChevronDown,
	ChevronRight,
	PenIcon,
	SaveIcon,
	TrashIcon,
} from "lucide-react";
import { useState } from "react";
import Blocks from "./blocks/blocks";
import { useCollapse } from 'react-collapsed'
import ComponentStyler from "./component-styler";
export default function SectionItem({ sectionId, index }: { sectionId: string, index: number }) {
	const [sectionName, setSectionName] = useState("Edit Section Name");
	const [toggleSecName, setToggleSecName] = useState(true);
	const [activeSession, setActiveSession] = useActiveSection();
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ isExpanded: activeSession === sectionId })
	const [sectionClassName, setSectionClassName] = useSectionClassName();
	const [_s, setSection] = useSections()
	const [blocks, setBlock] = useBlocks()
	const block = blocks[sectionId] ?? [];
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
		<div>
			<div>
				<button type="button" className="flex space-x-2" {...getToggleProps({
					onClick: () => {
						if (activeSession === sectionId) {
							setActiveSession('')
						} else {
							setActiveSession(sectionId)
						}

					}
				})}>
					<span>{isExpanded ? (
						<ChevronDown className="text-neutral-600" />
					) : (
						<ChevronRight className="text-neutral-600" />
					)}</span>
					<span className="font-medium capitalize text-neutral-600">{sectionId}</span>
				</button>
			</div>
			<div {...getCollapseProps()}>
				<div
					// @ts-ignore
					ref={drop}
					data-testid="dustbin"
					className={`rounded-xl w-full border-4 border-neutral-400 mt-4 ${sections.length > 0 ? "p-6" : "h-[200px]"
						} flex items-center justify-center flex-col ${isActive ? "bg-neutral-300/70" : "bg-neutral-200/60"
						}`}
				>
					<div className="flex flex-col justify-between items-start w-full">
						<div className="flex space-y-4 justify-between items-center w-full">
							<div className="flex space-x-2 items-center justify-start">
								<button
									type="button"
									onClick={() => setToggleSecName((val) => !val)}
								>
									{toggleSecName ? (
										<PenIcon className="text-gray-600" size={16} />
									) : (
										<SaveIcon className="text-gray-600" size={16} />
									)}
								</button>
								<input
									type="text"
									value={sectionName}
									onChange={(e) => setSectionName(e.target.value)}
									readOnly={toggleSecName}
									className="bg-transparent outline-none text-sm text-gray-500"
								/>
							</div>
							<div className="text-xs text-neutral-500 w-fit flex-none flex flex-row items-center space-x-4">
								<button className=" bg-red-800 rounded p-1" type="button" onClick={handleDeleteSection}>
									<TrashIcon className="text-white p-0.5" size={18} />
								</button>
								<span className="rounded-full bg-black text-white px-3 py-1 ml-1">
									ID:{" "}{sectionId}
								</span>
							</div>
						</div>
						<div className="space-x-2 w-full">
							<ComponentStyler defaultValue={sectionClassName[sectionId]} onValueChange={(value) => {
								setSectionClassName(prev => ({ ...prev, [sectionId]: value }))
								setBlocks((prev) => {
									const blocks = prev[sectionId] ?? [];
									const updateBlocks = blocks.map((item) => {
										item.groupClassName = value;
										return item;
									});
									return { ...prev, [sectionId]: updateBlocks };
								});
							}} />
							<div>
								{block.length > 0
									&& <div className="space-x-3">
										<label htmlFor="with-background">With Background</label>
										<input onChange={(e) => {
											setBlocks((prev) => {
												const blocks = prev[sectionId] ?? [];
												const updateBlocks = blocks.map((item) => {
													item.groupWithBackground = !item.groupWithBackground;
													return item;
												});
												return { ...prev, [sectionId]: updateBlocks };
											});
										}} type="checkbox" checked={block[0]?.groupWithBackground} value={block[0]?.groupWithBackground === true ? 1 : 0} />

									</div>
								}
							</div>
						</div>
					</div>
					<div
						className={`space-y-4 w-full ${sections.length > 0 ? "py-2" : "h-[200px]"}`}
					>
						<Blocks sectionId={sectionId} />
						<div className="text-neutral-500 font-medium flex items-center justify-center flex-col w-full py-3 border border-dashed border-neutral-500 rounded-xl">
							<span>
								{!isActive && (
									<BlocksIcon strokeWidth={2} className="text-neutral-500" />
								)}
								{isActive && (
									<ArrowDownToLineIcon
										strokeWidth={2}
										className="text-neutral-500"
									/>
								)}
							</span>
							<span>{isActive ? "Release to drop" : "Drag block here"}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
