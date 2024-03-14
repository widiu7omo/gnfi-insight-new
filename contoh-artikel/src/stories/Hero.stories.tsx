import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Hero } from "./Hero";
import { ChevronsDownIcon, MouseIcon } from "lucide-react";

const meta = {
	title: "Insight/Hero",
	component: Hero,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	args: {
		title: "Membangun IKN, Mewujudkan Wacana Lama Indonesia",
		coverUrl: "/assets/hero-example.jpg",
		swipeUpIcon: (
			<ChevronsDownIcon size={40} className="animate-bounce text-white" />
		),
	},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SwipeUpIcon: Story = {
	args: {
		title: "Membangun IKN, Mewujudkan Wacana Lama Indonesia",
		coverUrl: "/assets/hero-example.jpg",
		swipeUpIcon: <MouseIcon size={40} className="animate-bounce text-white" />,
	},
};

export const DarkLinearOverlay: Story = {
	args: {
		gradientColor: "bg-gradient-to-b from-white/0 to-black",
	},
};
