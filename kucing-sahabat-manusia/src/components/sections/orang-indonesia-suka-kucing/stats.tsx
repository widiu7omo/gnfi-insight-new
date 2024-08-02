import { baseUrl } from "@/constants/meta";

export default function Stats() {
	return (
		<div className="mx-auto flex max-w-[65ch] flex-col px-4 xl:flex-row xl:px-0">
			<div className="relative w-[247px] flex-none">
				<img
					src={`${baseUrl}/assets/stats-peliharaan.png`}
					alt="Statistik Peliharaan"
					className="relative z-10"
				/>
			</div>
		</div>
	);
}
