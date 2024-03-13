import type { BlockType } from "@/data/types";
import Footer from "../reusable/footer";
import IntroductionHero from "./introduction-hero";

export default function ComponentRenderer({ block }: { block: BlockType }) {
	// TODO: dynamic compenent renderer
	if (block.content === "IntroductionHero") {
		return <IntroductionHero />;
	}
	if (block.content === "Footer") {
		return <Footer />;
	}
	return (
		<div className="text-xl font-medium text-neutral-600">
			TODO: Dynamic Component Renderer
		</div>
	);
}
