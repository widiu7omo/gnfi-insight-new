import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Article Generator Dnd",
	description: "Easy drag drop article components",
};
export default function GeneratorLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="flex h-screen overflow-hidden">{children}</div>;
}
