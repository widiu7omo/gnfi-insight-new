import generateBlocks from "@public/article/generated-blocks.json";
import generatedMeta from "@public/article/generated-meta.json"
import { COMPONENT_NAVBAR, getComponent } from "@/data/component-front";
import type { BlockType } from "@/data/types";
import Toc from "@/components/reusable/toc";
import type { Metadata } from "next";
import SectionGroup from "@/stories/SectionGroup";
import { Navbar } from "@/stories/Navbar";
import { groupByToMap } from "@/lib/utils";
import Footer from "@/components/reusable/footer";
import CustomBackground from "@/components/reusable/custom-background";

export const metadata: Metadata = {
	title: `${generatedMeta.seo.title} | GNFI Insight`,
	description: generatedMeta.seo.desc,
};
type HomeType = {
	searchParams?: Record<string, unknown>
}
export default function Home({ searchParams }: HomeType) {
	const grouped = groupByToMap(generateBlocks, (item) => item.group);

	return (
		<main className="relative w-full bg-neutral-50">
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
						{/* biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation> */}
						{blocks[0].hasOwnProperty('groupWithBackground') && <CustomBackground id={`${groupName}-background`} />}
					</SectionGroup>
				);
			})}
			<Footer />
		</main>
	);
}
