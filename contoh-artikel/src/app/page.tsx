import generateBlocks from "@public/article/generated-blocks.json";
import { COMPONENT_NAVBAR, getComponent } from "@/data/component-front";
import type { BlockType } from "@/data/types";
import Toc from "@/components/reusable/toc";
import type { Metadata } from "next";
import SectionGroup from "@/stories/SectionGroup";
import { Navbar } from "@/stories/Navbar";
import { groupByToMap } from "@/lib/utils";
import PreviewBanner from "./components/preview-banner";

export const metadata: Metadata = {
	title: "Pemilu dan dinamikanya dari masa ke masa | Good News From Indonesia",
	description: "Pemilu dan dinamikanya dari masa ke masa",
};
type HomeType = {
	searchParams?: Record<string, unknown>
}
export default function Home({ searchParams }: HomeType) {
	console.log(searchParams)
	const grouped = groupByToMap(generateBlocks, (item) => item.group);

	return (
		<main className="bg-neutral-50 w-full relative">
			{/* biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation> */}
			{(searchParams?.hasOwnProperty('preview')) && <PreviewBanner />}
			<Toc />
			<Navbar
				block={{
					componentProps: { blurEffect: true },
					component: COMPONENT_NAVBAR,
				}}
			/>
			{Object.keys(Object.fromEntries(grouped)).map((groupName) => {
				const blocks = Array.from(grouped.get(groupName)?.values() ?? []);
				return (
					<SectionGroup
						key={groupName}
						sectionId={groupName}
						className={blocks[blocks.length - 1].groupClassName ?? ""}
					>
						{blocks.map((block) => {
							const result = getComponent(block.component);
							return (
								<result.component
									key={Math.random()}
									block={block as unknown as BlockType}
								/>
							);
						})}
					</SectionGroup>
				);
			})}
		</main>
	);
}
