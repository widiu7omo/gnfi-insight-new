import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBlocks } from "@/store/useBlocks";
import { Save } from "lucide-react";
import { type FormEvent, useState } from "react";
import BlockWrapper from "./block-wrapper";

export default function BlockCustom({
	sectionId,
	index,
	saveConfig,
}: {
	sectionId: string;
	index: number;
		saveConfig: (index: number, updater: ((prev: unknown) => unknown) | unknown) => void;
}) {
	const [blocks, setBlocks] = useBlocks();
	const [value, setValue] = useState(
		blocks[sectionId][index].componentCustomName,
	);
	const onChange = (e: FormEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value);
	};
	const onSave = (e: FormEvent<HTMLInputElement | HTMLButtonElement>) => {
		setBlocks((prev) => {
			const currentBlock = prev[sectionId][index];
			currentBlock.componentCustomName = e.currentTarget.value;
			prev[sectionId][index] = currentBlock;
			const currentSections = prev[sectionId];
			return { ...prev, [sectionId]: currentSections };
		});
	};
	return (
		<BlockWrapper compact label="Custom Component" sectionId={sectionId} index={index}>
			<div className="grid gap-4">
				<div className="space-y-2">
					<p className="text-muted-foreground text-sm">
						Configure the <code>Custom Component</code> below.
					</p>
				</div>
				<div className="grid gap-3">
					<div className="grid grid-cols-3 items-center gap-4">
						<Label htmlFor="name">Name</Label>
						<Input
							id="name"
							placeholder="Name here"
							onBlur={onSave}
							onChange={onChange}
							value={value}
							className="col-span-2 h-8"
						/>
					</div>
					<div className="space-x-2 flex">
						<Button size={'sm'} onClick={onSave} className="flex-1">
							<Save />
							<span>Save</span>
						</Button>
					</div>
				</div>
			</div>
		</BlockWrapper>
	);
}
