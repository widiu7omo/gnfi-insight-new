import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Navbar } from "./Navbar";

const meta = {
	title: "Insight/Navbar",
	component: Navbar,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	args: {
		blurEffect: false,
	},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { preview: true },
};

export const GlassTransparent: Story = {
	args: {
		blurEffect: true,
		preview: true,
	},
};
