import IntroductionHero from "@/components/dynamic/introduction-hero";
import Footer from "@/components/reusable/footer";
import Navbar from "@/components/reusable/nav-bar";
import Toc from "@/components/reusable/toc";
import SectionThree from "@/components/sections/dipelihara-sejak-lama";
import SectionFour from "@/components/sections/hewan-penuh-mitos";
import SectionOne from "@/components/sections/kucing-bagian-hidup";
import SectionFive from "@/components/sections/kucing-dan-agama-islam";
import SectionTwo from "@/components/sections/orang-indonesia-suka-kucing";
import SectionSix from "@/components/sections/ragam-jenis-kucing";
import SectionSeven from "@/components/sections/tertarik-memelihara-kucing";
import type { Metadata } from "next";

import "slick-carousel/slick/slick.css";
import "./slick-carousel.css";

export const metadata: Metadata = {
	metadataBase: new URL(
		"https://insight.goodnewsfromindonesia.id/kucing-sahabat-manusia",
	),
	title: "Kucing, Sahabat Manusia | GNFI Insight",
	description: "Kucing, Sahabat Manusia",
	openGraph: {
		title: "Kucing, Sahabat Manusia | GNFI Insight",
		images: "/assets/ikn-cover.jpg",
	},
	twitter: {
		title: "Kucing, Sahabat Manusia | GNFI Insight",
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
			<SectionFour />
			<SectionFive />
			<SectionSix />
			<SectionSeven />
			<Footer />
		</main>
	);
}
