import { baseUrl } from "@/constants/meta";

export default function Ornament3() {
	return (
		<div className="absolute right-[-9rem] bottom-0 py-20 h-full md:block hidden bg-[#D9D9D9] ">
			<div className="relative flex-none">
				<img
					src={`${baseUrl}/assets/grey-white-cat.png`}
					alt="Reverse Quote Symbol"
					className="relative"
				/>
			</div>
		</div>
	);
}
