import { BlockType } from "@/data/types";
import IntroductionHero from "./introduction-hero";
import SectionFirstPemilu from "./section-first-pemilu";
import SectionFirstPemiluOldImage from "./section-first-pemilu-old-image";
import SectionHistoryFirstPemilu from "./section-history-first-pemilu";
import SectionGolkarControllingElection from "./section-golkar-controlling-election";
import SectionTimelineGolkar from "./section-timeline-golkar";
import SectionGolkarOldImage from "./section-golkar-old-image";
import SectionOrbaCollapsed from "./section-orba-collapsed";
import SectionPresidentDirect from "./section-president-direct";
import SectionDirectElection from "./section-direct-election";
import SectionJokowiVPrabowo from "./section-jokowi-v-prabowo";

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
  if (block.content === "SectionHistoryFirstPemilu") {
    return <SectionHistoryFirstPemilu />;
  }
  if (block.content === "SectionGolkarControllingElection") {
    return <SectionGolkarControllingElection />;
  }
  if (block.content === "SectionTimelineGolkar") {
    return <SectionTimelineGolkar />;
  }
  if (block.content === "SectionGolkarOldImage") {
    return <SectionGolkarOldImage />;
  }
  if (block.content === "SectionOrbaCollapsed") {
    return <SectionOrbaCollapsed />;
  }
  if (block.content === "SectionPresidentDirect") {
    return <SectionPresidentDirect />;
  }
  if (block.content === "SectionDirectElection") {
    return <SectionDirectElection />;
  }
  if (block.content === "SectionJokowiVPrabowo") {
    return <SectionJokowiVPrabowo />;
  }

  return (
    <div className="text-xl font-medium text-neutral-600">
      TODO: Dynamic Component Renderer
    </div>
  );
}
