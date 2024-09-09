import Navbar from "@/components/reusable/nav-bar";
import Toc from "@/components/reusable/toc";
import type { Metadata } from "next";
import IntroductionHero from "@/components/dynamic/introduction-hero";
import SectionOne from "@/components/sections/membangun-ikn";
import SectionTwo from "@/components/sections/pindah-ibu-kota-merdeka";
import IllustrationJakarta from "@/components/sections/ibu-kota-selain-jakarta";
import SectionFour from "@/components/sections/pindah-ke-jonggol";
import SectionSix from "@/components/sections/mewujudkan-wacana-lama";
import SectionThree from "@/components/sections/pindah-ke-palangkaraya";
import SectionFive from "@/components/sections/tersandung-anggaran";
import SectionSeven from "@/components/sections/belajar-dari-negara-lain";
import SectionEight from "@/components/sections/peluang-dan-tantangan-ikn";
import Footer from "@/components/reusable/footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://insight.goodnewsfromindonesia.id/membangun-ikn-mewujudkan-wacana-lama-indonesia",
  ),
  title:
    "Membangun IKN, Mewujudkan Wacana Lama Indonesia | GNFI Insight",
  description: "Membangun IKN, Mewujudkan Wacana Lama Indonesia",
  openGraph: {
    title:
      "Membangun IKN, Mewujudkan Wacana Lama Indonesia | GNFI Insight",
    images: "/assets/ikn-cover.jpg",
  },
  twitter: {
    title:
      "Membangun IKN, Mewujudkan Wacana Lama Indonesia | GNFI Insight",
    images: "/assets/ikn-cover.jpg",
  },
};
export default function Home() {
  return (
    <main className="relative w-full bg-neutral-50">
      <Navbar />
      <Toc />
      <IntroductionHero />
      <SectionOne />
      <SectionTwo />
      <IllustrationJakarta />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </main>
  );
}
