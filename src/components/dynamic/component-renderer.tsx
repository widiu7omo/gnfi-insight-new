import { BlockType } from "@/data/types";
import IntroductionHero from "./introduction-hero";
import SectionFirstPemilu from "./section-first-pemilu";
import SectionFirstPemiluOldImage from "./section-first-pemilu-old-image";

export default function ComponentRenderer({ block }: { block: BlockType }) {
  // TODO: dynamic compenent renderer
  if (block.content === "IntroductionHero") {
    return <IntroductionHero block={block} />;
  }
  if (block.content === "SectionFirstPemilu") {
    return <SectionFirstPemilu />;
  }
  if (block.content === "SectionFirstPemiluOldImage") {
    return <SectionFirstPemiluOldImage />;
  }
  return (
    <div className="text-xl font-medium text-neutral-600">
      TODO: Dynamic Component Renderer
    </div>
  );
}
