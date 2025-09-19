import type { Meta, StoryObj } from "@storybook/react";
import SectionGroup from "./SectionGroup";

const meta = {
	title: "Insight/Section Group",
	component: SectionGroup,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	args: {
		children: (
			<div className="p-8 max-w-7xl mx-auto">
				<div className="font-bold text-center space-y-4 p-8 rounded-xl border border-gray-300 border-dashed ">
					<h1>Header Component</h1>
					<p>Paragraph Component</p>
					<footer>Footer Component</footer>
				</div>
			</div>
		),
		sectionId: "section--1",
	},
} satisfies Meta<typeof SectionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithBackgroundColor: Story = {
	args: {
		...meta.args,
		className: "bg-gray-100 mx-auto",
	},
};
export const WithLinearBackgroundColor: Story = {
	args: {
		...meta.args,
		className: "bg-gradient-to-b h-screen text-white from-black to-white/0 ",
	},
};
