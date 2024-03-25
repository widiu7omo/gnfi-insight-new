import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Quote } from "./Quote";
import { COMPONENT_QUOTE } from "@/data/component-front";

const meta = {
	title: "Insight/Quote",
	component: Quote,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	args: {
		block: {
			componentProps: {
				variant: 1,
				figureName: "Bambang Brojonegoro",
				figureUrl: "assets/figure-example.png",
				className: "max-w-2xl bg-orange-200 px-4",
				quote:
					"“Karena buat Soekarno tak ada kota lain yang punya identitas seperti Jakarta yang menjadi wadah tumbuhnya nasionalisme di Indonesia. Puncak nasionalisme di Indonesia itu di Jakarta. Inilah ibukota politik, tak tergantikan. Ini orientasi Soekarno,” ujar Rizal yang dimuat Kompas.",
			},
			component: COMPONENT_QUOTE,
		},
	},
} satisfies Meta<typeof Quote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Quote1: Story = {};
export const Quote2: Story = {
	args: {
		block: {
			componentProps: {
				...meta.args.block.componentProps,
				variant: 2,
				className: "max-w-3xl",
			},
			component: COMPONENT_QUOTE,
		},
	},
};
export const Quote3: Story = {
	args: {
		block: {
			componentProps: {
				...meta.args.block.componentProps,
				variant: 3,
				figureDesc:
					"Guru Besar Fakultas Ekonomi dan Bisnis Universitas Indonesia dan eks Menteri Perencanaan Pembangunan Nasional Indonesia/Kepala Bappenas",
				figureUrl: "assets/figure-square-example.png",
				className: "",
			},
			component: COMPONENT_QUOTE,
		},
	},
};
