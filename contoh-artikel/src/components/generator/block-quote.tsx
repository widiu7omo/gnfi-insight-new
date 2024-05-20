import { useBlocks } from "@/store/useBlocks";
import { Quote, type QuoteType } from "@/stories/Quote";
import { useState } from "react";
import Input from "../reusable/input";
import Textarea from "../reusable/text-area";
import toast from "react-hot-toast";
import BlockWrapper from "./block-wrapper";
import ImageDropzone from "../reusable/image-dropzone";
import { COMPONENT_QUOTE } from "@/data/component-front";

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
	const saveConfig = () => {
		const updatedBlock = { ...block, componentProps: quoteState };
		sectionBlocks[index] = updatedBlock;
		setBlocks((prev) => {
			const currentSections = {
				[sectionId]: sectionBlocks,
			};
			return { ...prev, ...currentSections };
		});
		toast.success('Configuration Saved')
	};
	return (
		<BlockWrapper label="Quote Block" sectionId={sectionId} index={index}>
			<Quote block={{ component: COMPONENT_QUOTE, componentProps: { ...quoteState, className: "w-full bg-neutral-200 p-4 rounded-lg" } }} />
			<div className="grid grid-cols-4 gap-4 pt-3">
				<div className="col-span-2">
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
							<label htmlFor="variant-1" className="text-sm text-gray-700">Varian 1</label>
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
							<label htmlFor="variant-2" className="text-sm text-gray-700">Varian 2</label>
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
							<label htmlFor="variant-3" className="text-sm text-gray-700">Varian 3</label>
						</div>
					</fieldset>
					<Textarea
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
					<Textarea
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
					<Textarea
						label="Quote Style"
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
				</div>
				<ImageDropzone
					name={`figure-image-${sectionId}`}
					label="Figure Image"
					className="col-span-2"
					defaultPreview={(quoteState?.figureUrl as string) ?? ""}
					onBlur={saveConfig}
					onUploaded={(file) => {
						console.log(file)
						setQuoteState((prev) => ({
							...prev,
							figureUrl: file.preview,
						}));
						// setTimeout(() => {
						// 	saveConfig()
						// }, 1000)
					}} />
			</div>
		</BlockWrapper>
	);
}
