import { useBlocks } from "@/store/useBlocks";
import type { QuoteType } from "@/stories/Quote";
import { TrashIcon } from "lucide-react";
import { useState } from "react";
import Input from "../reusable/input";
import Textarea from "../reusable/text-area";

type BlockQuoteType = {
	sectionId: string;
	index: number;
};
export default function BlockQuote({ sectionId, index }: BlockQuoteType) {
	const [blocks, setBlocks] = useBlocks();
	const sectionBlocks = blocks[sectionId];
	const block = sectionBlocks[index];
	const componentProps = (block.componentProps ?? {}) as QuoteType;
	const [quoteState, setQuoteState] = useState<QuoteType>(
		componentProps ?? {
			variant: 1,
			className: "",
			figureUrl: "",
			figureName: "",
			figureDesc: "",
			quote: "",
		},
	);
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
	const saveConfig = () => {
		const updatedBlock = { ...block, componentProps: quoteState };
		sectionBlocks[index] = updatedBlock;
		setBlocks((prev) => {
			const currentSections = {
				[sectionId]: sectionBlocks,
			};
			return { ...prev, ...currentSections };
		});
	};
	return (
		<div className="p-4">
			<div className="text-xl font-semibold flex justify-between">
				<span>Quote Block</span>
				<button
					onClick={removeBlock}
					type="button"
					className="text-white bg-red-800 rounded-lg text-sm px-3 py-2 transition-all inline-flex"
				>
					<TrashIcon size={20} className="mr-2" />
					<span>Remove Block</span>
				</button>
			</div>
			<div className="grid grid-cols-2 gap-4 pt-3">
				<fieldset>
					<div className="text-gray-500 font-medium">Varian Quote</div>
					<div className="space-x-2">
						<input
							type="radio"
							name="variant"
							id="variant-1"
							value={1}
							checked={quoteState?.variant === 1}
							onChange={(e) => {
								setQuoteState((prev) => ({
									...prev,
									variant: Number.parseInt(e.target.value) ?? 0,
								}));
							}}
							onBlur={saveConfig}
						/>
						<label htmlFor="variant-1">Varian 1</label>
					</div>
					<div className="space-x-2">
						<input
							type="radio"
							name="variant"
							id="variant-2"
							value={2}
							checked={quoteState?.variant === 2}
							onChange={(e) => {
								setQuoteState((prev) => ({
									...prev,
									variant: Number.parseInt(e.target.value) ?? 0,
								}));
							}}
							onBlur={saveConfig}
						/>
						<label htmlFor="variant-2">Varian 2</label>
					</div>
					<div className="space-x-2">
						<input
							type="radio"
							name="variant"
							id="variant-3"
							value={3}
							checked={quoteState?.variant === 3}
							onChange={(e) => {
								setQuoteState((prev) => ({
									...prev,
									variant: Number.parseInt(e.target.value) ?? 0,
								}));
							}}
							onBlur={saveConfig}
						/>
						<label htmlFor="variant-3">Varian 3</label>
					</div>
				</fieldset>
				<Input
					label="Figure Name"
					id="Figure Name"
					placeholder="Figure Name"
					required
					value={(quoteState?.figureName as string) ?? ""}
					onChange={(e) => {
						setQuoteState((prev) => ({
							...prev,
							figureName: e.target.value ?? "",
						}));
					}}
					onBlur={saveConfig}
				/>
				<Input
					label="Figure Desc"
					id="Figure Desc"
					placeholder="Figure Desc"
					required
					value={(quoteState?.figureDesc as string) ?? ""}
					onChange={(e) => {
						setQuoteState((prev) => ({
							...prev,
							figureDesc: e.target.value ?? "",
						}));
					}}
					onBlur={saveConfig}
				/>
				<Input
					label="Figure URL"
					id="Figure Url"
					required
					value={quoteState.figureUrl ?? ""}
					placeholder="Masukkan url untuk memberi background gambar pada hero"
					onChange={(e) =>
						setQuoteState((prev) => ({ ...prev, figureUrl: e.target.value }))
					}
					onBlur={saveConfig}
				/>

				<Textarea
					label="Quote content"
					className="col-span-2"
					id="gradientColor"
					required
					value={quoteState.quote as string}
					onChange={(e) =>
						setQuoteState((prev) => ({ ...prev, quote: e.target.value }))
					}
					onBlur={saveConfig}
				/>
				<Input
					label="Style img tag with Tailwind classes"
					id="imgClassName"
					value={quoteState.className}
					onChange={(e) =>
						setQuoteState((prev) => ({
							...prev,
							className: e.target.value,
						}))
					}
					onBlur={saveConfig}
				/>
				<button
					onClick={saveConfig}
					className="px-3 py-2 font-medium text-sm bg-black text-white rounded"
					type="button"
				>
					Save Config
				</button>
			</div>
		</div>
	);
}
