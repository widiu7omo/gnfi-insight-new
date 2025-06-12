import { FacebookIcon, Share2Icon, TwitterIcon } from "lucide-react";
import WhatsappIcon from "./wa-icon";

export default function Footer() {
	return (
		<div className="text-red-500 bg-white w-full text-center py-8 text-base xl:text-2xl relative overflow-clip flex flex-col items-center space-y-8">
			<div className="sharethis-inline-share-buttons" />
			<div>
				<span className="text-lg">Dibuat oleh </span>
				<span className="font-bold">Good News From Indonesia</span>
			</div>
			<div className="">
				<img src="/assets/gnfi.svg" alt="Logo GNFI" className="h-[80px]" />
			</div>
			<div className="flex flex-col">
				<span className="text-lg">Diterbitkan pada</span>
				<span className="font-bold">18 Maret 2024</span>
			</div>
			{/* @ts-ignore */}
			<div className="donation-container" program="gnfi-insight-bangun-wawasan-lewat-data-dan-cerita"></div>
		</div>
	);
}
