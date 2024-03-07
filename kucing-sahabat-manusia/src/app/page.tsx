import Navbar from "@/components/reusable/nav-bar";
import Toc from "@/components/reusable/toc";
import { Metadata } from "next";
import IntroductionHero from "@/components/dynamic/introduction-hero";
import SectionOne from "@/components/sections/kucing-bagian-hidup";
import SectionTwo from "@/components/sections/orang-indonesia-suka-kucing";
import Footer from "@/components/reusable/footer";
import SectionThree from "@/components/sections/dipelihara-sejak-lama";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.goodnewsfromindonesia.id/special-insights/membangun-ikn-mewujudkan-wacana-lama-indonesia"
  ),
  title: "Kucing, Sahabat Manusia | Good News From Indonesia",
  description: "Kucing, Sahabat Manusia",
  alternates: {
    canonical: "index.html",
  },
  openGraph: {
    title: "Kucing, Sahabat Manusia | Good News From Indonesia",
    images: "/assets/ikn-cover.jpg",
  },
  twitter: {
    title: "Kucing, Sahabat Manusia | Good News From Indonesia",
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
      <SectionThree />
      <Footer />
    </main>
  );
}
