import { PawPrintIcon } from "lucide-react";
import { indoCats } from "./IndonesianCats";
import { Carousel } from "@/components/post/carousel";
export default function SliderCats() {
	return (
		<div className="relative h-full w-full pb-12 ">
			<Carousel
				withBackground
				items={indoCats} includeName
				indicator={<PawPrintIcon className="text-white" />}
			/>
		</div>
	);
}