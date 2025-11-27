"use client";

import Quote1 from "./quote1";
import Quote2 from "./quote2";
import Quote3 from "./quote3";
import { cn } from "@/lib/utils";
export type QuoteType = {
	variant: number;
	className?: string;
	figureUrl: string;
	figureName: string;
	figureDesc?: string;
	quote: string;
};
export function Quote(props: QuoteType) {
	const { variant, className, quote, figureName, figureUrl, figureDesc } = props;
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
