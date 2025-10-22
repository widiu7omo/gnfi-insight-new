"use client";
import { cn } from "@/lib/utils";
import { Navbar } from "./Navbar";
import { COMPONENT_NAVBAR } from "@/data/component-front";
type NavbarType = {
	blurEffect?: boolean;
};
export function NavbarPreview({ blurEffect }: NavbarType) {
	return (
		<div
			className={cn(
				"h-[calc(100vh+800px)]",
				blurEffect ? "bg-orange-800" : "bg-black",
			)}
		>
			<Navbar
				block={{
					component: COMPONENT_NAVBAR,
					componentProps: { blurEffect: blurEffect },
				}}
			/>
		</div>
	);
}
