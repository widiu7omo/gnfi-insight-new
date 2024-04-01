import generateBlocks from "@public/contoh-artikel/generated-blocks.json";
import { COMPONENT_NAVBAR, getComponent } from "@/data/component-front";
import type { BlockType } from "@/data/types";
import Toc from "@/components/reusable/toc";
import type { Metadata } from "next";
import SectionGroup from "@/stories/SectionGroup";
import { Navbar } from "@/stories/Navbar";
import { groupByToMap } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Pemilu dan dinamikanya dari masa ke masa | Good News From Indonesia",
	description: "Pemilu dan dinamikanya dari masa ke masa",
};

export default function Home() {
	const grouped = groupByToMap(generateBlocks, (item) => item.group);
	return (
		<main className="bg-neutral-50 w-full relative">
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
