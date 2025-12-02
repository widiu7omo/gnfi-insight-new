import SeoImage from "./seo-image";
import {
    useSeoTitle,
    useSeoDesc,
} from "@/store/useTitle";
import type { PageWrapperType } from "./page-wrapper";
import { useState } from "react";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { Field, FieldLabel } from "../ui/field";

export default function FormMetadata({
    metadata,
}: { metadata: PageWrapperType["initMetadata"] }) {
    const [_, saveSeoTitle] = useSeoTitle();
    const [_1, saveSeoDesc] = useSeoDesc();
    const [seoTitle, setSeoTitle] = useState(metadata.seo.title)
    const [seoDesc, setSeoDesc] = useState(metadata.seo.desc)
    return (
        <div className="space-y-3 p-0.5 rounded-2xl">
            <Field>
                <FieldLabel htmlFor="meta-title">Title</FieldLabel>
                <Textarea id="meta-title"
                    value={seoTitle}
                    onChange={(e) => setSeoTitle(e.target.value)}
                    onBlur={() => {
                        saveSeoTitle(seoTitle)
                        toast.success("Saved")
                    }}
                    placeholder="Meta Title"
                />
            </Field>
            <Field>
                <FieldLabel htmlFor="meta-desc">Description</FieldLabel>
                <Textarea id="meta-desc"
                    onChange={(e) => setSeoDesc(e.target.value)}
                    value={seoDesc}
                    onBlur={() => {
                        saveSeoDesc(seoDesc)
                        toast.success("Saved")
                    }}
                    placeholder="Meta Description"
                />
            </Field>
            <Field className="">
                <FieldLabel htmlFor="meta-thumb">Thumbnail</FieldLabel>
                <SeoImage defaultImage={metadata.seo.image} />
            </Field>
        </div>
    );
}
