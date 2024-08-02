import { baseUrl } from "@/constants/meta";

export default function BrownCat() {
	return (
		<div className="absolute z-10 -bottom-[20] right-0 ">
			<div className="relative  w-[200px] xl:w-[250px] flex-none">
				<img
					src={`${baseUrl}/assets/hadits-caption.png`}
					alt="Caption Hadits"
					className="relative"
				/>
			</div>
		</div>
	);
}
