import Navbar from "@/components/reusable/nav-bar";
import Toc from "@/components/reusable/toc";
import { Metadata } from "next";
import IntroductionHero from "@/components/dynamic/introduction-hero";
import SectionOne from "@/components/sections/membangun-ikn";
import SectionTwo from "@/components/sections/pindah-ibu-kota-merdeka";
import SectionThree from "@/components/sections/ibu-kota-selain-jakarta";
import SectionFour from "@/components/sections/pindah-ke-palangkaraya";
import SectionFive from "@/components/sections/pindah-ke-jonggol";
import SectionSix from "@/components/sections/tersandung-anggaran";

export const metadata: Metadata = {
  title:
    "Membangun IKN, Mewujudkan Wacana Lama Indonesia | Good News From Indonesia",
  description: "Membangun IKN, Mewujudkan Wacana Lama Indonesia",
};
export default function Home() {
  return (
    <main className="bg-neutral-50 w-full relative">
      <Navbar />
      <Toc />
      <IntroductionHero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </main>
  );
}
