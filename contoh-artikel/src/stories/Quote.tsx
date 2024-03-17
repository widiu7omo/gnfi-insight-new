"use client";

import Quote1 from "@/components/reusable/quote1";
import Quote2 from "@/components/reusable/quote2";
import Quote3 from "@/components/reusable/quote3";
import type { BlockType } from "@/data/types";
import { cn } from "@/lib/utils";
type QuoteType = {
	variant: number;
	className?: string;
	figureUrl: string;
	figureName: string;
	figureDesc?: string;
	quote: string;
};
export function Quote({ block }: { block: BlockType }) {
	const { variant, className, quote, figureName, figureUrl, figureDesc } =
		block.componentProps as QuoteType;
	let quoteComponent = null;
	switch (variant) {
		case 1:
			quoteComponent = (
				<Quote1 figureUrl={figureUrl} figureName={figureName} quote={quote} />
			);
			break;
		case 2:
			quoteComponent = (
				<Quote2 figureUrl={figureUrl} figureName={figureName} quote={quote} />
			);
			break;
		case 3:
			quoteComponent = (
				<Quote3
					figureUrl={figureUrl}
					figureName={figureName}
					quote={quote}
					figureDesc={figureDesc}
				/>
			);
			break;
	}
	return (
		<div className={cn("max-w-full mx-auto ", className)}>{quoteComponent}</div>
	);
}
