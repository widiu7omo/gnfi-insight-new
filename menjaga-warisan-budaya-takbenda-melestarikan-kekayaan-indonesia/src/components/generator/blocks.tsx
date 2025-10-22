import update from "immutability-helper";
import { useCallback } from "react";
import { useBlocks } from "@/store/useBlocks";
import type { BlockType } from "@/data/types";
import { SortableWrapper } from "./sortable-wrapper";
import ContentRenderer from "./block-item";
import BlockItem from "./block-item";

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
				<SortableWrapper
					key={block.order}
					index={index}
					id={block.order}
					moveBlock={moveBlock}
				>
					<BlockItem sectionId={sectionId} index={index} block={block} />
				</SortableWrapper>
			);
		}, []);
		return (
			<>
				<div className="space-y-3" style={style}>
					{blockComponents.map((block, i) => renderComponent(block, i))}
				</div>
			</>
		);
	}
}
