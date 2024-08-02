import { baseUrl } from "@/constants/meta";

export default function Quotes() {
	return (
		<div className="absolute z-10 top-[3rem] left-0 md:block hidden">
			<div className="relative w-[280px] flex-none">
				<img src={`${baseUrl}/assets/quotes.png`} alt="Quotes" className="relative" />
			</div>
		</div>
	);
}
