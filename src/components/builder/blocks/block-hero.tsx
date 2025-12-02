import { MouseIcon, Save } from "lucide-react";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { useBlocks } from "@/store/useBlocks";
import { type HeroType } from "../../post/hero";
import { useState } from "react";
import {toast} from "sonner";
import ImageDropzone from "../../ui/image-dropzone";
import BlockWrapper from "./block-wrapper";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
type BlockHeroType = {
	sectionId: string;
	index: number;
	saveConfig: (index: number, updater: ((prev: unknown) => unknown) | unknown) => void;
};
export default function BlockHero({ sectionId, index, saveConfig }: BlockHeroType) {
	const [blocks] = useBlocks();
	const sectionBlocks = blocks[sectionId];
	const block = sectionBlocks[index];
	const componentProps = (block.componentProps ?? {}) as HeroType;
	const [heroState, setHeroState] = useState<HeroType>(
		componentProps ?? {
			title: "",
			coverUrl: "",
			gradientColor: "",
			swipeUpIcon: <MouseIcon />,
		},
	);

	const handleSave = () => {
		saveConfig(index, heroState);
		toast.success("Configuration Saved")
	};

	return (
		<BlockWrapper label="Hero Block" sectionId={sectionId} index={index}>
			<div className="grid grid-cols-2 gap-4 pt-3">
				<ImageDropzone
					name={`hero-image-${sectionId}`}
					label="Hero Image"
					className=""
					defaultPreview={heroState.coverUrl}
					onUploaded={(file) => {
						setHeroState((prev) => ({ ...prev, coverUrl: file.preview }))
						// setTimeout(() => {
						// 	handleSave()
						// }, 2000)
					}} />
				<div className="space-y-4">
					<Field>
						<FieldLabel>Title</FieldLabel>
						<FieldContent>
							<Textarea
								placeholder="Hero Title"
								required
								value={(heroState?.title as string) ?? ""}
								onChange={(e) => {
									setHeroState((prev) => ({
										...prev,
										title: e.target.value ?? "",
									}));
								}}
							/>
						</FieldContent>
					</Field>
					<Field>
						<FieldLabel>Bottom Icon</FieldLabel>
						<FieldContent>
							<Input
								id="swipeIcon"
								required
								value={heroState.swipeUpIcon as string}
								placeholder="Get icon from lucide icon"
								onChange={(e) =>
									setHeroState((prev) => ({ ...prev, swipeUpIcon: e.target.value }))
								}
							/>
						</FieldContent>
					</Field>
					<Field>
						<FieldLabel>TW Classes for Overlay</FieldLabel>
						<FieldContent>
							<Textarea
								className="col-span-2"
								id="gradientColor"
								value={heroState.gradientColor as string}
								placeholder="Biarkan kosong jika tidak ingin warna gradient"
								onChange={(e) =>
									setHeroState((prev) => ({ ...prev, gradientColor: e.target.value }))
								}
							/>
						</FieldContent>
					</Field>
				</div>
				<div>
					<Button onClick={handleSave}>
						<Save />
						<span>Save</span>
					</Button>
				</div>
			</div>
		</BlockWrapper>
	);
}
