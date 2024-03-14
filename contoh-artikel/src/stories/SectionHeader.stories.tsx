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

export const CustomTitle: Story = {
	args: {
		customTitle: (
			<h1 className="text-7xl font-bold text-white px-4 text-center leading-snug">
				Membangun IKN, Mewujudkan Wacana Lama Indonesia
			</h1>
		),
	},
};

export const LoggedOut: Story = {};
