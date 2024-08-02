import { baseUrl } from "@/constants/meta";
import BrownCat from "./brown-cat";

export default function AshCat() {
	return (
		<div className="absolute z-20 bottom-0 xl:ml-[50px]">
			<div className="relative flex-none z-10">
				<img
					src={`${baseUrl}/assets/ash-cat.png`}
					alt="Kucing Abu"
					className="relative z-10 w-[300px] sm:w-[400px] xl:w-[500px]"
				/>
				<BrownCat />
			</div>
		</div>
	);
}
