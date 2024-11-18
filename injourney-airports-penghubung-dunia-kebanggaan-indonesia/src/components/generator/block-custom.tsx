import { useBlocks } from "@/store/useBlocks";
import { TrashIcon } from "lucide-react";
import { type FormEvent, useState } from "react";

export default function BlockCustom({
	sectionId,
	index,
}: {
	sectionId: string;
	index: number;
}) {
	const [blocks, setBlocks] = useBlocks();
	const [value, setValue] = useState(
		blocks[sectionId][index].componentCustomName,
	);
	const onChange = (e: FormEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value);
	};
	const onBlur = (e: FormEvent<HTMLInputElement>) => {
		setBlocks((prev) => {
			const currentBlock = prev[sectionId][index];
			currentBlock.componentCustomName = e.currentTarget.value;
			prev[sectionId][index] = currentBlock;
			const currentSections = prev[sectionId];
			return { ...prev, [sectionId]: currentSections };
		});
	};
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
	return (
		<div className="rounded-xl h-[110px] flex items-start justify-start flex-col space-y-2">
			<div className="flex items-center justify-end w-full px-2 text-xl font-semibold group space-x-3 bg-neutral-200 rounded-t-xl">
				<button
					onClick={removeBlock}
					type="button"
					className="inline-flex invisible px-3 py-2 text-sm text-white bg-red-800 rounded-lg opacity-0 group-hover:visible hover:opacity-100 transition-all"
				>
					<TrashIcon size={20} className="mr-2" />
					<span>Remove Block</span>
				</button>
				<span>Custom Component</span>
			</div>
			<div className="w-full px-6">
				<fieldset className="flex flex-col items-start justify-start w-full ">
					<label
						htmlFor="component-name"
						className="text-sm font-medium text-medium text-neutral-500"
					>
						Nama Komponen
					</label>
					<input
						type="text"
						id="component-name"
						className="w-full text-xl outline-none text-semibold"
						placeholder="Type Component Here"
						onBlur={onBlur}
						onChange={onChange}
						value={value}
					/>
				</fieldset>
			</div>
		</div>
	);
}
