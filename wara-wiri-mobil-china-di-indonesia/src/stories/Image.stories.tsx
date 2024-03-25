import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";
import { COMPONENT_IMAGE } from "@/data/component-front";

const meta = {
	title: "Insight/Image",
	component: Image,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	args: {
		block: {
			componentProps: {
				imageAlt: "Membangun IKN, Mewujudkan Wacana Lama Indonesia",
				imageUrl: "/assets/hero-example.jpg",
			},
			component: COMPONENT_IMAGE,
		},
	},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FullScreen: Story = {
	args: {
		block: {
			...meta.args.block,
			componentProps: {
				...meta.args.block.componentProps,
				className: "max-w-full",
			},
		},
	},
};
