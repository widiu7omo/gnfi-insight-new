import SeoImage from "@/components/generator/seo-image";
import {
    useSeoTitle,
    useSeoDesc,
} from "@/store/useTitle";
import type { PageWrapperType } from "./page-wrapper";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FormMetadata({
    metadata,
}: { metadata: PageWrapperType["initMetadata"] }) {
    const [_, saveSeoTitle] = useSeoTitle();
    const [_1, saveSeoDesc] = useSeoDesc();
    const [seoTitle, setSeoTitle] = useState(metadata.seo.title)
    const [seoDesc, setSeoDesc] = useState(metadata.seo.desc)
    return (
        <div>
            <div className="text-base font-bold text-gray-500">Metadata</div>
            <div className="p-5 border border-gray-200 border-dashed space-y-2 rounded-2xl">
                <div>
                    <span className="text-gray-500">Meta Title</span>
                    <input
                        id="seo-title"
                        type="text"
                        className="w-full text-lg outline-none text-neutral-700"
                        value={seoTitle}
                        onChange={(e) => setSeoTitle(e.target.value)}
                        onBlur={() => {
                            saveSeoTitle(seoTitle)
                            toast.success("Saved")
                        }}
                    />
                </div>
                <div>
                    <span className="text-gray-500">Meta Description</span>
                    <textarea
                        id="seo-desc"
                        className="w-full text-lg outline-none text-neutral-700"
                        onChange={(e) => setSeoDesc(e.target.value)}
                        value={seoDesc}
                        onBlur={() => {
                            saveSeoDesc(seoDesc)
                            toast.success("Saved")
                        }}
                    />
                </div>
                <div className="text-gray-500">
                    <span>Seo Image</span>
                    <SeoImage defaultImage={metadata.seo.image} />
                </div>
            </div>
        </div>
    );
}
