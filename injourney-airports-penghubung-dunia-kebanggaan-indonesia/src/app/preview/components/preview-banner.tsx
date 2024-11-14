import { XIcon } from "lucide-react";
import Link from "next/link";

export default function PreviewBanner() {
    return <div className="w-full h-[56px] flex justify-between pl-6 items-center bg-white border-b border-neutral-300">
        <div className="text-2xl font-semibold text-neutral-800">Preview Site</div>
        <div className="content-center h-full pl-2 pr-6 border-l border-neutral-300 hover:bg-neutral-200/80">
            <Link href={'/generator'} className="flex items-center text-neutral-700">
                <XIcon size={30} className="mr-2 text-neutral-700" />
                Back to Generator
            </Link>
        </div>
    </div>
}