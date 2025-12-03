import { Field, FieldContent, FieldGroup } from "../ui/field";
import { Credits, useCredits, usePublishedAt } from "@/store/useTitle";
import { PageWrapperType } from "./page-wrapper";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
export default function FormMisc({ metadata }: { metadata: PageWrapperType["initMetadata"] }) {
    const [publishedAt, setPublishedAt] = usePublishedAt()
    const [initCredits, setCreditsAtom] = useCredits()
    const [credits, setCredits] = useState<Credits>(initCredits)

    useEffect(() => {
        setPublishedAt(metadata.seo.publishedAt ?? new Date().toISOString())
        setCredits(metadata.credits)
    }, [])

    const handleSaveAttributes = () => {
        if (publishedAt)
            setPublishedAt(publishedAt)
        if (credits)
            setCreditsAtom(credits);
    };

    return (<>
        <div className="mb-2 space-y-0">
            <p className="text-lg font-bold">Misc Configuration</p>
            <p className="text-sm text-muted-foreground">Set article as featured, mark as finished, etc</p>
        </div>
        <FieldGroup className="gap-4 pt-2">
            <Field>
                <FieldContent>
                    <div className="flex items-center space-x-2">
                        <Switch id="mark-finished" />
                        <Label htmlFor="mark-finished">Finished</Label>
                    </div>
                </FieldContent>
            </Field>
            <Field>
                <FieldContent>
                    <div className="flex items-center space-x-2">
                        <Switch id="mark-featured" />
                        <Label htmlFor="mark-featured">Featured Article</Label>
                    </div>
                </FieldContent>
            </Field>
            <Button onClick={handleSaveAttributes}>
                Save
            </Button>
        </FieldGroup>
    </>)
}