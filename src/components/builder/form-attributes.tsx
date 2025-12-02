import { Field, FieldContent, FieldGroup, FieldLabel } from "../ui/field";
import { DatePicker } from "../ui/date-picker";
import { Credits, useCredits, usePublishedAt } from "@/store/useTitle";
import { PageWrapperType } from "./page-wrapper";
import { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
export default function FormAttributes({ metadata }: { metadata: PageWrapperType["initMetadata"] }) {
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
            <p className="text-lg font-bold">Article Configuration</p>
            <p className="text-sm text-muted-foreground">Set article published date, credits inside footer</p>
        </div>
        <FieldGroup className="gap-4">
            <Field>
                <FieldLabel>Published At</FieldLabel>
                <FieldContent>
                    <DatePicker defaultValue={publishedAt} onValueChange={setPublishedAt} />
                </FieldContent>
            </Field>
            <div className="mb-2 space-y-0">
                <p className="text-lg font-bold">Credits</p>
                <p className="text-sm text-muted-foreground">All divisions involved in article creation</p>
            </div>
            <Field>
                <FieldLabel>Editor</FieldLabel>
                <FieldContent>
                    <Textarea
                        value={credits?.editors}
                        onChange={(e) => setCredits(prev => ({ ...prev, editors: e.target.value }))}
                    />
                </FieldContent>
            </Field>
            <Field>
                <FieldLabel>Writers</FieldLabel>
                <FieldContent>
                    <Textarea
                        value={credits?.writers}
                        onChange={(e) => setCredits(prev => ({ ...prev, writers: e.target.value }))}
                    />
                </FieldContent>
            </Field>
            <Field>
                <FieldLabel>Design & Visual</FieldLabel>
                <FieldContent>
                    <Textarea
                        value={credits?.designers}
                        onChange={(e) => setCredits(prev => ({ ...prev, designers: e.target.value }))}
                    />
                </FieldContent>
            </Field>
            <Field>
                <FieldLabel>Web & Animations</FieldLabel>
                <FieldContent>
                    <Textarea
                        value={credits?.developers}
                        onChange={(e) => setCredits(prev => ({ ...prev, developers: e.target.value }))}
                    />
                </FieldContent>
            </Field>
            <Button onClick={handleSaveAttributes}>
                Save
            </Button>
        </FieldGroup>
    </>)
}