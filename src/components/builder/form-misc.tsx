import { Field, FieldContent, FieldGroup, FieldLabel } from "../ui/field";
import { Credits, useCredits, usePublishedAt } from "@/store/useTitle";
import { PageWrapperType } from "./page-wrapper";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";
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
        <FieldGroup className="gap-4">
            <Field>
                <FieldLabel>Finished</FieldLabel>
                <FieldContent>
                    <div className="flex items-center space-x-2">
                        <Switch id="mark-finished" />
                        <Label htmlFor="mark-finished">Finished</Label>
                    </div>
                </FieldContent>
            </Field>
            <div className="mb-2 space-y-0">
                <p className="text-lg font-bold">Credits</p>
                <p className="text-sm text-muted-foreground">All divisions involved in article creation</p>
            </div>
            <Field>
                <FieldLabel>Featured Article</FieldLabel>
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