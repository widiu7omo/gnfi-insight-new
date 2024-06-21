import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TocPreview } from "./TocPreview";

const meta = {
	title: "Insight/Table Of Content",
	component: TocPreview,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	args: {
		blurEffect: false,
	},
} satisfies Meta<typeof TocPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
