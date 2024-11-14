import { cn } from "@/lib/utils";
import { useBlocks } from "@/store/useBlocks";
import { TrashIcon } from "lucide-react";
import type { PropsWithChildren } from "react";
type BlockWrapperType = {
    sectionId: string;
    index: number;
    label: string;
    className?: string;
}
export default function BlockWrapper({ children, sectionId, index, label, className }: PropsWithChildren<BlockWrapperType>) {
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

    return <div className={cn("p-4 space-y-4", className)}>
        <div className="flex justify-between text-xl font-semibold">
            <span>{label}</span>
            <button
                onClick={removeBlock}
                type="button"
                className="inline-flex px-3 py-2 text-sm text-white bg-red-800 rounded-lg transition-all">
                <TrashIcon size={20} className="mr-2" />
                <span>Remove Block</span>
            </button>
        </div>
        {children}
    </div>;
}
