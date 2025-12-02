import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useBlocks } from "@/store/useBlocks";
import { TrashIcon } from "lucide-react";
import type { PropsWithChildren } from "react";
type BlockWrapperType = {
    sectionId: string;
    index: number;
    label: string;
    compact?: boolean;
    className?: string;
}
export default function BlockWrapper({ children, sectionId, index, label, className, compact = false }: PropsWithChildren<BlockWrapperType>) {
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

    if (compact) {
        return <div className={cn(className)}>
            <div className="text-lg font-semibold flex justify-between">
                <span>{label}</span>
                <Button
                    variant={'destructive'}
                    size={'icon-sm'}
                    onClick={removeBlock}
                    type="button"
                    className="text-white bg-red-800!">
                    <TrashIcon size={20} />
                </Button>
            </div>
            {children}
        </div>
    }
    return <div className={cn("p-4 space-y-4", className)}>
        <div className="text-xl font-semibold flex justify-between">
            <span>{label}</span>
            <Button
                onClick={removeBlock} variant={'destructive'}
                type="button" size="sm"
                className="text-white bg-red-800 rounded-lg text-sm px-3 py-2 transition-all inline-flex">
                <TrashIcon size={20} className="mr-2" />
                <span>Remove Block</span>
            </Button>
        </div>
        {children}
    </div>;
}
