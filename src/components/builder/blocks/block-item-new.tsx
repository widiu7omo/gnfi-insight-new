import {
	COMPONENT_NAVBAR,
	COMPONENT_HERO,
	COMPONENT_IMAGE,
	COMPONENT_PARAGRAPH,
	COMPONENT_SECTION_HEADER,
	COMPONENT_HEADING,
	COMPONENT_QUOTE,
} from "@/lib/component";
import type { BlockType } from "@/types";
import BlockHeading from "./block-heading";
import BlockParagraph from "./block-paragraph";
import BlockImage from "./block-image";
import BlockCustom from "./block-custom";
import BlockNavbar from "./block-navbar";
import BlockHero from "./block-hero";
import BlockSectionHeader from "./block-section-header";
import BlockQuote from "./block-quote";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { GalleryThumbnailsIcon, GalleryVerticalIcon, HeadingIcon, ImageIcon, LayoutTemplateIcon, AppWindowIcon, QuoteIcon, Settings, TextIcon, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { PropsWithChildren, Suspense, useRef, useState } from "react";
import { useBlocks } from "@/store/useBlocks";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
export type BlockItemType = {
	block: BlockType;
	sectionId: string;
	index: number;
	saveConfig: (index: number, updater: ((prev: unknown) => unknown) | unknown) => void;
};
function getBlockData(block: BlockType) {
	if (block.component === COMPONENT_NAVBAR) return {
		name: 'Navbar',
		icon: AppWindowIcon,
		component: BlockNavbar
	};
	if (block.component === COMPONENT_HERO) return {
		name: 'Hero',
		icon: GalleryThumbnailsIcon,
		component: BlockHero
	};
	if (block.component === COMPONENT_QUOTE) return {
		name: 'Quote',
		icon: QuoteIcon,
		component: BlockQuote
	};
	if (block.component === COMPONENT_SECTION_HEADER) return {
		name: 'Section Header',
		icon: GalleryVerticalIcon,
		component: BlockSectionHeader
	};
	if (block.component === COMPONENT_HEADING) return {
		name: 'Heading',
		icon: HeadingIcon,
		component: BlockHeading
	};
	if (block.component === COMPONENT_PARAGRAPH) return {
		name: 'Paragraph',
		icon: TextIcon,
		component: BlockParagraph
	};
	if (block.component === COMPONENT_IMAGE) return {
		name: 'Image',
		icon: ImageIcon,
		component: BlockImage
	};
	return {
		name: 'Custom Component',
		icon: LayoutTemplateIcon,
		component: BlockCustom
	};
}
function SheetParagraph({ children, onSave }: PropsWithChildren<{ onSave?: () => void }>) {
	const [open, setOpen] = useState<boolean>(false)
	const handleSave = () => {
		setOpen(false)
		// Give delay for moment
		setTimeout(() => onSave?.(), 200)
	}
	return <Drawer open={open} onOpenChange={(val) => setOpen(val)}>
		<DrawerTrigger asChild>
			<Button variant="secondary" size={'icon-sm'}>
				<Settings />
			</Button>
		</DrawerTrigger>
		<DrawerContent>
			<DrawerTitle>
			</DrawerTitle>
			<ScrollArea className="h-[calc(100dvh-20rem)] overflow-y-auto relative">
				<div className="max-w-7xl mx-auto relative">
					{children}
				</div>
			</ScrollArea>
			<DrawerFooter className="max-w-7xl mx-auto w-full">
				<div className="space-x-2 flex flex-row items-center justify-end w-full">
					<Button onClick={handleSave}>Save</Button>
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</div>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
}
export default function BlockItemNew({ block, sectionId, index, saveConfig }: BlockItemType) {
	const dataBlock = getBlockData(block);
	const saveHandlerRef = useRef<(() => void) | null>(null);
	const [_, setBlocks] = useBlocks();
	const removeBlock = () => {
		setBlocks((prev) => {
			prev[sectionId].splice(index, 1);
			for (const block of prev[sectionId]) {
				const index = prev[sectionId].indexOf(block);
				block.order = index;
				block.index = index;
			}
			const currentSections = prev[sectionId];
			return { ...prev, [sectionId]: currentSections };
		});
	};
	return <div className="flex gap-4 bg-primary w-full items-center rounded-md py-1 pl-3 pr-1">
		<div className="gap-2 flex items-center flex-1 text-primary-foreground">
			<dataBlock.icon size={20} />
			<span className="text-sm font-medium">{dataBlock.name}</span>
		</div>
		<div className="flex items-center gap-1">
			{dataBlock.name === 'Paragraph' ? <SheetParagraph onSave={() => { console.log('Saved!'); saveHandlerRef.current?.() }}>
				<Suspense fallback={<Skeleton className="h-32 w-full" />}>
					<dataBlock.component sectionId={sectionId} index={index} saveConfig={saveConfig} saveHandlerRef={saveHandlerRef} />
				</Suspense>
			</SheetParagraph> :
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="secondary" size={'icon-sm'}>
							<Settings />
						</Button>
					</PopoverTrigger>
					<PopoverContent className={cn('w-80', (dataBlock.name === 'Section Header' || dataBlock.name === 'Hero' || dataBlock.name === 'Heading' || dataBlock.name === 'Image') && 'w-5xl')}>
						<Suspense fallback={<Skeleton className="h-32 w-full" />}>
							<dataBlock.component sectionId={sectionId} index={index} saveConfig={saveConfig} />
						</Suspense>
					</PopoverContent>
				</Popover>
			}
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button variant="secondary" className="dark:bg-red-700 hover:dark:opacity-80" size={'icon-sm'}>
						<X />
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogTitle>
						Are you sure?
					</AlertDialogTitle>
					<AlertDialogDescription>This operation cannot be restore</AlertDialogDescription>
					<AlertDialogFooter>
						<AlertDialogAction onClick={removeBlock}>
							Yes, delete!
						</AlertDialogAction>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

		</div>
	</div >;
}
