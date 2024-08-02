import { baseUrl } from "@/constants/meta";

export default function CalicoCat() {
	return (
		<div className="absolute right-[-25rem] z-20 -top-[10rem] xl:block hidden">
			<div className="relative w-[500px] flex-none">
				<img
					src={`${baseUrl}/assets/calico-cat.png`}
					alt="Kucing Calico"
					className="relative"
				/>
			</div>
		</div>
	);
}
