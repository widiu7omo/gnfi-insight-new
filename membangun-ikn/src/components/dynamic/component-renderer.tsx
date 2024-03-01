import { BlockType } from "@/data/types";
import IntroductionHero from "./introduction-hero";
import Footer from "../reusable/footer";

export default function ComponentRenderer({ block }: { block: BlockType }) {
  // TODO: dynamic compenent renderer
  if (block.content === "IntroductionHero") {
    return <IntroductionHero />;
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
