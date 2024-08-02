import { baseUrl } from "@/constants/meta";

export default function BlackCat() {
	return (
		<div className="absolute right-[3%] z-10 bottom-[-10%] xl:block hidden">
			<div className="relative w-[500px] flex-none">
				<img
					src={`${baseUrl}/assets/black-cat.png`}
					alt="Statistik Peliharaan"
					className="relative"
				/>
			</div>
		</div>
	);
}
