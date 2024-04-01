import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
	title: "Article Generator Dnd",
	description: "Easy drag drop article components",
};
export default function GeneratorLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="flex h-screen overflow-hidden">
		<Toaster
			position="bottom-right"
			reverseOrder={false}
		/>
		{children}
	</div>;
}
