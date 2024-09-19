import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { NavbarPreview } from "./NavbarPreview";

const meta = {
	title: "Insight/Navbar",
	component: NavbarPreview,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	args: {
		blurEffect: false,
	},
} satisfies Meta<typeof NavbarPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const GlassTransparent: Story = {
	args: {
		blurEffect: true,
	},
};
