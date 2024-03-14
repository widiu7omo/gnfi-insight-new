import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SectionHeader } from "./SectionHeader";

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
		title: "Membangun IKN, Mewujudkan Wacana Lama Indonesia",
		coverImage: "/assets/hero-example.jpg",
	},
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomTitle: Story = {
	args: {
		customTitle: (
			<div className="mx-4 max-w-full rounded-xl border-2 border-white/10 bg-white/30 px-10 py-8 text-center backdrop-blur-sm xl:mx-0 xl:max-w-5xl">
				<h2 className="text-3xl font-bold text-white drop-shadow-lg xl:text-5xl">
					Mewujudkan Wacana Lama
				</h2>
			</div>
		),
	},
};
