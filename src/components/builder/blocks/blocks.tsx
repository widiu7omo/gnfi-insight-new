import update from "immutability-helper";
import { Suspense, useCallback } from "react";
import { useBlocks } from "@/store/useBlocks";
import type { BlockType } from "@/types";
import { SortableWrapper } from "../sortable-wrapper";
import BlockItemNew from "./block-item-new";
import { GripVertical } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const style = {
	width: "100%",
};

export interface Item {
	id: number;
	text: string;
}

export interface ContainerState {
	cards: Item[];
}
export type BlocksType = {
	sectionId: string;
};
export default function Blocks({ sectionId }: BlocksType) {
	{
		const [blocks, setBlocks] = useBlocks();
		const blockComponents = blocks[sectionId] ?? [];

		// Generic saveConfig function to be passed down to block components
		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		const saveConfig = useCallback((index: number, updater: ((prev: unknown) => unknown) | unknown) => {
			setBlocks((prev) => {
				const currentBlock = prev[sectionId][index];
				const newComponentProps = typeof updater === 'function'
					? updater(currentBlock.componentProps)
					: updater;

				prev[sectionId][index] = {
					...currentBlock,
					componentProps: newComponentProps
				};

				return { ...prev, [sectionId]: [...prev[sectionId]] };
			});
		}, [sectionId]);

		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		const moveBlock = useCallback((dragIndex: number, hoverIndex: number) => {
			setBlocks((prevBlocks) => {
				const block = prevBlocks[sectionId] ?? [];
				const updatedBlock = update(block, {
					$splice: [
						[dragIndex, 1],
						[hoverIndex, 0, block[dragIndex] as BlockType],
					],
				});
				return { ...prevBlocks, [sectionId]: updatedBlock };
			});
		}, []);

		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		const renderComponent = useCallback((block: BlockType, index: number) => {
			return (
				<SortableWrapper className="flex gap-2 items-center"
					key={block.order}
					index={index}
					id={block.order}
					moveBlock={moveBlock}
				>
					<GripVertical className="hover:cursor-grab" />
					<Suspense fallback={<Skeleton className="h-12 w-full rounded-md" />}>
						<BlockItemNew sectionId={sectionId} index={index} block={block} saveConfig={saveConfig} />
					</Suspense>
				</SortableWrapper>
			);
		}, [saveConfig]);
		return (
			<>
				<div className="grid grid-cols-1 gap-4" style={style}>
					{blockComponents.map((block, i) => renderComponent(block, i))}
				</div>
			</>
		);
	}
}
