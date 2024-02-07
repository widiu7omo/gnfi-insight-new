import { PropsWithChildren } from "react";

export default function Section({
  children,
  ...rest
}: PropsWithChildren<{ id: string }>) {
  return (
    <section className="prose prose-neutral" id={rest.id}>
      {children}
    </section>
  );
}
export function SectionHero({ children }: PropsWithChildren) {
  return <div className="text-gray-500">{children}</div>;
}
export function SectionContent({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}
Section.Hero = SectionHero;
Section.Content = SectionContent;
