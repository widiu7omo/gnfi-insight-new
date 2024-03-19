import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type OrnamentType = {
	className?: string;
};
export default function Ornament({
	className,
	children,
}: PropsWithChildren<OrnamentType>) {
	return (
		<div className={cn("absolute hidden md:block", className)}>{children}</div>
	);
}
