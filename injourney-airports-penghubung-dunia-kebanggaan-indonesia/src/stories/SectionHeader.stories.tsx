import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";
import { COMPONENT_SECTION_HEADER } from "@/data/component-front";

const meta = {
	title: "Insight/Section Header",
	component: SectionHeader,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	args: {
		block: {
			componentProps: {
				title: "Membangun IKN, Mewujudkan Wacana Lama Indonesia",
				coverImage: "/assets/section-header-example.webp",
			},
			component: COMPONENT_SECTION_HEADER,
		},
	},
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomTitle: Story = {
	args: {
		block: {
			componentProps: {
				customTitle: (
					`<div className="max-w-full px-10 py-8 mx-4 text-center border-2 rounded-xl border-white/10 bg-white/30 backdrop-blur-sm xl:mx-0 xl:max-w-5xl">
						<h2 className="text-3xl font-bold text-white drop-shadow-lg xl:text-5xl">
							Mewujudkan Wacana Lama
						</h2>
					</div>`
				),
				coverImage: "/assets/section-header-example.webp",
			},
			component: COMPONENT_SECTION_HEADER,
		},
	},
};
