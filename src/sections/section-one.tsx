import Section from "@/components/base-section.tsx";
import HeroSectionOne from "@/assets/hero-section-one.png";
export default function SectionOne() {
  return (
    <Section id="introduction">
      <Section.Hero>
        <img className={"bg-cover w-full"} src={HeroSectionOne} alt="IKN" />
      </Section.Hero>
      <Section.Content>
        <p>Contoh</p>
      </Section.Content>
    </Section>
  );
}
