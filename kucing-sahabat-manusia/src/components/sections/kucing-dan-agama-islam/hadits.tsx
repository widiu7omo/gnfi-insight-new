import { baseUrl } from "@/constants/meta";
import HaditsCaption from "./hadits-caption";

export default function BrownCat() {
	return (
		<div className="absolute z-10 -top-[2rem] xl:top-[5rem] right-0">
			<div className="relative w-full xl:w-[500px] flex-none">
				<img src={`${baseUrl}/assets/hadits.png`} alt="Hadist" className="relative" />
				<HaditsCaption />
			</div>
		</div>
	);
}
