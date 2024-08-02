import { baseUrl } from "@/constants/meta";

export default function BrownCat() {
	return (
		<div className="absolute z-0 bottom-0 left-[-7rem] sm:left-[-11rem] xl:-left-[15rem]">
			<div className="flex-none">
				<img
					src={`${baseUrl}/assets/brown-cat.png`}
					alt="Kucing Coklat"
					className="relative w-[300px] sm:w-[400px] xl:h-auto"
				/>
			</div>
		</div>
	);
}
