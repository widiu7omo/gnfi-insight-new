import type { BlockType } from "@/data/types";
import dynamic from "next/dynamic";

export default function CustomComponent({ block }: { block: BlockType }) {
	if (block.componentCustomName) {
		const Component = dynamic(() => {
			// @ts-ignore
			const result = import(`../custom-components/${block.componentCustomName}`).then((mod) => mod[block.componentCustomName]);
			return result;
		}, { loading: () => <p>Loading...</p> });
		return <Component />
	}
	return (<div className="max-w-4xl mx-auto">
		<div className="p-8 my-8 text-xl font-medium text-center border border-gray-200 rounded-lg shadow text-neutral-600 bg-gray-50">
			<div className="text-sm">Dynamic Component Renderer for</div> <div>{block.componentCustomName}</div>
		</div>
	</div>
	);
}
