import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { QuotePreview } from "./QuotePreview";

const meta = {
	title: "Insight/Quote",
	component: QuotePreview,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	args: {
		variant: 1,
	},
} satisfies Meta<typeof QuotePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Quote1: Story = {};
export const Quote2: Story = {
	args: {
		variant: 2,
	},
};
export const Quote3: Story = {
	args: {
		variant: 3,
	},
};
