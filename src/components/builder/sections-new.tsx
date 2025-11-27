import { useDrop } from "react-dnd";
import { type DraggableItem, ItemTypes } from "../../types";
import { useSections, useLoadingState, useActiveSection } from "@/store/useSections";
type SectionsType = {
	onDrop: (item: DraggableItem) => void;
};
import { ArrowBigDown, GroupIcon } from "lucide-react";
import SectionItemNew from "./section-item-new";
import { Accordion } from "../ui/accordion";
import { Skeleton } from "../ui/skeleton";
export default function SectionsNew({ onDrop }: SectionsType) {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.SECTION,
		drop: onDrop,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));
	const isActive = canDrop && isOver;
	const [components] = useSections();
	const [isLoading] = useLoadingState();
	const [_, setActiveSection] = useActiveSection();
	// Show loading skeleton
	if (isLoading) {
		return (
			<div className="rounded-3xl space-y-4 px-3 p-3 border-2 border-dashed bg-neutral-100 dark:bg-primary-foreground">
				<div className="space-y-4">
					<Skeleton className="h-24 w-full rounded-xl" />
					<Skeleton className="h-24 w-full rounded-xl" />
					<Skeleton className="h-24 w-full rounded-xl" />
				</div>
			</div>
		);
	}

	return (
		<div
			// @ts-ignore
			ref={drop}
			data-testid="dustbin"
			className={`rounded-3xl space-y-4 px-3 border-2 border-dashed ${components.length > 0 ? "p-3" : "h-[200px]"
				} flex items-center justify-center flex-col ${isActive ? "bg-neutral-200 dark:bg-primary-foreground/80" : "bg-neutral-100 dark:bg-primary-foreground"
				}`}
		>
			{components.length > 0 &&
				<Accordion
					type="single"
					collapsible onValueChange={val => setTimeout(() => setActiveSection(val), 500)}
					className="w-full space-y-4"
					defaultValue="section-1" >
					{components.map((component, index) => {
						return (
							<SectionItemNew
								sectionId={`section-${component.index}`}
								key={`${component.index}-key-${Math.random()}`}
								index={index}
							/>
						);
					})}
				</Accordion >
			}
			{components.length > 0 && <div className="text-neutral-500 space-y-3 font-medium flex items-center justify-center flex-col w-full py-3 border-2 border-dashed dark:border-white/10 border-neutral-500 rounded-xl">
				<span>
					{!isActive && (
						<GroupIcon strokeWidth={1} className="text-neutral-500" size={50} />
					)}
					{isActive && (
						<ArrowBigDown
							strokeWidth={1}
							className="text-neutral-500"
							size={50}
						/>
					)}
				</span>
				<span className="text-sm">{isActive ? "Release to drop" : "Drag new section here"}</span>
			</div>}
		</div>
	);
}
