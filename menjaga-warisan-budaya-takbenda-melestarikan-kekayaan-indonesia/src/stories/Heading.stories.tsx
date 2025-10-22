import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";
import { COMPONENT_HEADING } from "@/data/component-front";

const meta = {
	title: "Insight/Heading",
	component: Heading,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	args: {
		block: {
			componentProps: {
				content: "<h1>Kucing, semakin digemari masyarakat Indonesia</h1>",
			},
			component: COMPONENT_HEADING,
		},
	},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {};
export const H2: Story = {
	args: {
		block: {
			...meta.args.block,
			componentProps: {
				content: "<h2>Kucing, semakin digemari masyarakat Indonesia</h2>",
			},
		},
	},
};
export const H3: Story = {
	args: {
		block: {
			...meta.args.block,
			componentProps: {
				content: "<h3>Kucing, semakin digemari masyarakat Indonesia</h3>",
			},
		},
	},
};
export const H4: Story = {
	args: {
		block: {
			...meta.args.block,
			componentProps: {
				content: "<h4>Kucing, semakin digemari masyarakat Indonesia</h4>",
			},
		},
	},
};
export const H5: Story = {
	args: {
		block: {
			...meta.args.block,
			componentProps: {
				content: "<h5>Kucing, semakin digemari masyarakat Indonesia</h5>",
			},
		},
	},
};
export const H6: Story = {
	args: {
		block: {
			...meta.args.block,
			componentProps: {
				content: "<h6>Kucing, semakin digemari masyarakat Indonesia</h6>",
			},
		},
	},
};
