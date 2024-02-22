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
import Footer from "../reusable/footer";

export default function ComponentRenderer({ block }: { block: BlockType }) {
  // TODO: dynamic compenent renderer
  if (block.content === "IntroductionHero") {
    return <IntroductionHero block={block} />;
  }
  if (block.content === "Footer") {
    return <Footer />;
  }
  return (
    <div className="text-xl font-medium text-neutral-600">
      TODO: Dynamic Component Renderer
    </div>
  );
}
